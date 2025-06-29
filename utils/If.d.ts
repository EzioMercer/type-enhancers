export type If<Condition extends boolean, IfTrue, IfFalse> = Condition extends true ? IfTrue : IfFalse;
