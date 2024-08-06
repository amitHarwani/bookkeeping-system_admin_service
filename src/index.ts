import dotenv from "dotenv";
dotenv.config();
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

import app from "./app";


app.listen(process.env.PORT, () => {
    console.log(`System Admin Service Listening On Port ${process.env.PORT}`);
});
