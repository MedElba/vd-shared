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
export class VideoDto extends AbstractDto {
    vimeoId;
    fileName;
}
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], VideoDto.prototype, "vimeoId", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], VideoDto.prototype, "fileName", void 0);
//# sourceMappingURL=video-dto.js.map