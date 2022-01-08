import { AbstractDto } from '../common/abstract.dto';
export declare class CategorieDto extends AbstractDto {
    name: string;
    parent?: string;
    icon: string;
    image: string;
    fullname: string;
}
