"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateBlogsDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var transforms_decorator_1 = require("../decorators/transforms.decorator");
var CreateBlogsDto = /** @class */ (function () {
    function CreateBlogsDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, transforms_decorator_1.Trim)()
    ], CreateBlogsDto.prototype, "title");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_validator_1.IsString)(),
        (0, transforms_decorator_1.Trim)()
    ], CreateBlogsDto.prototype, "metaDesc");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_validator_1.IsString)(),
        (0, transforms_decorator_1.Trim)()
    ], CreateBlogsDto.prototype, "imgHeader");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_validator_1.IsString)(),
        (0, transforms_decorator_1.Trim)()
    ], CreateBlogsDto.prototype, "imgGallery");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_validator_1.IsString)(),
        (0, transforms_decorator_1.Trim)()
    ], CreateBlogsDto.prototype, "content");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_validator_1.IsString)(),
        (0, transforms_decorator_1.Trim)()
    ], CreateBlogsDto.prototype, "url");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsBoolean)()
    ], CreateBlogsDto.prototype, "showComm");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsBoolean)()
    ], CreateBlogsDto.prototype, "publish");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)()
    ], CreateBlogsDto.prototype, "user_id");
    return CreateBlogsDto;
}());
exports.CreateBlogsDto = CreateBlogsDto;
