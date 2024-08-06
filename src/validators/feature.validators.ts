import { body } from "express-validator"


export const addFeatureValidator = () => {
    return [
        body("featureName")
            .trim()
            .isString()
            .notEmpty()
            .withMessage("invalid feature name"),
        body('isEnabled').isBoolean().withMessage("invalid isEnabled field")
    ]
}