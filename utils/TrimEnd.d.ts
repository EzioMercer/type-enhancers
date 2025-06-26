import type { WhiteSpace } from './WhiteSpace';

export type TrimEnd<T extends string> = T extends `${infer Rest}${WhiteSpace}` ? TrimEnd<Rest> : T;
