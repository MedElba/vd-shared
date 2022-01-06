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
import { AbstractDto } from '../common/abstract.dto';
import { ContrattiDto } from '../contratti/contratti-dto';
import { PuntiMappaDto } from '../puntimappa/puntimappa-dto';
import { VideoDto } from '../video/video-dto';
export class InserzioniDto extends AbstractDto {
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
    contratto;
    video;
    tags;
    geoPoint;
}
__decorate([
    ApiProperty(),
    __metadata("design:type", Boolean)
], InserzioniDto.prototype, "active", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "name", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "title", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "description", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "images", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Date)
], InserzioniDto.prototype, "startDate", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Date)
], InserzioniDto.prototype, "endDate", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "socialFacebook", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "socialInstagram", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "socialGoogleplus", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "socialTwitter", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", ContrattiDto)
], InserzioniDto.prototype, "contratto", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", VideoDto)
], InserzioniDto.prototype, "video", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Array)
], InserzioniDto.prototype, "tags", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", PuntiMappaDto)
], InserzioniDto.prototype, "geoPoint", void 0);
//# sourceMappingURL=inserzioni-dto.js.map