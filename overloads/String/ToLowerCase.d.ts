interface String {
    toLowerCase<Source extends string>(this: Source): Lowercase<Source>;
}
