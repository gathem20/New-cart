import  express, {Express , Request, Response}  from "express";
import { Port } from "./secrets";
import { rootRouter } from "./routes/index.route";
import { PrismaClient } from "@prisma/client";

const app:Express = express();
app.use(express.json())
app.use("/api", rootRouter);
export const prismaClient = new PrismaClient({
    log:['query']
}) 

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})