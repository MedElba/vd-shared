import { RoleType } from '../common/constants/role-type';
export declare class UserUpdateDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    phone: string;
    role: RoleType;
}
