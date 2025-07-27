import type { IsExtends } from './IsExtends';

// Explanation: https://stackoverflow.com/a/49928360/13349770
export type IsAny<T> = IsExtends<0, 1 & T>;
