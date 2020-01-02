## JavaScript Code Styles

- [1. Comments](#1-comments)
- [2. Deprecation](#2-deprecation)

----

#### General
* Always use strict mode (add `'use strict';` as first line of the *.js, *.jsx file).
* ES6+ (ES2015+) - [cheatsheet](https://devhints.io/es6).
* `camelCase` variable name convention.
* Classes begin with Capital letter.

<br>

#### 1. Comments
```js
// One line comment
function foo() {
    ...
}


////
// Section comment (2 spaces above, 1 below)

function foo() {
    ...
}


/**
 * Multiline comment - method description (2 spaces above, 0 below)
 *
 * @param bar: String - description
 * @return Object
 */
function foo(bar) {
    ...
}
```
* Comment indentation same as code.


#### 2. Deprecation
Add `// @deprecated` comment right above the method / class

<br>

## Framework Based Code Styles
* [React](./react/code-style.md)
* [Node JS](./react/code-style.md)