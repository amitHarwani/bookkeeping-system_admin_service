import { platformFeatures } from "db_service";
import { eq } from "drizzle-orm";
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

export const addFeature = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as AddFeatureRequest;

        /* Adding feature to DB */
        const featuresAdded = await db
            .insert(platformFeatures)
            .values({
                featureName: body.featureName,
                isEnabled: body.isEnabled,
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
            .set({ featureName: body.featureName, isEnabled: body.isEnabled })
            .where(eq(platformFeatures.featureId, body.featureId))
            .returning();

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

        /* If query is passed,  search by query (isEnabled flag), else get all records*/
        if (body?.query) {
            recordsFound = await db
                .select()
                .from(platformFeatures)
                .where(eq(platformFeatures.isEnabled, body.query.isEnabled));
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
        if(!records.length){
            throw new ApiError(400, "no feature found", []);
        }

        return res
            .status(200)
            .json(
                new ApiResponse<GetFeatureByIdResponse>(200, {
                    feature: records[0],
                })
            );
    }
);
