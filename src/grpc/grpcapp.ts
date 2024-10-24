import {Server, ServerUnaryCall, sendUnaryData} from "@grpc/grpc-js";
import { taxDetails } from "db_service";
import { eq } from "drizzle-orm";
import { db } from "../db";
import {
    CountryId,
    SystemAdminServiceServer,
    SystemAdminServiceService,
    TaxDetailsOfCountryResponse,
} from "./proto/sys_admin_service";


/* GRPC Server */
const server = new Server();

const sysAdminServiceImplementation: SystemAdminServiceServer = {
    getTaxDetailsOfCountry: async function (
        call: ServerUnaryCall<CountryId, TaxDetailsOfCountryResponse>,
        callback: sendUnaryData<TaxDetailsOfCountryResponse>
    ): Promise<void> {
        /* Requested countryId */
        const countryId = Number(call.request.countryId);
        try {
            /* Tax details by country id */
            const recordsFound = await db
                .select()
                .from(taxDetails)
                .where(eq(taxDetails.countryId, countryId));

            callback(null, {
                isSuccess: true,
                taxDetails: recordsFound as Array<{
                    countryId: number;
                    taxId: number;
                    taxName: string;
                    taxPercentage: string;
                    taxNickname: string;
                    isRegistrationOptional: boolean;
                    isTaxOnInvoice: boolean;
                }>,
            });
        } catch (err) {
            callback(null, {
                isSuccess: false,
                taxDetails: [],
            });
        }
    },
};

/* Adding the get tax details of country service */
server.addService(SystemAdminServiceService, sysAdminServiceImplementation);

export default server;
