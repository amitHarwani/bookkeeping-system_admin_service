import { Router } from "express";
import { addCountry, getAllCountries } from "../controllers/county.controllers";
import { addCountryValidator, getCountryByIdValidator } from "../validators/country.validators";
import { validateInput } from "../validators";
import { checkAccess } from "../middlewares/auth.middleware";

const router = Router();

router.get("/get-all-countries", getAllCountries);

router.get("/get-country/:countryId", getCountryByIdValidator(), validateInput);

router.post("/add-country", addCountryValidator(), validateInput, checkAccess(3, null), addCountry)

export default router;