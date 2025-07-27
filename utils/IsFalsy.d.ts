import type { IfElse } from './IfElse';
import type { IsExtends } from './IsExtends';
import type { Falsy } from './Falsy';

export type IsFalsy<T> = IfElse<IsExtends<T, Falsy>, true, false>;

