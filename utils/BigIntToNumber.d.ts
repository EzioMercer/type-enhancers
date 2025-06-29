export type BigIntToNumber<Value extends bigint> = `${Value}` extends `${infer Int extends number}` ? Int : never;
