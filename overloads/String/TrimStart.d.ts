import type { TrimStart } from '../../utils/TrimStart';

declare global {
    interface String {
        trimStart<Source extends string>(this: Source): TrimStart<Source>;
    }
}
