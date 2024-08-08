import { TaxDetail } from "../../db";

export class GetAllTaxDetailsResponse {
    constructor(
        public taxDetails: TaxDetail[]
    ){

    }
}