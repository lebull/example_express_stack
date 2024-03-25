"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const helloWorld_1 = require("../controllers/helloWorld");
const handleTokenBasedAuthentication_1 = require("../middleware/handleTokenBasedAuthentication");
// import { handleTokenBasedAuthentication } from "../middleware/authentication.middleware"
const router = (0, express_1.Router)();
exports.router = router;
// router.use(authenticate);
// router.get("/", handleLanguageHeader, HelloWorldController.default)
router.get("/", handleTokenBasedAuthentication_1.authenticate, helloWorld_1.helloWorld);
