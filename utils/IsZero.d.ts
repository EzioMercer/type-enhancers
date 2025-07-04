import type { IsExtends } from './IsExtends';
import type { NumberToString } from './NumberToString';

export type IsZero<T extends number> = IsExtends<NumberToString<T>, '0'>;
