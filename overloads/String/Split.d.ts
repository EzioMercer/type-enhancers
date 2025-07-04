import type { SplitByString } from '../../utils/SplitByString';

declare global {
    interface String {
        split<Source extends string, Separator extends string>(
            this: Source,
            separator: Separator,
            limit?: undefined,
        ): SplitByString<Source, Separator>;

        split(separator: string | RegExp, limit: 0): [];
    }
}
