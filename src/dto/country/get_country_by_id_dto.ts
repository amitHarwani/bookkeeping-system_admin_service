import { Country } from "../../db";

export class GetCountryByIdResponse {
    constructor(
        public country: Country
    ){

    }
}