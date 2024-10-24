import dotenv from "dotenv";
dotenv.config();
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

import app from "./app";
import { ServerCredentials } from "@grpc/grpc-js";
import grpcServer from "./grpc/grpcapp";
import logger from "./utils/logger";

app.listen(process.env.PORT, () => {
    logger.info(`System Admin Service Listening On Port ${process.env.PORT}`);
});

/* Starting the GRPC server */
grpcServer.bindAsync(
    `0.0.0.0:${process.env.GRPC_PORT}`,
    ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) {
            logger.error(`Error Starting GRPC server : ${JSON.stringify(err)}`);
            return;
        }
        logger.info(`GRPC running on port ${process.env.GRPC_PORT}`);
    }
);
