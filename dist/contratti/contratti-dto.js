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
exports.ContrattiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const abstract_dto_1 = require("../common/abstract.dto");
const inserzionisti_dto_1 = require("../inserzionisti/inserzionisti-dto");
class ContrattiDto extends abstract_dto_1.AbstractDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ContrattiDto.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ContrattiDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ContrattiDto.prototype, "onlineStartDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ContrattiDto.prototype, "onlineEndDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", inserzionisti_dto_1.InserzionistiDto)
], ContrattiDto.prototype, "inserzionista", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ContrattiDto.prototype, "price", void 0);
exports.ContrattiDto = ContrattiDto;
//# sourceMappingURL=contratti-dto.js.map