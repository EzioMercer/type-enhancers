export type IfElse<Condition extends boolean, IfTrue, IfFalse> = Condition extends true ? IfTrue : IfFalse;
