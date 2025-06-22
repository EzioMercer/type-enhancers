import { expectTypeOf } from 'vitest';

const TEST_1 = (0).toString();
expectTypeOf(TEST_1).toEqualTypeOf<'0'>();

const TEST_2 = (5).toString(2);
expectTypeOf(TEST_2).toEqualTypeOf<string>();

const TEST_3 = (10).toString(undefined);
expectTypeOf(TEST_3).toEqualTypeOf<'10'>();
