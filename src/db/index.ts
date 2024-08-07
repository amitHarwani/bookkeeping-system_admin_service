import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from 'db_service';
import { InferSelectModel } from 'drizzle-orm';

/* DB Client */
const queryClient = postgres(process.env.DB_URL as string);

export const db = drizzle(queryClient, {schema, logger: true});

export type PlatformFeature = InferSelectModel<typeof schema.platformFeatures>;
export type User = InferSelectModel<typeof schema.users>;
export type Country = InferSelectModel<typeof schema.countries>;