import { TaxDetail } from "../../db";

export class UpdateTaxDetailRequest {
    constructor(
        public taxId: number,
        public taxName: string,
        public countryId: number,
        public taxNickname: string,
        public taxPercentage: number,
        public isTaxOnInvoice: boolean,
        public isRegistrationOptional: boolean
    ){

    }
}

export class UpdateTaxDetailResponse {
    constructor(
        public taxDetail: TaxDetail,
        public message: string
    ){

    }
}