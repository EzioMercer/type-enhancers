# type-enhancers

# How to use

## Utils

To use utils, you have to import them in every file with named import from `utils` folder:

```typescript
import type { Nullable } from "type-enhancers/utils/Nullable";
```

## Overloads

To use overloads, you have to import them in one file from `overloads` folder.
You can control the scope of overloads just from your import:

### Import all overloads:

```typescript
import "type-enhancers/overlodas";
```

### Import all overloads for String:

```typescript
import "type-enhancers/overlodas/String";
```

### Import all overloads for String split method:

```typescript
import "type-enhancers/overlodas/String/Split";
```
