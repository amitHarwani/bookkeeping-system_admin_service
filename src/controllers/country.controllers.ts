import { NextFunction, Request, Response } from "express";
import { db } from "../db";
import { countries } from "db_service";
import { ApiResponse } from "../utils/ApiResponse";
import { GetAllCountriesResponse } from "../dto/country/get_all_countries_dto";
import asyncHandler from "../utils/async_handler";
import { eq } from "drizzle-orm";
import { ApiError } from "../utils/ApiError";
import { GetCountryByIdResponse } from "../dto/country/get_country_by_id_dto";
import {
    AddCountryRequest,
    AddCountryResponse,
} from "../dto/country/add_country_dto";
import {
    UpdateCountryRequest,
    UpdateCountryResponse,
} from "../dto/country/update_country_dto";

export const getAllCountries = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        /* Get all countries from Countries table */
        const allCountries = await db.select().from(countries);

        return res.status(200).json(
            new ApiResponse<GetAllCountriesResponse>(200, {
                countries: allCountries,
            })
        );
    }
);

export const getCountryById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const countryId = Number(req.params.countryId);

        /* Getting the country by id */
        const countriesFound = await db
            .select()
            .from(countries)
            .where(eq(countries.countryId, countryId));

        /* No countries found */
        if (!countriesFound.length) {
            throw new ApiError(400, "no country found", []);
        }

        return res.status(200).json(
            new ApiResponse<GetCountryByIdResponse>(200, {
                country: countriesFound[0],
            })
        );
    }
);

export const addCountry = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as AddCountryRequest;

        /* Adding country to countries table */
        const countriesAdded = await db
            .insert(countries)
            .values({
                countryName: body.countryName,
                currency: body.currency,
                phoneNumberCodes: body.phoneNumberCodes,
                maxPhoneNumberDigits: body.maxPhoneNumberDigits,
                timezone: body.timezone
            })
            .returning();

        return res.status(201).json(
            new ApiResponse<AddCountryResponse>(201, {
                country: countriesAdded[0],
                message: "country added successfully",
            })
        );
    }
);

export const updateCountry = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body as UpdateCountryRequest;

        /* Update country details by countryId */
        const updatedCountry = await db
            .update(countries)
            .set({
                countryName: body.countryName,
                phoneNumberCodes: body.phoneNumberCodes,
                currency: body.currency,
                maxPhoneNumberDigits: body.maxPhoneNumberDigits,
                timezone: body.timezone
            })
            .where(eq(countries.countryId, body.countryId))
            .returning();

        /* When countryId is invalid */
        if(!updatedCountry.length){
            throw new ApiError(400, "country not found", []);
        }

        return res.status(200).json(
            new ApiResponse<UpdateCountryResponse>(200, {
                country: updatedCountry[0],
                message: "country updated successfully",
            })
        );
    }
);
