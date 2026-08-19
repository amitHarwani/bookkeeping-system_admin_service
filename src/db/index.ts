import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from 'db_service';
import { InferSelectModel } from 'drizzle-orm';
import fs from "fs"
import { DEFAULT_COUNTRIES, DEFAULT_FEATURES, DEFAULT_TAX_DETAILS, PLATFORM_FEATURES } from '../constants';

/* DB Url from Enviornment variable or file */
const DB_URL = (process.env.DB_URL || fs.readFileSync(process.env.DB_URL_FILE as string, 'utf-8'))

/* DB Client */
const queryClient = postgres(DB_URL);

export const db = drizzle(queryClient, {schema, logger: true});

export const initDB = async () => {
    /* Initialize Countries */
    const count = await db.$count(schema.countries)
    if (count == 0){
        /* Adding Default Countries */
        await db.insert(schema.countries).values(
            DEFAULT_COUNTRIES
        )
        /* Initialize Tax Details */
        await db.insert(schema.taxDetails).values(DEFAULT_TAX_DETAILS)
    }
    /* Initialize Platform and Default Features */
    const featuresCount = await db.$count(schema.platformFeatures)
    if (featuresCount == 0){
        await db.insert(schema.platformFeatures).values(PLATFORM_FEATURES)
        await db.insert(schema.defaultFeatures).values(DEFAULT_FEATURES)
    }

}

export type PlatformFeature = InferSelectModel<typeof schema.platformFeatures>;
export type User = InferSelectModel<typeof schema.users>;
export type Country = InferSelectModel<typeof schema.countries>;
export type TaxDetail = InferSelectModel<typeof schema.taxDetails>;