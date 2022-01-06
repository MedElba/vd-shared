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
import { InserzionistiDto } from '../inserzionisti/inserzionisti-dto';
export class ContrattiDto extends AbstractDto {
    active;
    date;
    onlineStartDate;
    onlineEndDate;
    inserzionista;
    price;
}
__decorate([
    ApiProperty(),
    __metadata("design:type", Boolean)
], ContrattiDto.prototype, "active", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Date)
], ContrattiDto.prototype, "date", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Date)
], ContrattiDto.prototype, "onlineStartDate", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Date)
], ContrattiDto.prototype, "onlineEndDate", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", InserzionistiDto)
], ContrattiDto.prototype, "inserzionista", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Number)
], ContrattiDto.prototype, "price", void 0);
//# sourceMappingURL=contratti-dto.js.map