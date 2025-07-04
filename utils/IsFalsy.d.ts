import type { IfElse } from './IfElse';
import type { IsFalse } from './IsFalse';
import type { IsZero } from './IsZero';
import type { IsEmptyString } from './IsEmptyString';
import type { IsNullish } from './IsNullish';

export type IsFalsy<T> =
    IfElse<IsNullish<T>, true,
        IfElse<IsFalse<T>, true,
            IfElse<IsZero<T>, true,
                IfElse<IsEmptyString<T>, true, false>
            >
        >
    >;

