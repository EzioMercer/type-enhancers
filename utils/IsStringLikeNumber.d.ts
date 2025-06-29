export type IsStringLikeNumber<T extends string> = T extends `${number}` ? true : false;
