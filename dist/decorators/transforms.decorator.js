import { Transform } from 'class-transformer';
import { castArray, isNil, trim } from 'lodash';
export function Trim() {
    return Transform((params) => {
        const value = params.value;
        if (Array.isArray(value)) {
            return value.map((v) => trim(v).replace(/\s\s+/g, ' '));
        }
        return trim(value).replace(/\s\s+/g, ' ');
    });
}
export function ToInt() {
    return Transform((params) => {
        const value = params.value;
        return Number.parseInt(value, 10);
    }, { toClassOnly: true });
}
export function ToArray() {
    return Transform((params) => {
        const value = params.value;
        if (isNil(value)) {
            return [];
        }
        return castArray(value);
    }, { toClassOnly: true });
}
//# sourceMappingURL=transforms.decorator.js.map