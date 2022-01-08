"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_blogs_dto_1 = require("./create-blogs.dto");
class UpdateBlogsDto extends (0, swagger_1.PartialType)(create_blogs_dto_1.CreateBlogsDto) {
}
exports.UpdateBlogsDto = UpdateBlogsDto;
//# sourceMappingURL=update-blogs.dto.js.map