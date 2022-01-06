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
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateContrattiDto {
    active;
    date;
    onlineStartDate;
    onlineEndDate;
    price;
    inserzionista_id;
}
__decorate([
    ApiProperty(),
    IsNotEmpty(),
    __metadata("design:type", Boolean)
], CreateContrattiDto.prototype, "active", void 0);
__decorate([
    ApiProperty(),
    IsDateString(),
    __metadata("design:type", Date)
], CreateContrattiDto.prototype, "date", void 0);
__decorate([
    ApiProperty(),
    IsDateString(),
    __metadata("design:type", Date)
], CreateContrattiDto.prototype, "onlineStartDate", void 0);
__decorate([
    ApiProperty(),
    IsDateString(),
    __metadata("design:type", Date)
], CreateContrattiDto.prototype, "onlineEndDate", void 0);
__decorate([
    ApiProperty(),
    IsNumber(),
    __metadata("design:type", Number)
], CreateContrattiDto.prototype, "price", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateContrattiDto.prototype, "inserzionista_id", void 0);
//# sourceMappingURL=create-contratti.dto.js.map