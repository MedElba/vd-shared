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
exports.SchermiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const abstract_dto_1 = require("../common/abstract.dto");
const gruppi_dto_1 = require("../gruppi/gruppi-dto");
const clienti_dto_1 = require("../clienti/clienti-dto");
const puntimappa_dto_1 = require("../puntimappa/puntimappa-dto");
class SchermiDto extends abstract_dto_1.AbstractDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], SchermiDto.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SchermiDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", gruppi_dto_1.GruppiDto)
], SchermiDto.prototype, "gruppo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", clienti_dto_1.ClientiDto)
], SchermiDto.prototype, "cliente", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", puntimappa_dto_1.PuntiMappaDto)
], SchermiDto.prototype, "geoPoint", void 0);
exports.SchermiDto = SchermiDto;
//# sourceMappingURL=schermi-dto.js.map