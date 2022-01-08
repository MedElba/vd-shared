"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSchermiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_schermi_dto_1 = require("./create-schermi.dto");
class UpdateSchermiDto extends (0, swagger_1.PartialType)(create_schermi_dto_1.CreateSchermiDto) {
}
exports.UpdateSchermiDto = UpdateSchermiDto;
//# sourceMappingURL=update-schermi.dto.js.map