import type { BigIntToNumber } from '../../../utils/BigIntToNumber';
import type { StringToNumber } from '../../../utils/StringToNumber';

declare global {
    interface NumberConstructor {
        <Value extends number>(value: Value): Value;

        <Value extends string>(value: Value): StringToNumber<Value>;

        <Value extends bigint>(value: Value): BigIntToNumber<Value>;
    }
}
