import { Router } from "express";
import { addCountry, getAllCountries, getCountryById, updateCountry } from "../controllers/country.controllers";
import { addCountryValidator, getCountryByIdValidator, updateCountryValidator } from "../validators/country.validators";
import { validateInput } from "../validators";
import { checkAccess } from "../middlewares/auth.middleware";

const router = Router();

router.get("/get-all-countries", getAllCountries);

router.get("/get-country/:countryId", getCountryByIdValidator(), validateInput, getCountryById);

router.post("/add-country", addCountryValidator(), validateInput, checkAccess(3, null), addCountry)

router.put("/update-country", updateCountryValidator(), validateInput, checkAccess(4, null), updateCountry);

export default router;