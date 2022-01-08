import { RoleType } from '../common/constants/role-type';
import { AbstractDto } from '../common/abstract.dto';
export declare class UserDto extends AbstractDto {
    firstName: string;
    lastName: string;
    username: string;
    role: RoleType;
    email: string;
    avatar: string;
    phone: string;
    isActive: boolean;
}
