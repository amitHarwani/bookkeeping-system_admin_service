import { PlatformFeature } from "../../db";

export class GetMultipleFeaturesByIdRequest {
    constructor(
        public featureIds: Array<number>,
        public query?: {
            isEnabled: boolean
        }
    ){

    }
}

export class GetMultipleFeaturesByIdResponse {
    constructor(
        public features: PlatformFeature[]
    ){

    }
}