import { Router } from "express";
import { addFeatureValidator } from "../validators/feature.validators";
import { checkAccess } from "../middlewares/auth.middleware";
import { addFeature } from "../controllers/feature.controllers";
import { validateInput } from "../validators";

const router = Router();

router.post(
    "/add-feature",
    addFeatureValidator(),
    validateInput,
    checkAccess(1, null),
    addFeature
);

export default router;
