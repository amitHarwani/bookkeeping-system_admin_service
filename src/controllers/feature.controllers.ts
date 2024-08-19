import { platformFeatures } from "db_service";
import { and, eq, inArray } from "drizzle-orm";
import { NextFunction, Request, Response } from "express";
import { db } from "../db";
import {
    AddFeatureRequest,
    AddFeatureResponse,
} from "../dto/feature/add_feature_dto";
import {
    GetAllFeaturesRequest,
    GetAllFeaturesResponse,
} from "../dto/feature/get_all_features_dto";
import { GetFeatureByIdResponse } from "../dto/feature/get_feature_by_id_dto";
import {
    UpdateFeatureRequest,
    UpdateFeatureResponse,
} from "../dto/feature/update_feature_dto";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/async_handler";
import {
    GetMultipleFeaturesByIdRequest,
    GetMultipleFeaturesByIdResponse,
} from "../dto/feature/get_multiple_features_by_id_dto";

export const addFeature = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as AddFeatureRequest;

        /* Adding feature to DB */
        const featuresAdded = await db
            .insert(platformFeatures)
            .values({
                featureName: body.featureName,
                isEnabled: body.isEnabled,
                isSystemAdminFeature: body.isSystemAdminFeature,
                dependentFeatureId: body?.dependentFeatureId ? body.dependentFeatureId : null
            })
            .returning();

        return res.status(201).json(
            new ApiResponse<AddFeatureResponse>(201, {
                feature: featuresAdded[0],
                message: "feature added successfully",
            })
        );
    }
);

export const updateFeature = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as UpdateFeatureRequest;

        /* Updating the featureName and isEnabled flag in platform features table */
        const recordUpdated = await db
            .update(platformFeatures)
            .set({
                featureName: body.featureName,
                isEnabled: body.isEnabled,
                isSystemAdminFeature: body.isSystemAdminFeature,
                dependentFeatureId: body?.dependentFeatureId ? body.dependentFeatureId : null
            })
            .where(eq(platformFeatures.featureId, body.featureId))
            .returning();

        if (!recordUpdated.length) {
            throw new ApiError(400, "feature not found", []);
        }

        return res.status(200).json(
            new ApiResponse<UpdateFeatureResponse>(200, {
                feature: recordUpdated[0],
                message: "record updated successfully",
            })
        );
    }
);

export const getAllFeatures = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as GetAllFeaturesRequest;

        let recordsFound;

        /* If query is passed,  search by query (isEnabled flag and systemAdmin), else get all records*/
        if (body?.query) {
            let isEnabledCheck;
            let systemAdminCheck;
            
            if(typeof body.query?.isEnabled === "boolean"){
                isEnabledCheck = eq(platformFeatures.isEnabled, body.query.isEnabled);
            }
            if(typeof body.query?.isSystemAdminFeature === "boolean"){
                systemAdminCheck = eq(platformFeatures.isSystemAdminFeature, body.query.isSystemAdminFeature);
            }

            recordsFound = await db
                .select()
                .from(platformFeatures)
                .where(and(isEnabledCheck, systemAdminCheck));
        } else {
            recordsFound = await db.select().from(platformFeatures);
        }

        return res.status(200).json(
            new ApiResponse<GetAllFeaturesResponse>(200, {
                features: recordsFound,
            })
        );
    }
);

export const getFeatureById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const featureId = Number(req.params.featureId);

        /* Find feature in platformFeatures table */
        const records = await db
            .select()
            .from(platformFeatures)
            .where(eq(platformFeatures.featureId, featureId));

        /* If no feature is found */
        if (!records.length) {
            throw new ApiError(400, "no feature found", []);
        }

        return res.status(200).json(
            new ApiResponse<GetFeatureByIdResponse>(200, {
                feature: records[0],
            })
        );
    }
);

export const getMultipleFeaturesById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as GetMultipleFeaturesByIdRequest;

        /* If query is passed, creating a SQL condition for it */
        let customQuery;
        if (body?.query) {
            let isEnabledCheck;
            let systemAdminCheck;
            
            /* If isEnabled is passed in query */
            if(typeof body.query?.isEnabled === "boolean"){
                isEnabledCheck = eq(platformFeatures.isEnabled, body.query.isEnabled);
            }
            /* If is system admin feature is passed in query */
            if(typeof body.query?.isSystemAdminFeature === "boolean"){
                systemAdminCheck = eq(platformFeatures.isSystemAdminFeature, body.query.isSystemAdminFeature);
            }

            /* Combining the query */
            customQuery = and(isEnabledCheck, systemAdminCheck);
        }

        /* Finding the features with ids passed, and the query */
        const featuresFound = await db
            .select()
            .from(platformFeatures)
            .where(
                and(
                    inArray(platformFeatures.featureId, body.featureIds),
                    customQuery
                )
            );

        return res.status(200).json(
            new ApiResponse<GetMultipleFeaturesByIdResponse>(200, {
                features: featuresFound,
            })
        );
    }
);
