import dotenv from "dotenv";
import app from "./app";

dotenv.config({
    path: "./.env",
});

app.listen(process.env.PORT, () => {
    console.log("Listening on Port", process.env.PORT);
});
