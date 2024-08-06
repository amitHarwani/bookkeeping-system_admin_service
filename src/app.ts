import express, { NextFunction, Request, Response } from "express";
import { ApiError } from "./utils/ApiError";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

import featureRouter from "./routes/feature.routes";

app.use("/sysadmin", featureRouter);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.statusCode || 500).json({
        statusCode: err.statusCode,
        message: err.message,
        errors: err.errors,
        stack: err.stack
    });
})

export default app;