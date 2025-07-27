import type { IsExtends } from './IsExtends';
import type { Zero } from './Zero';

export type IsZero<T extends number | bigint> = IsExtends<T, Zero>;
