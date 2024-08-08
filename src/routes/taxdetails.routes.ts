import { Router } from "express";
import {
    addTaxDetail,
    getAllTaxDetails,
    getTaxDetailByTaxId,
    getTaxDetailsOfCountry,
    updateTaxDetail,
} from "../controllers/taxdetails.controllers";
import {
    addTaxDetailValidator,
    getTaxDetailByTaxIdValidator,
    getTaxDetailsOfCountryValidator,
    updateTaxDetailValidator,
} from "../validators/taxdetails.validators";
import { validateInput } from "../validators";
import { checkAccess } from "../middlewares/auth.middleware";

const router = Router();

router.get("/get-all-taxdetails", getAllTaxDetails);
router.get(
    "/get-taxdetail/:taxId",
    getTaxDetailByTaxIdValidator(),
    validateInput,
    getTaxDetailByTaxId
);

router.get(
    "/get-taxdetails-of-country/:countryId",
    getTaxDetailsOfCountryValidator(),
    validateInput,
    getTaxDetailsOfCountry
);

router.post(
    "/add-taxdetail",
    addTaxDetailValidator(),
    validateInput,
    checkAccess(5, null),
    addTaxDetail
);

router.put(
    "/update-taxdetail",
    updateTaxDetailValidator(),
    validateInput,
    checkAccess(6, null),
    updateTaxDetail
);
export default router;
