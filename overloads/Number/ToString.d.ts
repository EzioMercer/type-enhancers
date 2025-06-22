interface Number {
    toString<Source extends number>(this: Source, radix?: undefined): `${Source}`
}
