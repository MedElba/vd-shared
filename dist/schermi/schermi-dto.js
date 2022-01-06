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
import { GruppiDto } from '../gruppi/gruppi-dto';
import { ClientiDto } from '../clienti/clienti-dto';
import { PuntiMappaDto } from '../puntimappa/puntimappa-dto';
export class SchermiDto extends AbstractDto {
    active;
    name;
    gruppo;
    cliente;
    geoPoint;
}
__decorate([
    ApiProperty(),
    __metadata("design:type", Boolean)
], SchermiDto.prototype, "active", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], SchermiDto.prototype, "name", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", GruppiDto)
], SchermiDto.prototype, "gruppo", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", ClientiDto)
], SchermiDto.prototype, "cliente", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", PuntiMappaDto)
], SchermiDto.prototype, "geoPoint", void 0);
//# sourceMappingURL=schermi-dto.js.map