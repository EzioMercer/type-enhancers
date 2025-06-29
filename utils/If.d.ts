export type If<Condition extends boolean, IfTrue> = Condition extends true ? IfTrue : never;
