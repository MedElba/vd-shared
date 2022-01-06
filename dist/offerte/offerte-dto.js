var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../common/abstract.dto';
import { InserzioniDto } from '../inserzioni/inserzioni-dto';
export class OfferteDto extends AbstractDto {
    active;
    name;
    images;
    description;
    startDate;
    endDate;
    inserzione;
}
__decorate([
    ApiProperty(),
    __metadata("design:type", Boolean)
], OfferteDto.prototype, "active", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], OfferteDto.prototype, "name", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], OfferteDto.prototype, "images", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], OfferteDto.prototype, "description", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Date)
], OfferteDto.prototype, "startDate", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Date)
], OfferteDto.prototype, "endDate", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", InserzioniDto)
], OfferteDto.prototype, "inserzione", void 0);
//# sourceMappingURL=offerte-dto.js.map