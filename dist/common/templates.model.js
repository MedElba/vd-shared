var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEnum, IsNumber, IsString } from 'class-validator';
export var FoodType;
(function (FoodType) {
    FoodType[FoodType["Breakfast"] = 0] = "Breakfast";
    FoodType[FoodType["Show All"] = 1] = "Show All";
    FoodType[FoodType["Lunch"] = 2] = "Lunch";
    FoodType[FoodType["Dinner"] = 3] = "Dinner";
})(FoodType || (FoodType = {}));
export class IFood {
    id;
    name;
    description;
    price;
    type;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], IFood.prototype, "id", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], IFood.prototype, "name", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], IFood.prototype, "description", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], IFood.prototype, "price", void 0);
__decorate([
    IsEnum(FoodType),
    __metadata("design:type", Number)
], IFood.prototype, "type", void 0);
export class ISocialIcon {
    iconUrl;
    socialUrl;
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], ISocialIcon.prototype, "iconUrl", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], ISocialIcon.prototype, "socialUrl", void 0);
//# sourceMappingURL=templates.model.js.map