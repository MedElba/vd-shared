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
exports.CreateSchermiDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const transforms_decorator_1 = require("../decorators/transforms.decorator");
const create_puntimappa_dto_1 = require("../puntimappa/create-puntimappa.dto");
class CreateSchermiDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateSchermiDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateSchermiDto.prototype, "gruppo_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateSchermiDto.prototype, "cliente_id", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_puntimappa_dto_1.CreatePuntiMappaDto),
    __metadata("design:type", create_puntimappa_dto_1.CreatePuntiMappaDto)
], CreateSchermiDto.prototype, "geoPoint", void 0);
exports.CreateSchermiDto = CreateSchermiDto;
//# sourceMappingURL=create-schermi.dto.js.map