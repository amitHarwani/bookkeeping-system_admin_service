import { NextFunction, Request, Response } from "express";
import asyncHandler from "../utils/async_handler";
import { db } from "../db";
import { countries, taxDetails } from "db_service";
import { ApiResponse } from "../utils/ApiResponse";
import { GetAllTaxDetailsResponse } from "../dto/taxdetails/get_all_taxdetails_dto";
import { eq } from "drizzle-orm";
import { GetTaxDetailByTaxIdResponse } from "../dto/taxdetails/get_taxdetail_by_taxid_dto";
import { GetTaxDetailsOfCountryResponse } from "../dto/taxdetails/get_taxdetails_of_country_dto";
import {
    AddTaxDetailRequest,
    AddTaxDetailResponse,
} from "../dto/taxdetails/add_taxdetail_dto";
import { ApiError } from "../utils/ApiError";
import {
    UpdateTaxDetailRequest,
    UpdateTaxDetailResponse,
} from "../dto/taxdetails/update_taxdetail_dto";

export const getAllTaxDetails = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        /* All Tax Details from tax details table */
        const allTaxDetails = await db.select().from(taxDetails);

        return res.status(200).json(
            new ApiResponse<GetAllTaxDetailsResponse>(200, {
                taxDetails: allTaxDetails,
            })
        );
    }
);

export const getTaxDetailByTaxId = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const taxId = Number(req.params.taxId);

        /* Getting tax details by id from taxDetails table */
        const recordsFound = await db
            .select()
            .from(taxDetails)
            .where(eq(taxDetails.taxId, taxId));

        return res.status(200).json(
            new ApiResponse<GetTaxDetailByTaxIdResponse>(200, {
                taxDetail: recordsFound[0],
            })
        );
    }
);

export const getTaxDetailsOfCountry = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const countryId = Number(req.params.countryId);

        /* Tax details by country id */
        const recordsFound = await db
            .select()
            .from(taxDetails)
            .where(eq(taxDetails.countryId, countryId));

        return res.status(200).json(
            new ApiResponse<GetTaxDetailsOfCountryResponse>(200, {
                taxDetails: recordsFound,
                countryId: countryId,
            })
        );
    }
);

export const addTaxDetail = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as AddTaxDetailRequest;

        /* Searching for countryId in countries table */
        const countriesFound = await db
            .select({ countryId: countries.countryId })
            .from(countries)
            .where(eq(countries.countryId, body.countryId));

        /* Country not found */
        if (!countriesFound.length) {
            throw new ApiError(
                400,
                "invalid country id, please add the country first",
                []
            );
        }

        /* Adding record to tax details table */
        const recordAdded = await db
            .insert(taxDetails)
            .values({
                taxName: body.taxName,
                countryId: body.countryId,
                taxNickname: body.taxNickname,
                taxPercentage: body.taxPercentage.toString(),
                isTaxOnInvoice: body.isTaxOnInvoice,
                isRegistrationOptional: body.isRegistrationOptional,
            })
            .returning();

        return res.status(201).json(
            new ApiResponse<AddTaxDetailResponse>(201, {
                taxDetail: recordAdded[0],
                message: "tax detail added successfully",
            })
        );
    }
);

export const updateTaxDetail = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as UpdateTaxDetailRequest;

        /* Checking if the countryId passed is valid */
        const countriesFound = await db
            .select({ countryId: countries.countryId })
            .from(countries)
            .where(eq(countries.countryId, body.countryId));

        if (!countriesFound.length) {
            throw new ApiError(
                400,
                "invalid country id, please add the country first",
                []
            );
        }

        /* Updating tax details by tax id */
        const recordsUpdated = await db
            .update(taxDetails)
            .set({
                taxName: body.taxName,
                countryId: body.countryId,
                isRegistrationOptional: body.isRegistrationOptional,
                isTaxOnInvoice: body.isTaxOnInvoice,
                taxNickname: body.taxNickname,
                taxPercentage: body.taxPercentage.toString(),
            })
            .where(eq(taxDetails.taxId, body.taxId))
            .returning();

        /* If no records are updated */
        if (!recordsUpdated.length) {
            throw new ApiError(400, "invalid taxId passed", []);
        }

        return res.status(200).json(
            new ApiResponse<UpdateTaxDetailResponse>(200, {
                taxDetail: recordsUpdated[0],
                message: "tax details updated successfully",
            })
        );
    }
);
