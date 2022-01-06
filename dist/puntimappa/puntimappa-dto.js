var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../common/abstract.dto';
export class PuntiMappaDto extends AbstractDto {
    lat;
    lng;
    label;
    countryCode;
    region;
    province;
    city;
    zip;
    street;
    addNum;
    json;
}
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", Number)
], PuntiMappaDto.prototype, "lat", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", Number)
], PuntiMappaDto.prototype, "lng", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "label", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "countryCode", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "region", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "province", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "city", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "zip", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "street", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "addNum", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], PuntiMappaDto.prototype, "json", void 0);
//# sourceMappingURL=puntimappa-dto.js.map