import { Country } from "../../db";


export class GetAllCountriesResponse {
    constructor(
        public countries: Country[]
    ){

    }
}