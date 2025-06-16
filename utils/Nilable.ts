import type { Nullable } from './Nullable';
import type { Undefinable } from './Undefinable';

export type Nilable<T> = Nullable<Undefinable<T>>;
