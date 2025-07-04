import type { IsFalsy } from './IsFalsy';
import type { Not } from './Not';

export type IsTruthy<T> = Not<IsFalsy<T>>;

