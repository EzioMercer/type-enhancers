# type-enhancers

# Installing

```shell
npm i -d type-enhancers
```

# How to use

## Utils

To use utils, you have to import them in every file with named import from `utils` folder:

```typescript
import type { Nullable } from "type-enhancers/utils";
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

### Import all overloads for String split method:

```typescript
import "type-enhancers/overloads/String/Split";
```

## Available overloads

+ Number
    + [toString](./overloads/Number/ToString.d.ts)


+ String
    + [split](./overloads/String/Split.d.ts)

## Available utils

+ [Nilable](./utils/Nilable.d.ts)
+ [Nullable](./utils/Nullable.d.ts)
+ [SplitByString](./utils/SplitByString.d.ts)
+ [Undefinable](./utils/Undefinable.d.ts)
