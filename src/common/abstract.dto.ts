import { ApiProperty } from '@nestjs/swagger';
import { Type } from "class-transformer";

export interface IAbstractEntity {
  id: string;

  createdAt: Date;

  updatedAt: Date;
}

export class AbstractDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @Type(() => Date)
  createdAt: Date;

  @ApiProperty()
  @Type(() => Date)
  updatedAt: Date;

  constructor(entity: IAbstractEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
