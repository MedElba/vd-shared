"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeliciousDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_delicious_dto_1 = require("./create-delicious.dto");
class UpdateDeliciousDto extends (0, swagger_1.PartialType)(create_delicious_dto_1.CreateDeliciousDto) {
}
exports.UpdateDeliciousDto = UpdateDeliciousDto;
//# sourceMappingURL=update-delicious.dto.js.map