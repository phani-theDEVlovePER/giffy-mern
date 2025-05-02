import express from "express"
import { heart } from "./gemini.js"

const router = express.Router()

router.post("/heart", heart)

export default router