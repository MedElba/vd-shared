var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested, } from 'class-validator';
import { Trim } from '../decorators/transforms.decorator';
import { CreatePuntiMappaDto } from '../puntimappa/create-puntimappa.dto';
export class CreateInserzioniDto {
    active;
    name;
    title;
    description;
    images;
    startDate;
    endDate;
    socialFacebook;
    socialInstagram;
    socialGoogleplus;
    socialTwitter;
    contratto_id;
    video_id;
    geoPoint;
}
__decorate([
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateInserzioniDto.prototype, "active", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    IsNotEmpty(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "name", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    IsNotEmpty(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "title", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "description", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "images", void 0);
__decorate([
    ApiProperty(),
    IsDateString(),
    __metadata("design:type", Date)
], CreateInserzioniDto.prototype, "startDate", void 0);
__decorate([
    ApiProperty(),
    IsDateString(),
    __metadata("design:type", Date)
], CreateInserzioniDto.prototype, "endDate", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "socialFacebook", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "socialInstagram", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "socialGoogleplus", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "socialTwitter", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "contratto_id", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "video_id", void 0);
__decorate([
    ApiPropertyOptional(),
    ValidateNested(),
    Type(() => CreatePuntiMappaDto),
    __metadata("design:type", CreatePuntiMappaDto)
], CreateInserzioniDto.prototype, "geoPoint", void 0);
//# sourceMappingURL=create-inserzioni.dto.js.map