import { PlatformFeature } from "../../db";

export class AddFeatureRequest {
    constructor(
        public featureName: string,
        public isEnabled: boolean,
        public isSystemAdminFeature: boolean,
        public dependentFeatureId?: number
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