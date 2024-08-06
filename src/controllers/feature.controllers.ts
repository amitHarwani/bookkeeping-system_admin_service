import { NextFunction, Request, Response } from "express";
import asyncHandler from "../utils/async_handler";
import { db } from "../db";
import { platformFeatures } from "db_service";
import {
    AddFeatureRequest,
    AddFeatureResponse,
} from "../dto/feature/add_feature_dto";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

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

        /* If no feature was added */
        if (!featuresAdded.length) {
            throw new ApiError(
                400,
                "error adding feature, ensure feature name is unique",
                []
            );
        }

        return res.status(201).json(
            new ApiResponse<AddFeatureResponse>(201, {
                feature: featuresAdded[0],
                message: "feature added successfully",
            })
        );
    }
);
