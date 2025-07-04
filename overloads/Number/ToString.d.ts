import type { NumberToString } from '../../utils/NumberToString';

declare global {
    interface Number {
        toString<Source extends number>(this: Source, radix?: undefined): NumberToString<Source>;
    }
}
