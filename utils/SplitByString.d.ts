export type SplitByString<Source extends string, Separator extends string> = Source extends `${infer Left}${Separator}${infer Right}`
    ? [...(string extends Left ? string[] : [`${Left}`]), ...SplitByString<Right, Separator>]
    : Source extends ''
        ? Separator extends ''
            ? []
            : ['']
        : string extends Source
            ? string[]
            : [Source];
