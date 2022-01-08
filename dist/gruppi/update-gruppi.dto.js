"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGruppiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_gruppi_dto_1 = require("./create-gruppi.dto");
class UpdateGruppiDto extends (0, swagger_1.PartialType)(create_gruppi_dto_1.CreateGruppiDto) {
}
exports.UpdateGruppiDto = UpdateGruppiDto;
//# sourceMappingURL=update-gruppi.dto.js.map