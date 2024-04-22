"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EApt = void 0;
const typeorm_1 = require("typeorm");
const EUser_1 = require("../users/EUser");
let EApt = class EApt {
};
exports.EApt = EApt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EApt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EApt.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EApt.prototype, "hour", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EApt.prototype, "minute", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EApt.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id" }) // Agregamos una columna para almacenar el ID del usuario
    ,
    __metadata("design:type", Number)
], EApt.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => EUser_1.EUser),
    (0, typeorm_1.JoinColumn)({ name: "user_id", referencedColumnName: "id" }) // Vinculamos la columna user_id con el ID de la tabla EUser
    ,
    __metadata("design:type", EUser_1.EUser)
], EApt.prototype, "user", void 0);
exports.EApt = EApt = __decorate([
    (0, typeorm_1.Entity)({
        name: "appointments"
    })
], EApt);
