"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRts_1 = __importDefault(require("./users/usersRts"));
const appointmentsRts_1 = __importDefault(require("./appointments/appointmentsRts"));
const router = (0, express_1.Router)();
// Rutas 
router.use("/users", usersRts_1.default);
router.use("/apt", appointmentsRts_1.default);
exports.default = router;
