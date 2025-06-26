import type { Trim } from '../../utils/Trim';

declare global {
    interface String {
        trim<Source extends string>(this: Source): Trim<Source>;
    }
}
