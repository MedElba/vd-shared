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
import { UserDto } from '../user/user-dto';
export class BlogsDto extends AbstractDto {
    title;
    metaDesc;
    imgHeader;
    imgGallery;
    content;
    url;
    showComm;
    publish;
    user;
}
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], BlogsDto.prototype, "title", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], BlogsDto.prototype, "metaDesc", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], BlogsDto.prototype, "imgHeader", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], BlogsDto.prototype, "imgGallery", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], BlogsDto.prototype, "content", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], BlogsDto.prototype, "url", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Boolean)
], BlogsDto.prototype, "showComm", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Boolean)
], BlogsDto.prototype, "publish", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", UserDto)
], BlogsDto.prototype, "user", void 0);
//# sourceMappingURL=blogs-dto.js.map