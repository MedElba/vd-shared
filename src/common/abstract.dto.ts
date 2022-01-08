import { Type } from "class-transformer";

export interface IAbstractEntity {
  id: string;

  createdAt: Date;

  updatedAt: Date;
}

export class AbstractDto {
  id: string;

  @Type(() => Date)
  createdAt: Date;

  @Type(() => Date)
  updatedAt: Date;

  constructor(entity: IAbstractEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
