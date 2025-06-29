import { expectTypeOf } from 'vitest';

const TEST_1 = ''.toUpperCase();
expectTypeOf(TEST_1).toEqualTypeOf<''>();

const TEST_2 = 'some text'.toUpperCase();
expectTypeOf(TEST_2).toEqualTypeOf<'SOME TEXT'>();

const TEST_3 = 'SOME TEXT'.toUpperCase();
expectTypeOf(TEST_3).toEqualTypeOf<'SOME TEXT'>();

const TEST_4 = 'some TEXT'.toUpperCase();
expectTypeOf(TEST_4).toEqualTypeOf<'SOME TEXT'>();

const TEST_5 = '    some text    '.toUpperCase();
expectTypeOf(TEST_5).toEqualTypeOf<'    SOME TEXT    '>();
