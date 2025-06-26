import { expectTypeOf } from 'vitest';

const TEST_1 = ''.split('');
expectTypeOf(TEST_1).toEqualTypeOf<[]>();

const TEST_2 = 'I love it'.split('I love it');
expectTypeOf(TEST_2).toEqualTypeOf<['', '']>();

const TEST_3 = 'I love it'.split('I need it');
expectTypeOf(TEST_3).toEqualTypeOf<['I love it']>();

const TEST_4 = ''.split(' ');
expectTypeOf(TEST_4).toEqualTypeOf<['']>();

const TEST_5 = 'I know my format'.split(' ');
expectTypeOf(TEST_5).toEqualTypeOf<['I', 'know', 'my', 'format']>();

const TEST_6 = 'yyyy/mm/ddTHH:mm:ss'.split('T');
expectTypeOf(TEST_6).toEqualTypeOf<['yyyy/mm/dd', 'HH:mm:ss']>();

const TEST_7 = TEST_6[0].split('/');
expectTypeOf(TEST_7).toEqualTypeOf<['yyyy', 'mm', 'dd']>();

const TEST_8 = TEST_6[1].split(':');
expectTypeOf(TEST_8).toEqualTypeOf<['HH', 'mm', 'ss']>();

const TEST_9 = 'I_know_my_format'.split('_', undefined);
expectTypeOf(TEST_9).toEqualTypeOf<['I', 'know', 'my', 'format']>();

const TEST_10 = 'I_know_my_format'.split('_', 0);
expectTypeOf(TEST_10).toEqualTypeOf<[]>();

const TEST_11 = 'I_know_my_format'.split(/_/, 0);
expectTypeOf(TEST_11).toEqualTypeOf<[]>();

const TEST_12 = 'I_know_my_format'.split(/_/, 10);
expectTypeOf(TEST_12).toEqualTypeOf<string[]>();

const TEST_13 = 'I_know_my_format'.split(/_/);
expectTypeOf(TEST_13).toEqualTypeOf<string[]>();

const TEST_14 = `${Math.random()}`.split('.');
expectTypeOf(TEST_14).toEqualTypeOf<string[]>();

const TEST_15 = ('123 456' as `${number} ${number}`).split(' ');
expectTypeOf(TEST_15).toEqualTypeOf<[`${number}`, `${number}`]>();

const TEST_16 = ('Name Surname' as `${string} ${string}`).split(' ');
expectTypeOf(TEST_16).toEqualTypeOf<string[]>();

const TEST_17 = ('Age 32' as `${string} ${number}`).split(' ');
expectTypeOf(TEST_17).toEqualTypeOf<[...string[], `${number}`]>();

const TEST_18 = ('64 years' as `${number} ${string}`).split(' ');
expectTypeOf(TEST_18).toEqualTypeOf<[`${number}`, ...string[]]>();

const TEST_19 = '🏳️‍🌈'.split('');
expectTypeOf(TEST_19).toEqualTypeOf<['\ud83c', '\udff3', '\ufe0f', '\u200d', '\ud83c', '\udf08']>();

const TEST_20 = 'It is very long string to check if my recursive type can handle the sentence as long as this one to prove that my type is very smart and optimised'.split(' ');
expectTypeOf(TEST_20).toEqualTypeOf<['It', 'is', 'very', 'long', 'string', 'to', 'check', 'if', 'my', 'recursive', 'type', 'can', 'handle', 'the', 'sentence', 'as', 'long', 'as', 'this', 'one', 'to', 'prove', 'that', 'my', 'type', 'is', 'very', 'smart', 'and', 'optimised']>();
