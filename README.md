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
+ [If](./utils/If.d.ts)
+ [IsStringLikeNumber](./utils/IsStringLikeNumber.d.ts)
+ [Nilable](./utils/Nilable.d.ts)
+ [Nullable](./utils/Nullable.d.ts)
+ [SplitByString](./utils/SplitByString.d.ts)
+ [StringToNumber](./utils/StringToNumber.d.ts)
+ [Trim](./utils/Trim.d.ts)
+ [TrimEnd](./utils/TrimEnd.d.ts)
+ [TrimStart](./utils/TrimStart.d.ts)
+ [Undefinable](./utils/Undefinable.d.ts)
+ [WhiteSpace](./utils/WhiteSpace.d.ts)
