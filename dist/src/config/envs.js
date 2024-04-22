"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBpassword = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT;
exports.DBpassword = process.env.DBpassword;
