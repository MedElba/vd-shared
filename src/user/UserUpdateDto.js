"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserUpdateDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var role_type_1 = require("../common/constants/role-type");
var transforms_decorator_1 = require("../decorators/transforms.decorator");
var UserUpdateDto = /** @class */ (function () {
    function UserUpdateDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, transforms_decorator_1.Trim)()
    ], UserUpdateDto.prototype, "firstName");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, transforms_decorator_1.Trim)()
    ], UserUpdateDto.prototype, "lastName");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, transforms_decorator_1.Trim)()
    ], UserUpdateDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsPhoneNumber)(),
        (0, class_validator_1.IsOptional)()
    ], UserUpdateDto.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiProperty)({ "enum": role_type_1.RoleType }),
        (0, class_validator_1.IsEnum)(role_type_1.RoleType)
    ], UserUpdateDto.prototype, "role");
    return UserUpdateDto;
}());
exports.UserUpdateDto = UserUpdateDto;
