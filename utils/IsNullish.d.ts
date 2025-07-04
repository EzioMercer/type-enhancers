import type { IsExtends } from './IsExtends';
import type { Nullish } from './Nullish';

export type IsNullish<T> = IsExtends<T, Nullish>;
