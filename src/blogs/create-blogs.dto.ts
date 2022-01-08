import { IsBoolean, IsString } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";

export class CreateBlogsDto {
  @IsString()
  @Trim()
  title: string;

  @IsString()
  @Trim()
  metaDesc?: string;

  @IsString()
  @Trim()
  imgHeader?: string;

  @IsString()
  @Trim()
  imgGallery?: string;

  @IsString()
  @Trim()
  content?: string;

  @IsString()
  @Trim()
  url?: string;

  @IsBoolean()
  showComm: boolean;

  @IsBoolean()
  publish: boolean;

  @IsString()
  user_id: string;
}
