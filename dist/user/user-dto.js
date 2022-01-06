var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiPropertyOptional } from '@nestjs/swagger';
import { RoleType } from '../common/constants/role-type';
import { AbstractDto } from '../common/abstract.dto';
export class UserDto extends AbstractDto {
    firstName;
    lastName;
    username;
    role;
    email;
    avatar;
    phone;
    isActive;
}
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
__decorate([
    ApiPropertyOptional({ enum: RoleType }),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "avatar", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", Boolean)
], UserDto.prototype, "isActive", void 0);
//# sourceMappingURL=user-dto.js.map