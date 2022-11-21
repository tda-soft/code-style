## JavaScript Code Styles

- [1. Comments](#1-comments)
- [2. Deprecation](#2-deprecation)
- [3. Quotes](#3-quotes)

----

#### General
* ES6+ (ES2015+) - [cheatsheet](https://devhints.io/es6).
* **camelCase** naming notation.
* Classes begin with Capital letter.
* Constants are **UPPER_CASE** notation.
* Use early return pattern whenever possible, [read more](https://medium.com/swlh/return-early-pattern-3d18a41bba8).

<br>

#### 1. Comments
```js
// One line comment
function foo() {
    ...
}


//
// Section comment (2 spaces above)
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

#### 3. Quotes
* By default use single quote (').
* For extrapolated string use ES6 quote (`).
* For DOM properties use double quote (").

## Framework Based Code Styles
* [React](./react/README.md)
* [MobX](./mobx/README.md)
* [Node JS](./node/README.md)
