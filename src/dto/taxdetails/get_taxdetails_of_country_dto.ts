import { TaxDetail } from "../../db";

export class GetTaxDetailsOfCountryResponse {
    constructor(
        public taxDetails: TaxDetail[],
        public countryId: number
    ) {

    }
}