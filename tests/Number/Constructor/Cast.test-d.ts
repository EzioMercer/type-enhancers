import { expectTypeOf } from 'vitest';

const TEST_1 = Number(255);
expectTypeOf(TEST_1).toEqualTypeOf<255>();

const TEST_2 = Number(0xff);
expectTypeOf(TEST_2).toEqualTypeOf<255>();

const TEST_3 = Number('255');
expectTypeOf(TEST_3).toEqualTypeOf<255>();

const TEST_4 = Number('0xff');
expectTypeOf(TEST_4).toEqualTypeOf<255>();
