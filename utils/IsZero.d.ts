import type { IsExtends } from './IsExtends';

export type IsZero<T> = IsExtends<`${T}`, '0'>;
