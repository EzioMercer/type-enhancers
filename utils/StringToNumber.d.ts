export type StringToNumber<Value extends string> = `${Value}` extends `${infer Int extends number}.0` ? Int : (
    `${Value}` extends `${infer Int}.${infer Decimal}0` ? StringToNumber<`${Int}.${Decimal}`> : (
        `${Value}` extends `${infer Num extends number}` ? Num : number
        )
    );
