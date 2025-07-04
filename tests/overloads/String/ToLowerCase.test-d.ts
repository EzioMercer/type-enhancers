import { expectTypeOf } from 'vitest';

const TEST_1 = ''.toLowerCase();
expectTypeOf(TEST_1).toEqualTypeOf<''>();

const TEST_2 = 'some text'.toLowerCase();
expectTypeOf(TEST_2).toEqualTypeOf<'some text'>();

const TEST_3 = 'SOME TEXT'.toLowerCase();
expectTypeOf(TEST_3).toEqualTypeOf<'some text'>();

const TEST_4 = 'some TEXT'.toLowerCase();
expectTypeOf(TEST_4).toEqualTypeOf<'some text'>();

const TEST_5 = '    some text    '.toLowerCase();
expectTypeOf(TEST_5).toEqualTypeOf<'    some text    '>();
