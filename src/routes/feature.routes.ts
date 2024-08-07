import { Router } from "express";
import {
    addFeatureValidator,
    getAllFeaturesValidator,
    getFeatureByIdValidator,
    updateFeatureValidator,
} from "../validators/feature.validators";
import { checkAccess } from "../middlewares/auth.middleware";
import {
    addFeature,
    getAllFeatures,
    getFeatureById,
    updateFeature,
} from "../controllers/feature.controllers";
import { validateInput } from "../validators";

const router = Router();

router.get(
    "/get-all-features",
    getAllFeaturesValidator(),
    validateInput,
    getAllFeatures
);

router.get("/get-feature/:featureId", getFeatureByIdValidator(), validateInput, getFeatureById);

router.post(
    "/add-feature",
    addFeatureValidator(),
    validateInput,
    checkAccess(1, null),
    addFeature
);

router.put(
    "/update-feature",
    updateFeatureValidator(),
    validateInput,
    checkAccess(2, null),
    updateFeature
);

export default router;
