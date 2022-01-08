import { AbstractDto } from "../common/abstract.dto";
import { Trim } from "../decorators/transforms.decorator";

export class VideoDto extends AbstractDto {
  vimeoId: string;

  fileName?: string;
}
