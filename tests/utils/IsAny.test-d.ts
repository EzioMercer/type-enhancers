import { expectTypeOf } from 'vitest';
import type { IsAny } from '../../utils/IsAny';

expectTypeOf<IsAny<any>>().toEqualTypeOf<true>();
expectTypeOf<IsAny<unknown>>().toEqualTypeOf<false>();
expectTypeOf<IsAny<never>>().toEqualTypeOf<false>();
expectTypeOf<IsAny<undefined>>().toEqualTypeOf<false>();
expectTypeOf<IsAny<null>>().toEqualTypeOf<false>();
