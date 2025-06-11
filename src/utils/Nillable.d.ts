import type { Nullable } from 'src/utils/Nullable';
import type { Undefinable } from 'src/utils/Undefinable';

export type Nilable<T> = Nullable<Undefinable<T>>;
