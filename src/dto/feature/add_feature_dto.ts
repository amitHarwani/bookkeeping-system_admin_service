import { PlatformFeature } from "../../db";

export class AddFeatureRequest {
    constructor(
        public featureName: string,
        public isEnabled: boolean,
        public isSystemAdminFeature: boolean
    ){

    }
}

export class AddFeatureResponse {
    constructor(
        public feature: PlatformFeature,
        public message: string
    ){

    }
}