import type { IfElse } from '../../../utils/IfElse';
import type { StringToNumber } from '../../../utils/StringToNumber';
import type { IsStringLikeNumber } from '../../../utils/IsStringLikeNumber';
import type { BigIntToNumber } from '../../../utils/BigIntToNumber';

type OverrideMethods = 'valueOf' | 'toString';

declare global {
    interface NumberConstructor {
        new<Value extends number>(value: Value): Omit<Number, OverrideMethods> & {
            valueOf(): Value;
            toString(): `${Value}`;
        };
    }

    interface NumberConstructor {
        new<Value extends string>(value: Value): Omit<Number, OverrideMethods> & {
            valueOf(): StringToNumber<Value>;
            toString(): IfElse<IsStringLikeNumber<Value>, `${StringToNumber<Value>}`, 'NaN'>;
        };
    }

    interface NumberConstructor {
        new<Value extends bigint>(value: Value): Omit<Number, OverrideMethods> & {
            valueOf(): BigIntToNumber<Value>;
            toString(): `${BigIntToNumber<Value>}`;
        };
    }
}
