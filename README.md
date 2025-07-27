# type-enhancers

# Installing

```shell
npm i -d type-enhancers
```

# How to use

## Utils

To use utils, you have to import them in every file with named import from `utils` folder:

### Import from `utils` folder

```typescript
import type { Nilable, Nullable } from "type-enhancers/utils";
```

### Import directly from `utils` files

```typescript
import type { Nilable } from "type-enhancers/utils/Nilable";
import type { Nullable } from "type-enhancers/utils/Nullable";
```

## Overloads

To use overloads, you have to import them in one file from `overloads` folder.
You can control the scope of overloads just from your import:

### Import all overloads:

```typescript
import "type-enhancers/overloads";
```

### Import all overloads for String:

```typescript
import "type-enhancers/overloads/String";
```

### Import all overloads for the String split method:

```typescript
import "type-enhancers/overloads/String/Split";
```

## Available overloads

+ Number
    + Constructor
        + [Number()](./overloads/Number/Constructor/Cast.d.ts)
        + [new Number()](./overloads/Number/Constructor/Instance.d.ts)
    + [toString](./overloads/Number/ToString.d.ts)

+ String
    + [split](./overloads/String/Split.d.ts) (Returns tuple instead of an array)
    + [toLowerCase](./overloads/String/ToLowerCase.d.ts)
    + [toUpperCase](./overloads/String/ToUpperCase.d.ts)
    + [trim](./overloads/String/Trim.d.ts)
    + [trimEnd](./overloads/String/TrimEnd.d.ts)
    + [trimStart](./overloads/String/TrimStart.d.ts)

## Available utils

+ [BigIntToNumber](./utils/BigIntToNumber.d.ts)
+ [Falsy](./utils/Falsy.d.ts)
+ [If](./utils/If.d.ts)
+ [IfElse](./utils/IfElse.d.ts)
+ [IsAny](./utils/IsAny.d.ts)
+ [IsBigInt](./utils/IsBigInt.d.ts)
+ [IsBoolean](./utils/IsBoolean.d.ts)
+ [IsEmptyString](./utils/IsEmptyString.d.ts)
+ [IsExtends](./utils/IsExtends.d.ts)
+ [IsFalse](./utils/IsFalse.d.ts)
+ [IsFalsy](./utils/IsFalsy.d.ts)
+ [IsNull](./utils/IsNull.d.ts)
+ [IsNumber](./utils/IsNumber.d.ts)
+ [IsPrimitive](./utils/IsPrimitive.d.ts)
+ [IsString](./utils/IsString.d.ts)
+ [IsStringLikeNumber](./utils/IsStringLikeNumber.d.ts)
+ [IsSymbol](./utils/IsSymbol.d.ts)
+ [IsTrue](./utils/IsTrue.d.ts)
+ [IsTruthy](./utils/IsTruthy.d.ts)
+ [IsUndefined](./utils/IsUndefined.d.ts)
+ [IsZero](./utils/IsZero.d.ts)
+ [Nilable](./utils/Nilable.d.ts)
+ [Not](./utils/Not.d.ts)
+ [Nullable](./utils/Nullable.d.ts)
+ [Nullish](./utils/Nullish.d.ts)
+ [NumberToString](./utils/NumberToString.d.ts)
+ [Primitive](./utils/Primitive.d.ts)
+ [SplitByString](./utils/SplitByString.d.ts)
+ [StrictOmit](./utils/StrictOmit.d.ts)
+ [StringToNumber](./utils/StringToNumber.d.ts)
+ [Trim](./utils/Trim.d.ts)
+ [TrimEnd](./utils/TrimEnd.d.ts)
+ [TrimStart](./utils/TrimStart.d.ts)
+ [Undefinable](./utils/Undefinable.d.ts)
+ [WhiteSpace](./utils/WhiteSpace.d.ts)
+ [Zero](./utils/Zero.d.ts)
