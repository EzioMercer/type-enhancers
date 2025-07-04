import { expectTypeOf } from 'vitest';
import type { IsTruthy } from '../../utils/IsTruthy';

expectTypeOf<IsTruthy<null>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<undefined>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<false>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<''>>().toEqualTypeOf<false>();

expectTypeOf<IsTruthy<0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<0.0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<0x0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<0b0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<0o0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<0n>>().toEqualTypeOf<false>();

expectTypeOf<IsTruthy<-0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<-0.0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<-0x0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<-0b0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<-0o0>>().toEqualTypeOf<false>();
expectTypeOf<IsTruthy<-0n>>().toEqualTypeOf<false>();

expectTypeOf<IsTruthy<12>>().toEqualTypeOf<true>();
expectTypeOf<IsTruthy<'12'>>().toEqualTypeOf<true>();
expectTypeOf<IsTruthy<true>>().toEqualTypeOf<true>();

