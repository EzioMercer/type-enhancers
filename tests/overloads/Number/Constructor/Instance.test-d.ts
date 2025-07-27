import { expectTypeOf } from 'vitest';

const TEST_1 = new Number(12).valueOf();
expectTypeOf(TEST_1).toEqualTypeOf<12>();

const TEST_2 = new Number(12).toString();
expectTypeOf(TEST_2).toEqualTypeOf<'12'>();

const TEST_3 = new Number('12').valueOf();
expectTypeOf(TEST_3).toEqualTypeOf<12>();

const TEST_4 = new Number('12').toString();
expectTypeOf(TEST_4).toEqualTypeOf<'12'>();

const TEST_5 = new Number(12n).valueOf();
expectTypeOf(TEST_5).toEqualTypeOf<12>();

const TEST_6 = new Number(12n).toString();
expectTypeOf(TEST_6).toEqualTypeOf<'12'>();

const TEST_7 = new Number('Some text').valueOf();
expectTypeOf(TEST_7).toEqualTypeOf<number>();

const TEST_8 = new Number('Some text').toString();
expectTypeOf(TEST_8).toEqualTypeOf<'NaN'>();
