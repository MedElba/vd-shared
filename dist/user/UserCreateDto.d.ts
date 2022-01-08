import { RoleType } from '../common/constants/role-type';
export declare class UserCreateDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    phone: string;
    role: RoleType;
}
