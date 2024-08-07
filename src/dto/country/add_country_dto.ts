import { Country } from "../../db";

export class AddCountryRequest {
    constructor(
        public countryName: string,
        public phoneNumberCodes: Array<string>,
        public currency: string,
        public maxPhoneNumberDigits: number
    ){

    }
}

export class AddCountryResponse {
    constructor(
        public country: Country,
        public message: string
    ){
        
    }
}