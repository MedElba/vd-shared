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
import { IsOptional, IsString } from 'class-validator';
import { Trim } from '../decorators/transforms.decorator';
export class CreatePuntiMappaDto {
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
    IsOptional(),
    __metadata("design:type", Number)
], CreatePuntiMappaDto.prototype, "lat", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    __metadata("design:type", Number)
], CreatePuntiMappaDto.prototype, "lng", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "label", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "countryCode", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "region", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "province", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "city", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "zip", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "street", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "addNum", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreatePuntiMappaDto.prototype, "json", void 0);
//# sourceMappingURL=create-puntimappa.dto.js.map