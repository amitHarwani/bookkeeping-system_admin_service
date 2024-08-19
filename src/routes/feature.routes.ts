import { Router } from "express";
import {
    addFeatureValidator,
    getAllFeaturesValidator,
    getFeatureByIdValidator,
    getMultipleFeaturesByIdValidator,
    updateFeatureValidator,
} from "../validators/feature.validators";
import { checkAccess } from "../middlewares/auth.middleware";
import {
    addFeature,
    getAllFeatures,
    getFeatureById,
    getMultipleFeaturesById,
    updateFeature,
} from "../controllers/feature.controllers";
import { validateInput } from "../validators";

const router = Router();

router.post(
    "/get-all-features",
    getAllFeaturesValidator(),
    validateInput,
    getAllFeatures
);

router.get(
    "/get-feature/:featureId",
    getFeatureByIdValidator(),
    validateInput,
    getFeatureById
);

router.post(
    "/get-multiple-features-by-id",
    getMultipleFeaturesByIdValidator(),
    validateInput,
    getMultipleFeaturesById
);

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
