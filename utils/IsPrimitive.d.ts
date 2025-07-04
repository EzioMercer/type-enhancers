import type { IsExtends } from './IsExtends';
import type { Primitive } from './Primitive';

export type IsPrimitive<T> = IsExtends<T, Primitive>;
