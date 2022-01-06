"use strict";
exports.__esModule = true;
exports.ToArray = exports.ToInt = exports.Trim = void 0;
var class_transformer_1 = require("class-transformer");
var lodash_1 = require("lodash");
/**
 * @description trim spaces from start and end, replace multiple spaces with one.
 * @example
 * @ApiProperty()
 * @IsString()
 * @Trim()
 * name: string;
 * @returns PropertyDecorator
 * @constructor
 */
function Trim() {
    return (0, class_transformer_1.Transform)(function (params) {
        var value = params.value;
        if (Array.isArray(value)) {
            return value.map(function (v) { return (0, lodash_1.trim)(v).replace(/\s\s+/g, ' '); });
        }
        return (0, lodash_1.trim)(value).replace(/\s\s+/g, ' ');
    });
}
exports.Trim = Trim;
/**
 * @description convert string or number to integer
 * @example
 * @IsNumber()
 * @ToInt()
 * name: number;
 * @returns {(target: any, key: string) => void}
 * @constructor
 */
function ToInt() {
    return (0, class_transformer_1.Transform)(function (params) {
        var value = params.value;
        return Number.parseInt(value, 10);
    }, { toClassOnly: true });
}
exports.ToInt = ToInt;
/**
 * @description transforms to array, specially for query params
 * @example
 * @IsNumber()
 * @ToArray()
 * name: number;
 * @constructor
 */
function ToArray() {
    return (0, class_transformer_1.Transform)(function (params) {
        var value = params.value;
        if ((0, lodash_1.isNil)(value)) {
            return [];
        }
        return (0, lodash_1.castArray)(value);
    }, { toClassOnly: true });
}
exports.ToArray = ToArray;
