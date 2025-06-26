import type { WhiteSpace } from './WhiteSpace';

export type TrimStart<T extends string> = T extends `${WhiteSpace}${infer Rest}` ? TrimStart<Rest> : T;
