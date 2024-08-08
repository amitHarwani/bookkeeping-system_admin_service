import { TaxDetail } from "../../db";

export class GetTaxDetailByTaxIdResponse {
    constructor(public taxDetail: TaxDetail) {}
}
