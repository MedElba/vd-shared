import { AbstractDto } from "../common/abstract.dto";
import { UserDto } from "../user/user-dto";

export class BlogsDto extends AbstractDto {
  title?: string;

  metaDesc?: string;

  imgHeader?: string;

  imgGallery?: string;

  content?: string;

  url?: string;

  showComm: boolean;

  publish: boolean;

  user: UserDto;
}
