"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var role_type_1 = require("../common/constants/role-type");
var abstract_dto_1 = require("../common/abstract.dto");
var UserDto = /** @class */ (function (_super) {
    __extends(UserDto, _super);
    function UserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "firstName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "lastName");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "username");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({ "enum": role_type_1.RoleType })
    ], UserDto.prototype, "role");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "avatar");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)()
    ], UserDto.prototype, "isActive");
    return UserDto;
}(abstract_dto_1.AbstractDto));
exports.UserDto = UserDto;