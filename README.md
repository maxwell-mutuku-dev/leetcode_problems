# Leetcode

### Leetcode is a leading platform for developing problem solving skills, one of the key skills a developer should have.

### This repository will contain all the problems I solve in Leetcode and their solutions.

### The files use a `day_month_year_filename` pattern

## Typescript

### The project is written in Typescript. Use the guidance below to understand how to run tsc in the isolatedModules config, and why it's crucial.

#

Isolated Modules -
isolatedModules

While you can use TypeScript to produce JavaScript code from TypeScript code, it’s also common to use other transpilers such as Babel to do this. However, other transpilers only operate on a single file at a time, which means they can’t apply code transforms that depend on understanding the full type system. This restriction also applies to TypeScript’s ts.transpileModule API which is used by some build tools.

These limitations can cause runtime problems with some TypeScript features like const enums and namespaces. Setting the isolatedModules flag tells TypeScript to warn you if you write certain code that can’t be correctly interpreted by a single-file transpilation process.

It does not change the behavior of your code, or otherwise change the behavior of TypeScript’s checking and emitting process.

Some examples of code which does not work when isolatedModules is enabled.
Exports of Non-Value Identifiers

In TypeScript, you can import a type and then subsequently export it:

`import { someType, someFunction } from "someModule";`

`someFunction();`

`export { someType, someFunction };`
Try

Because there’s no value for someType, the emitted export will not try to export it (this would be a runtime error in JavaScript):

`export { someFunction };`

Single-file transpilers don’t know whether someType produces a value or not, so it’s an error to export a name that only refers to a type.
Non-Module Files

If isolatedModules is set, namespaces are only allowed in modules (which means it has some form of import/export). An error occurs if a namespace is found in a non-module file:

namespace Instantiated {
Namespaces are not allowed in global script files when 'isolatedModules' is enabled. If this file is not intended to be a global script, set 'moduleDetection' to 'force' or add an empty 'export {}' statement.

export const x = 1;
}
Try

This restriction doesn’t apply to .d.ts files.
References to const enum members

In TypeScript, when you reference a const enum member, the reference is replaced by its actual value in the emitted JavaScript. Changing this TypeScript:

```
declare const enum Numbers {
  Zero = 0,
  One = 1,
}
console.log(Numbers.Zero + Numbers.One);
```

Try

To this JavaScript:

```
"use strict";
console.log(0 + 1);
```

Try

Without knowledge of the values of these members, other transpilers can’t replace the references to Numbers, which would be a runtime error if left alone (since there are no Numbers object at runtime). Because of this, when isolatedModules is set, it is an error to reference an ambient const enum member.
