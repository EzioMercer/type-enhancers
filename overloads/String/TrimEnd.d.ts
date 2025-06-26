import type { TrimEnd } from '../../utils/TrimEnd';

declare global {
    interface String {
        trimEnd<Source extends string>(this: Source): TrimEnd<Source>;
    }
}
