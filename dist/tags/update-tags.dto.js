"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_tags_dto_1 = require("./create-tags.dto");
class UpdateTagsDto extends (0, swagger_1.PartialType)(create_tags_dto_1.CreateTagsDto) {
}
exports.UpdateTagsDto = UpdateTagsDto;
//# sourceMappingURL=update-tags.dto.js.map