import { expectTypeOf } from 'vitest';

const TEST_1 = ''.trimStart();
expectTypeOf(TEST_1).toEqualTypeOf<''>();

const TEST_2 = 'some text'.trimStart();
expectTypeOf(TEST_2).toEqualTypeOf<'some text'>();

const TEST_3 = '    some text'.trimStart();
expectTypeOf(TEST_3).toEqualTypeOf<'some text'>();

const TEST_4 = 'some text    '.trimStart();
expectTypeOf(TEST_4).toEqualTypeOf<'some text    '>();

const TEST_5 = '    some text    '.trimStart();
expectTypeOf(TEST_5).toEqualTypeOf<'some text    '>();
