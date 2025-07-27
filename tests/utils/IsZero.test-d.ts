import { expectTypeOf } from 'vitest';
import type { IsZero } from '../../utils/IsZero';

expectTypeOf<IsZero<0>>().toEqualTypeOf<true>();
expectTypeOf<IsZero<0x0>>().toEqualTypeOf<true>();
expectTypeOf<IsZero<0b0>>().toEqualTypeOf<true>();
expectTypeOf<IsZero<0o0>>().toEqualTypeOf<true>();
expectTypeOf<IsZero<0n>>().toEqualTypeOf<true>();

expectTypeOf<IsZero<-0>>().toEqualTypeOf<true>();
expectTypeOf<IsZero<-0x0>>().toEqualTypeOf<true>();
expectTypeOf<IsZero<-0b0>>().toEqualTypeOf<true>();
expectTypeOf<IsZero<-0o0>>().toEqualTypeOf<true>();
expectTypeOf<IsZero<-0n>>().toEqualTypeOf<true>();

expectTypeOf<IsZero<1>>().toEqualTypeOf<false>();
expectTypeOf<IsZero<0x1>>().toEqualTypeOf<false>();
expectTypeOf<IsZero<0b1>>().toEqualTypeOf<false>();
expectTypeOf<IsZero<0o1>>().toEqualTypeOf<false>();
expectTypeOf<IsZero<1n>>().toEqualTypeOf<false>();

expectTypeOf<IsZero<-1>>().toEqualTypeOf<false>();
expectTypeOf<IsZero<-0x1>>().toEqualTypeOf<false>();
expectTypeOf<IsZero<-0b1>>().toEqualTypeOf<false>();
expectTypeOf<IsZero<-0o1>>().toEqualTypeOf<false>();
expectTypeOf<IsZero<-1n>>().toEqualTypeOf<false>();
