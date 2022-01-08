export interface IAbstractEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class AbstractDto {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(entity: IAbstractEntity);
}
