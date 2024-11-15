import dotenv from "dotenv";

dotenv.config({path: "./.env"});

export const Port = process.env.PORT;