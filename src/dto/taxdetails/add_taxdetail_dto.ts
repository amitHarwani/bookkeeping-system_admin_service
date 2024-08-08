import { TaxDetail } from "../../db";

export class AddTaxDetailRequest {
    constructor(
        public taxName: string,
        public countryId: number,
        public taxNickname: string,
        public taxPercentage: number,
        public isTaxOnInvoice: boolean,
        public isRegistrationOptional: boolean
    ){

    }
}

export class AddTaxDetailResponse {
    constructor(
        public taxDetail: TaxDetail,
        public message: string
    ){

    }
}