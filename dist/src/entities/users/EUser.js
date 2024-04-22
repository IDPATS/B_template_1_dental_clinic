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
exports.EUser = void 0;
const typeorm_1 = require("typeorm");
const ECredentials_1 = require("../credentials/ECredentials");
const EApt_1 = require("../appointments/EApt");
let EUser = class EUser {
};
exports.EUser = EUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => ECredentials_1.ECredential, {
        eager: true,
        cascade: true
    }),
    (0, typeorm_1.JoinColumn)({ referencedColumnName: "id" }),
    __metadata("design:type", ECredentials_1.ECredential)
], EUser.prototype, "credentials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => EApt_1.EApt, apt => apt.user, ({
        eager: true,
        cascade: true,
    })),
    __metadata("design:type", Array)
], EUser.prototype, "appointments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EUser.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EUser.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EUser.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EUser.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EUser.prototype, "ine", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EUser.prototype, "tel", void 0);
exports.EUser = EUser = __decorate([
    (0, typeorm_1.Entity)({
        name: "users"
    })
], EUser);
