import { PlatformFeature } from "../../db";


export class UpdateFeatureRequest {
    constructor(
        public featureId: number,
        public featureName: string,
        public isEnabled: boolean,
        public isSystemAdminFeature: boolean,
        public dependentFeatureId?: number
    ){

    }
}

export class UpdateFeatureResponse {
    constructor(
        public feature: PlatformFeature,
        public message: string
    ){

    }
}