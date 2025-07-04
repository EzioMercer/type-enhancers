import type { IfElse } from './IfElse';

export type Not<T extends boolean> = IfElse<T, false, true>;
