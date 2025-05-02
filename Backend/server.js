import express from "express"
import cors from 'cors';
import dotenv from "dotenv"
import router from "./auth.routes.js"
import path from "path"

const APP = express()
APP.use(cors({ origin: "http://localhost:5173", credentials: true }))
dotenv.config()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

APP.use(express.json()) // allows us to parse incomming requests :req.body
APP.use("/api", router)

if (process.env.NODE_ENV === "production") {
    APP.use(express.static(path.join(__dirname, "/Frontend/dist")))
}
APP.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})