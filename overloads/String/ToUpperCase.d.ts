interface String {
    toUpperCase<Source extends string>(this: Source): Uppercase<Source>;
}
