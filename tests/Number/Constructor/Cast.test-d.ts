import { expectTypeOf } from 'vitest';
import type { BigIntToNumber } from '../../../utils/BigIntToNumber';

const TEST_1 = Number(255);
expectTypeOf(TEST_1).toEqualTypeOf<255>();

const TEST_2 = Number(0xff);
expectTypeOf(TEST_2).toEqualTypeOf<255>();

const TEST_3 = Number('255');
expectTypeOf(TEST_3).toEqualTypeOf<255>();

const TEST_4 = Number('0xff');
expectTypeOf(TEST_4).toEqualTypeOf<number>();

const TEST_5 = Number('0b11111111');
expectTypeOf(TEST_5).toEqualTypeOf<number>();

const TEST_6 = Number('0o377');
expectTypeOf(TEST_6).toEqualTypeOf<number>();

const TEST_7 = Number(1000000000000000n);
expectTypeOf(TEST_7).toEqualTypeOf<1000000000000000>();

const TEST_8 = Number('2.1');
expectTypeOf(TEST_8).toEqualTypeOf<2.1>();

const TEST_9 = Number('2.0');
expectTypeOf(TEST_9).toEqualTypeOf<2>();

const TEST_10 = Number('2.20');
expectTypeOf(TEST_10).toEqualTypeOf<2.2>();

const TEST_11 = Number('0.001');
expectTypeOf(TEST_11).toEqualTypeOf<0.001>();

const TEST_12 = Number('0.00100');
expectTypeOf(TEST_12).toEqualTypeOf<0.001>();

const TEST_13 = Number('NotANumber');
expectTypeOf(TEST_13).toEqualTypeOf<number>();
