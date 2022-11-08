import express from "express";
import { routes } from "./router.js";
import cors from "cors"
import bodyParser from "body-parser";

const server = express()

server.use(express.json())
server.use(cors())
server.use(routes)

export const Server = {
    start: () => {
        server.listen(5000, () => console.log("Server running on port 5000"))
    }
}
