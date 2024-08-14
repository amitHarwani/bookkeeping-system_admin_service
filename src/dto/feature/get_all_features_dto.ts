import { PlatformFeature } from "../../db";

export class GetAllFeaturesRequest {
    constructor(
        public query?: {
            isEnabled?: boolean,
            isSystemAdminFeature?: boolean
        }
    ){

    }
}

export class GetAllFeaturesResponse {
    constructor(
        public features: PlatformFeature[]
    ){

    }
}