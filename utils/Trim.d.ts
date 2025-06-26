import type { TrimStart } from './TrimStart';
import type { TrimEnd } from './TrimEnd';

export type Trim<T extends string> = TrimStart<TrimEnd<T>>;
