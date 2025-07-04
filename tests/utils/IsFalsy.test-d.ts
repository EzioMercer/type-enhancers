import { expectTypeOf } from 'vitest';
import type { IsFalsy } from '../../utils/IsFalsy';

expectTypeOf<IsFalsy<null>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<undefined>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<false>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<''>>().toEqualTypeOf<true>();

expectTypeOf<IsFalsy<0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<0.0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<0x0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<0b0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<0o0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<0n>>().toEqualTypeOf<true>();

expectTypeOf<IsFalsy<-0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<-0.0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<-0x0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<-0b0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<-0o0>>().toEqualTypeOf<true>();
expectTypeOf<IsFalsy<-0n>>().toEqualTypeOf<true>();

expectTypeOf<IsFalsy<12>>().toEqualTypeOf<false>();
expectTypeOf<IsFalsy<'12'>>().toEqualTypeOf<false>();
expectTypeOf<IsFalsy<true>>().toEqualTypeOf<false>();
