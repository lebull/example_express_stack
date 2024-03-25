import { Router } from "express"
import { helloWorld } from "../controllers/helloWorld"
import { authenticate } from "../middleware/handleTokenBasedAuthentication"
// import { handleTokenBasedAuthentication } from "../middleware/authentication.middleware"

const router = Router();

// router.use(authenticate);

// router.get("/", handleLanguageHeader, HelloWorldController.default)
router.get("/", authenticate, helloWorld);

export {router};