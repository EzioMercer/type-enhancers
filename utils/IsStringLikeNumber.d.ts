import type { IsExtends } from './IsExtends';

export type IsStringLikeNumber<T extends string> = IsExtends<T, `${number}`>;
