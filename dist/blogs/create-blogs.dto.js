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
import { IsBoolean, IsString } from 'class-validator';
import { Trim } from '../decorators/transforms.decorator';
export class CreateBlogsDto {
    title;
    metaDesc;
    imgHeader;
    imgGallery;
    content;
    url;
    showComm;
    publish;
    user_id;
}
__decorate([
    ApiProperty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateBlogsDto.prototype, "title", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateBlogsDto.prototype, "metaDesc", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateBlogsDto.prototype, "imgHeader", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateBlogsDto.prototype, "imgGallery", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateBlogsDto.prototype, "content", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateBlogsDto.prototype, "url", void 0);
__decorate([
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateBlogsDto.prototype, "showComm", void 0);
__decorate([
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateBlogsDto.prototype, "publish", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateBlogsDto.prototype, "user_id", void 0);
//# sourceMappingURL=create-blogs.dto.js.map