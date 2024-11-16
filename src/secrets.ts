import dotenv from "dotenv";

dotenv.config({path: "./.env"});

export const Port = process.env.PORT;
export const Token = process.env.TOKEN!;