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
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Trim } from '../decorators/transforms.decorator';
import { CreatePuntiMappaDto } from '../puntimappa/create-puntimappa.dto';
export class CreateSchermiDto {
    active;
    name;
    gruppo_id;
    cliente_id;
    geoPoint;
}
__decorate([
    ApiProperty(),
    __metadata("design:type", Boolean)
], CreateSchermiDto.prototype, "active", void 0);
__decorate([
    ApiProperty(),
    IsNotEmpty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateSchermiDto.prototype, "name", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateSchermiDto.prototype, "gruppo_id", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateSchermiDto.prototype, "cliente_id", void 0);
__decorate([
    ApiPropertyOptional(),
    ValidateNested(),
    Type(() => CreatePuntiMappaDto),
    __metadata("design:type", CreatePuntiMappaDto)
], CreateSchermiDto.prototype, "geoPoint", void 0);
//# sourceMappingURL=create-schermi.dto.js.map