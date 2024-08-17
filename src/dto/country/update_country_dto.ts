import { Country } from "../../db";

export class UpdateCountryRequest {
    constructor(
        public countryId: number,
        public countryName: string,
        public phoneNumberCodes: Array<string>,
        public currency: string,
        public maxPhoneNumberDigits: number,
        public timezone: string
    ){

    }
}

export class UpdateCountryResponse {
    constructor(
        public country: Country,
        public message: string
    ){

    }
}