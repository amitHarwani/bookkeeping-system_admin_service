import { PlatformFeature } from "../../db";


export class GetFeatureByIdResponse {
    constructor(
        public feature: PlatformFeature
    ){

    }
}