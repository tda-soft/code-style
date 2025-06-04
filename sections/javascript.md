# JavaScript Style Guide

## Table of Contents

1. [Naming Conventions](#naming-conventions)
1. [Objects](#objects)
1. [Arrays](#arrays)
1. [Destructuring](#destructuring)
1. [Strings](#strings)
1. [Functions](#functions)
1. [Arrow Functions](#arrow-functions)
1. [Classes & Constructors](#classes--constructors)
1. [Modules](#modules)
1. [Iterators and Generators](#iterators-and-generators)
1. [Properties](#properties)
1. [Variables](#variables)
1. [Comparison Operators & Equality](#comparison-operators--equality)
1. [Blocks](#blocks)
1. [Control Statements](#control-statements)
1. [Commenting](#commenting)
1. [Whitespace](#whitespace)
1. [Commas](#commas)
1. [Semicolons](#semicolons)


---


## Naming Conventions

Choose clear, descriptive, and meaningful names for all identifiers in your code. Good naming improves readability and reduces the need for additional comments.

* <a name="meaningful-names"></a>Use meaningful, descriptive names for variables, methods, classes, and constants.
  <sup>[[link](#meaningful-names)]</sup>

    ```javascript
    // bad
    function calc(x) { ... }

    // good
    function calculate_total_price(cart_items) { ... }
    ```

* <a name="avoid-slang"></a>Avoid slang or humorous terms in naming.
  <sup>[[link](#avoid-slang)]</sup>

    ```javascript
    // bad
    product.diePlease();

    // good
    product.remove();
    ```

* <a name="avoid-abbreviations"></a>Avoid abbreviations, especially for variable names.
  <sup>[[link](#avoid-abbreviations)]</sup>

    ```javascript
    // bad
    u = User.find(user => user.active);

    // good
    active_user = User.find(user => user.active);
    ```

* <a name="boolean-prefixes"></a>Prefix boolean variables and methods with `is_` or `has_`.
  <sup>[[link](#boolean-prefixes)]</sup>

    ```javascript
    // bad
    valid = true;

    // good
    is_valid = true;
    ```

* <a name="noun-variable-names"></a>Use **nouns** for variables and constants that describe the data they hold.
  <sup>[[link](#noun-variable-names)]</sup>

    ```javascript
    // bad
    uuids = [...];

    // good
    authorized_user_uuids = [...];
    ```

* <a name="verb-method-names"></a>For functions / methods / commands use **verbs** or short-phrase with **adjectives** that will explain what this method supposed to do.
  <sup>[[link](#verb-method-names)]</sup>

    ```javascript
    // bad
    function sned() { ... }
    function handle() { ... }
    function proc_val() { ... }
    function data() { ... }
  
    // good
    function send_data() { ... }
    ```

* <a name="noun-class-names"></a>Use **nouns** for class names that reflect the responsibility of the class.
  <sup>[[link](#noun-class-names)]</sup>

    ```javascript
    // bad
    class ProcessData {
      ...
    }
  
    // bad
    class Helper {
      ...
    }

    // good
    class ReportService {
      ...
    }
    ```

* <a name="naming--camelCase"></a>Use **camelCase** when naming objects, functions, and instances. eslint: [`camelcase`](https://eslint.org/docs/rules/camelcase)
  <sup>[[link](#naming--camelCase)]</sup>

  ```javascript
  // bad
  const OBJEcttsssss = {};
  const this_is_my_object = {};
  function c() {}

  // good
  const thisIsMyObject = {};
  function thisIsMyFunction() {}
  ```

* <a name="naming--PascalCase"></a>Use **PascalCase** only when naming constructors or classes. eslint: [`new-cap`](https://eslint.org/docs/rules/new-cap)
  <sup>[[link](#naming--PascalCase)]</sup>

  ```javascript
  // bad
  function user(options) {
    this.name = options.name;
  }

  const bad = new user({
    name: 'nope',
  });

  // good
  class User {
    constructor(options) {
      this.name = options.name;
    }
  }

  const good = new User({
    name: 'yup',
  });
  ```

* <a name="naming--filename-matches-export"></a>A base filename should exactly match the name of its default export.
  <sup>[[link](#naming--filename-matches-export)]</sup>

  ```javascript
  // file 1 contents
  class CheckBox {
    // ...
  }
  export default CheckBox;

  // file 2 contents
  export default function fortyTwo() { return 42; }

  // file 3 contents
  export default function insideDirectory() {}

  // in some other file
  // bad
  import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
  import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
  import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

  // bad
  import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
  import forty_two from './forty_two'; // snake_case import/filename, camelCase export
  import inside_directory from './inside_directory'; // snake_case import, camelCase export
  import index from './inside_directory/index'; // requiring the index file explicitly
  import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

  // good
  import CheckBox from './CheckBox'; // PascalCase export/import/filename
  import fortyTwo from './fortyTwo'; // camelCase export/import/filename
  import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
  // ^ supports both insideDirectory.js and insideDirectory/index.js
  ```
  

## Objects

* <a name="objects--no-new"></a>Use the literal syntax for object creation. eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object)
  <sup>[[link](#objects--no-new)]</sup>

  ```javascript
  // bad
  const item = new Object();

  // good
  const item = {};
  ```

* <a name="computed-properties"></a>Use computed property names when creating objects with dynamic property names.
  <sup>[[link](#computed-properties)]</sup>

  > Why? They allow you to define all the properties of an object in one place.

  ```javascript
  // bad
  const obj = {
    id: 5,
    name: 'San Francisco',
  }
  obj[`a key named ${k}`] = true;

  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [`a key named ${k}`]: true,
  }
  ```
  
* <a name="object-shorthand"></a>Use object method shorthand. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)
  <sup>[[link](#object-shorthand)]</sup>
  ```javascript
  // bad
  const atom = {
    value: 1,
    addValue: function(value) {
      return atom.value + value;
    },
  }

  // good
  const atom = {
    value: 1,
    addValue(value) {
      return atom.value + value;
    },
  }
  ```

* <a name="object-concise"></a>Use property value shorthand. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)
  <sup>[[link](#object-concise)]</sup>
  
  > Why? It is shorter and descriptive.

  ```javascript
  const lukeSkywalker = 'Luke Skywalker';

  // bad
  const obj = {
    lukeSkywalker: lukeSkywalker,
  };

  // good
  const obj = {
    lukeSkywalker,
  };
  ```

* <a name="objects--grouped-shorthand"></a>Group your shorthand properties at the beginning of your object declaration.
  <sup>[[link](#objects--grouped-shorthand)]</sup>

  ```javascript
  const anakinSkywalker = 'Anakin Skywalker';
  const lukeSkywalker = 'Luke Skywalker';

  // bad
  const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
  };

  // good
  const obj = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
  };
  ```

* <a name="objects--quoted-props"></a>Only quote properties that are invalid identifiers. eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props)
  <sup>[[link](#objects--quoted-props)]</sup>

  > Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

  ```javascript
  // bad
  const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
  };

  // good
  const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
  };
  ```

* <a name="objects--rest-spread"></a>Prefer the object spread syntax over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. 
  Use the object rest parameter syntax to get a new object with certain properties omitted. eslint: [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)
  <sup>[[link](#objects--rest-spread)]</sup>

  ```javascript
  // very bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign(original, { c: 3 }); // this mutates `original`
  delete copy.a; // so does this

  // bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

  // good
  const original = { a: 1, b: 2 };
  const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }
  ```


## Arrays

* <a name="arrays--literals"></a>Use the literal syntax for array creation. eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)
  <sup>[[link](#arrays--literals)]</sup>

  ```javascript
  // bad
  const items = new Array();

  // good
  const items = [];
  ```

* <a name="arrays--push"></a>Use [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.
  <sup>[[link](#arrays--push)]</sup>

  ```javascript
  const someStack = [];

  // bad
  someStack[someStack.length] = 'abracadabra';

  // good
  someStack.push('abracadabra');
  ```

* <a name="es6-array-spreads"></a>Use array spreads `...` to copy arrays.
  <sup>[[link](#es6-array-spreads)]</sup>

  ```javascript
  // bad
  const len = items.length;
  const itemsCopy = [];
  let i;

  for (i = 0; i < len; i += 1) {
    itemsCopy[i] = items[i];
  }

  // good
  const itemsCopy = [...items];
  ```

* <a name="arrays--from-array-like"></a>Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for converting an array-like object to an array.
  <sup>[[link](#arrays--from-array-like)]</sup>

  ```javascript
  const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

  // bad
  const arr = Array.prototype.slice.call(arrLike);

  // good
  const arr = Array.from(arrLike);
  ```

* <a name="arrays--callback-return"></a>Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects, following [8.2](#arrows--implicit-return). eslint: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)
  <sup>[[link](#arrays--callback-return)]</sup>

  ```javascript
  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map((x) => x + 1);

  // bad - no returned value means `acc` becomes undefined after the first iteration
  [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
  });

  // good
  [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    return flatten;
  });

  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    } else {
      return false;
    }
  });

  // good
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    }

    return false;
  });
  ```

* <a name="arrays--bracket-newline"></a>Use line breaks after opening array brackets and before closing array brackets, if an array has multiple lines
  <sup>[[link](#arrays--bracket-newline)]</sup>

  ```javascript
  // bad
  const arr = [
    [0, 1], [2, 3], [4, 5],
  ];

  const objectInArray = [{
    id: 1,
  }, {
    id: 2,
  }];

  const numberInArray = [
    1, 2,
  ];

  // good
  const arr = [[0, 1], [2, 3], [4, 5]];

  const objectInArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const numberInArray = [
    1,
    2,
  ];
  ```


## Destructuring

* <a name="destructuring--object"></a>Use object destructuring when accessing and using multiple properties of an object. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)
  <sup>[[link](#destructuring--object)]</sup>
  
  > Why? Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.

  ```javascript
  // bad
  function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
  }

  // good
  function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
  }

  // best
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }
  ```

* <a name="destructuring--array"></a>Use array destructuring. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)
  <sup>[[link](#destructuring--array)]</sup>

  ```javascript
  const arr = [1, 2, 3, 4];

  // bad
  const first = arr[0];
  const second = arr[1];

  // good
  const [first, second] = arr;
  ```


## Strings

* <a name="strings--quotes"></a>Use single quotes `''` for strings. eslint: [`quotes`](https://eslint.org/docs/rules/quotes)
  <sup>[[link](#strings--quotes)]</sup>

  ```javascript
  // bad
  const name = "Capt. Janeway";

  // bad - template literals should contain interpolation or newlines
  const name = `Capt. Janeway`;

  // good
  const name = 'Capt. Janeway';
  ```

* <a name="strings--line-length"></a>Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.
  <sup>[[link](#strings--line-length)]</sup>

  > Why? Broken strings are painful to work with and make code less searchable.

  ```javascript
  // bad
  const errorMessage = 'This is a super long error that was thrown because \
  of Batman. When you stop to think about how Batman had anything to do \
  with this, you would get nowhere \
  fast.';

  // bad
  const errorMessage = 'This is a super long error that was thrown because ' +
    'of Batman. When you stop to think about how Batman had anything to do ' +
    'with this, you would get nowhere fast.';

  // good
  const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
  ```

* <a name="es6-template-literals"></a>When programmatically building up strings, use template strings instead of concatenation. eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)
  <sup>[[link](#es6-template-literals)]</sup>
  
  > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

  ```javascript
  // bad
  function sayHi(name) {
    return 'How are you, ' + name + '?';
  }

  // bad
  function sayHi(name) {
    return ['How are you, ', name, '?'].join();
  }

  // bad
  function sayHi(name) {
    return `How are you, ${ name }?`;
  }

  // good
  function sayHi(name) {
    return `How are you, ${name}?`;
  }
  ```

* <a name="strings--eval"></a>Never use `eval()` on a string; it opens too many vulnerabilities. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)
  <sup>[[link](#strings--eval)]</sup>

* <a name="strings--escaping"></a>Do not unnecessarily escape characters in strings. eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)
  <sup>[[link](#strings--escaping)]</sup>

  > Why? Backslashes harm readability, thus they should only be present when necessary.

  ```javascript
  // bad
  const foo = '\'this\' \i\s \"quoted\"';

  // good
  const foo = '\'this\' is "quoted"';
  const foo = `my name is '${name}'`;
  ```


## Functions

* <a name="functions--iife"></a>Wrap immediately invoked function expressions in parentheses. eslint: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)
  <sup>[[link](#functions--iife)]</sup>

  > Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

  ```javascript
  // immediately-invoked function expression (IIFE)
  (function () {
    console.log('Welcome to the Internet. Please follow me.');
  }());
  ```

* <a name="functions--in-blocks"></a>Avoid declaring a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func)
  <sup>[[link](#functions--in-blocks)]</sup>

* <a name="functions--note-on-blocks"></a>**Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement.
  <sup>[[link](#functions--note-on-blocks)]</sup>

  ```javascript
  // bad
  if (currentUser) {
    function test() {
      console.log('Nope.');
    }
  }

  // good
  let test;
  if (currentUser) {
    test = () => {
      console.log('Yup.');
    };
  }
  ```

* <a name="functions--arguments-shadow"></a>Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.
  <sup>[[link](#functions--arguments-shadow)]</sup>

  ```javascript
  // bad
  function foo(name, options, arguments) {
    // ...
  }

  // good
  function foo(name, options, args) {
    // ...
  }
  ```

* <a name="es6-rest"></a>Avoid use `arguments`, opt to use rest syntax `...` instead. eslint: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)
  <sup>[[link](#es6-rest)]</sup>

  > Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.

  ```javascript
  // bad
  function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
  }

  // good
  function concatenateAll(...args) {
    return args.join('');
  }
  ```

* <a name="es6-default-parameters"></a>Use default parameter syntax rather than mutating function arguments.
  <sup>[[link](#es6-default-parameters)]</sup>

  ```javascript
  // really bad
  function handleThings(opts) {
    // No! We shouldn’t mutate function arguments.
    // Double bad: if opts is falsy it'll be set to an object which may
    // be what you want but it can introduce subtle bugs.
    opts = opts || {};
    // ...
  }

  // still bad
  function handleThings(opts) {
    if (opts === void 0) {
      opts = {};
    }
    // ...
  }

  // good
  function handleThings(opts = {}) {
    // ...
  }
  ```
* <a name="functions--defaults-last"></a>Always put default parameters last. eslint: [`default-param-last`](https://eslint.org/docs/rules/default-param-last)
  <sup>[[link](#functions--defaults-last)]</sup>

  ```javascript
  // bad
  function handleThings(opts = {}, name) {
    // ...
  }

  // good
  function handleThings(name, opts = {}) {
    // ...
  }
  ```

* <a name="functions--signature-spacing"></a>Spacing in a function signature. eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)
  <sup>[[link](#functions--signature-spacing)]</sup>

  > Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

  ```javascript
  // bad
  const f = function(){};
  const g = function (){};
  const h = function() {};

  // good
  const x = function () {};
  const y = function a() {};
  ```

* <a name="functions--mutate-params"></a>Never mutate parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)
  <sup>[[link](#functions--mutate-params)]</sup>

  ```javascript
  // bad
  function f1(obj) {
    obj.key = 1;
  }

  // good
  function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
  }
  ```

* <a name="functions--reassign-params"></a>Never reassign parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)
  <sup>[[link](#functions--reassign-params)]</sup>
  
  > Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

  ```javascript
  // bad
  function f1(a) {
    a = 1;
    // ...
  }

  function f2(a) {
    if (!a) { a = 1; }
    // ...
  }

  // good
  function f3(a) {
    const b = a || 1;
    // ...
  }

  function f4(a = 1) {
    // ...
  }
  ```

* <a name="functions--spread-vs-apply"></a>Prefer the use of the spread syntax `...` to call variadic functions. eslint: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)
  <sup>[[link](#functions--spread-vs-apply)]</sup>

  ```javascript
  // bad
  const x = [1, 2, 3, 4, 5];
  console.log.apply(console, x);

  // good
  const x = [1, 2, 3, 4, 5];
  console.log(...x);

  // bad
  new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

  // good
  new Date(...[2016, 8, 5]);
  ```

* <a name="functions--signature-invocation-indentation"></a>Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item. eslint: [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)
  <sup>[[link](#functions--signature-invocation-indentation)]</sup>

  ```javascript
  // bad
  function foo(bar,
               baz,
               quux) {
    // ...
  }

  // good
  function foo(
    bar,
    baz,
    quux
  ) {
    // ...
  }

  // bad
  console.log(foo,
    bar,
    baz);

  // good
  console.log(
    foo,
    bar,
    baz,
  );
  ```


## Arrow Functions

* <a name="arrows--use-them"></a>Use arrow function notation for anonymous functions (as when passing an inline callback). eslint: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)
  <sup>[[link](#arrows--use-them)]</sup>

  > Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

  > Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.

  ```javascript
  // bad
  [1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
  ```

* <a name="arrows--implicit-return"></a>If the function body consists of a single statement returning an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style)
  <sup>[[link](#arrows--implicit-return)]</sup>

  > Why? Syntactic sugar. It reads well when multiple functions are chained together.

  ```javascript
  // bad
  [1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
  });

  // good
  [1, 2, 3].map((number) => `A string containing the ${number + 1}.`);

  // good
  [1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  });

  // good
  [1, 2, 3].map((number, index) => ({
    [index]: number,
  }));

  // No implicit return with side effects
  function foo(callback) {
    const val = callback();
    if (val === true) {
      // Do something if callback returns true
    }
  }

  let bool = false;

  // bad
  foo(() => bool = true);

  // good
  foo(() => {
    bool = true;
  });
  ```

* <a name="arrows--paren-wrap"></a>In case the expression spans over multiple lines, wrap it in parentheses for better readability.
  <sup>[[link](#arrows--paren-wrap)]</sup>

  > Why? It shows clearly where the function starts and ends.

  ```javascript
  // bad
  ['get', 'post', 'put'].map((httpMethod) => Object.prototype.hasOwnProperty.call(
      httpMagicObjectWithAVeryLongName,
      httpMethod,
    )
  );

  // good
  ['get', 'post', 'put'].map((httpMethod) => (
    Object.prototype.hasOwnProperty.call(
      httpMagicObjectWithAVeryLongName,
      httpMethod,
    )
  ));
  ```

* <a name="arrows--one-arg-parens"></a>Avoid parentheses around single argument for clarity and consistency. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens)
  <sup>[[link](#arrows--one-arg-parens)]</sup>

  ```javascript
  // bad
  [1, 2, 3].map((x) => x * x);

  // good
  [1, 2, 3].map(x => x * x);
  ```

* <a name="arrows--confusing"></a>Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`). eslint: [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)
  <sup>[[link](#arrows--confusing)]</sup>

  ```javascript
  // bad
  const itemHeight = (item) => item.height <= 256 ? item.largeSize : item.smallSize;

  // bad
  const itemHeight = (item) => item.height >= 256 ? item.largeSize : item.smallSize;

  // good
  const itemHeight = (item) => (item.height <= 256 ? item.largeSize : item.smallSize);

  // good
  const itemHeight = (item) => {
    const { height, largeSize, smallSize } = item;
    return height <= 256 ? largeSize : smallSize;
  };
  ```


## Classes & Constructors

* <a name="constructors--use-class"></a>Always use `class`. Avoid manipulating `prototype` directly.
  <sup>[[link](#constructors--use-class)]</sup>

  > Why? `class` syntax is more concise and easier to reason about.

  ```javascript
  // bad
  function Queue(contents = []) {
    this.queue = [...contents];
  }
  Queue.prototype.pop = function () {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }

  // good
  class Queue {
    constructor(contents = []) {
      this.queue = [...contents];
    }
  
    pop() {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    }
  }
  ```

* <a name="classes--methods-use-this"></a>Class methods should use `this` or be made into a static method unless an external library or framework requires using specific non-static methods. Being an instance method should indicate that it behaves differently based on properties of the receiver. eslint: [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)
  <sup>[[link](#classes--methods-use-this)]</sup>

  ```javascript
  // bad
  class Foo {
    bar() {
      console.log('bar');
    }
  }

  // good - this is used
  class Foo {
    bar() {
      console.log(this.bar);
    }
  }

  // good - constructor is exempt
  class Foo {
    constructor() {
      // ...
    }
  }

  // good - static methods aren't expected to use this
  class Foo {
    static bar() {
      console.log('bar');
    }
  }
  ```


## Modules

* <a name="modules--use-them"></a>Always use modules (`import`/`export`) over a non-standard module system. You can always transpile to your preferred module system.
  <sup>[[link](#modules--use-them)]</sup>
  
  ```javascript
  // bad
  const AirbnbStyleGuide = require('./AirbnbStyleGuide');
  module.exports = AirbnbStyleGuide.es6;

  // good
  import AirbnbStyleGuide from './AirbnbStyleGuide';
  export default AirbnbStyleGuide.es6;
  ```

* <a name="modules--no-duplicate-imports"></a>Only import from a path in one place. eslint: [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)
  <sup>[[link](#modules--no-duplicate-imports)]</sup>

  ```javascript
  // bad
  import foo from 'foo';
  // … some other imports … //
  import { named1, named2 } from 'foo';

  // good
  import foo, { named1, named2 } from 'foo';

  // good
  import foo, {
    named1,
    named2,
  } from 'foo';
  ```

* <a name="modules--no-mutable-exports"></a>Do not export mutable bindings. eslint: [`import/no-mutable-exports`](https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)
  <sup>[[link](#modules--no-mutable-exports)]</sup>

  ```javascript
  // bad
  let foo = 3;
  export { foo };

  // good
  const foo = 3;
  export { foo };
  ```

* <a name="modules--prefer-default-export"></a>In modules with a single export, prefer default export over named export. eslint: [`import/prefer-default-export`](https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)
  <sup>[[link](#modules--prefer-default-export)]</sup>

  ```javascript
  // bad
  export function foo() {}

  // good
  export default function foo() {}
  ```

* <a name="modules--imports-first"></a>Put all `import`s above all other code.
  <sup>[[link](#modules--imports-first)]</sup>

  ```javascript
  // bad
  import foo from 'foo';
  foo.init();

  import bar from 'bar';

  // good
  import foo from 'foo';
  import bar from 'bar';

  foo.init();
  ```

* <a name="modules--multiline-imports-over-newlines"></a>Multiline imports should be indented just like multiline array and object literals. eslint: [`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)
  <sup>[[link](#modules--multiline-imports-over-newlines)]</sup>

  ```javascript
  // bad
  import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

  // good
  import {
    longNameA,
    longNameB,
    longNameC,
    longNameD,
    longNameE,
  } from 'path';
  ```

* <a name="modules--no-webpack-loader-syntax"></a>Disallow Webpack loader syntax in module import statements. eslint: [`import/no-webpack-loader-syntax`](https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
  <sup>[[link](#modules--no-webpack-loader-syntax)]</sup>

  ```javascript
  // bad
  import fooSass from 'css!sass!foo.scss';
  import barCss from 'style!css!bar.css';

  // good
  import fooSass from 'foo.scss';
  import barCss from 'bar.css';
  ```

* <a name="modules--import-extensions"></a>Do not include JavaScript filename extensions. eslint: [`import/extensions`](https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/extensions.md)
  <sup>[[link](#modules--import-extensions)]</sup>

  ```javascript
  // bad
  import foo from './foo.js';
  import bar from './bar.jsx';
  import baz from './baz/index.jsx';

  // good
  import foo from './foo';
  import bar from './bar';
  import baz from './baz';
  ```


## Iterators and Generators

* <a name="iterators--nope"></a>Don’t use iterators. Prefer JavaScript’s higher-order functions instead of loops like `for-in` or `for-of`. eslint: [`no-iterator`](https://eslint.org/docs/rules/no-iterator) [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)
  <sup>[[link](#iterators--nope)]</sup>

  > Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

  > Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.

  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  // bad
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  sum === 15;

  // good
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  sum === 15;

  // best (use the functional force)
  const sum = numbers.reduce((total, num) => total + num, 0);
  sum === 15;

  // bad
  const increasedByOne = [];
  for (let i = 0; i < numbers.length; i++) {
    increasedByOne.push(numbers[i] + 1);
  }

  // good
  const increasedByOne = [];
  numbers.forEach((num) => {
    increasedByOne.push(num + 1);
  });

  // best (keeping it functional)
  const increasedByOne = numbers.map((num) => num + 1);
  ```


## Properties

* <a name="properties--dot"></a>Use dot notation when accessing properties. eslint: [`dot-notation`](https://eslint.org/docs/rules/dot-notation)
  <sup>[[link](#properties--dot)]</sup>

  ```javascript
  const luke = {
    jedi: true,
    age: 28,
  };

  // bad
  const isJedi = luke['jedi'];

  // good
  const isJedi = luke.jedi;
  ```

* <a name="properties--bracket"></a>Use bracket notation `[]` when accessing properties with a variable.
  <sup>[[link](#properties--bracket)]</sup>

  ```javascript
  const luke = {
    jedi: true,
    age: 28,
  };

  function getProp(prop) {
    return luke[prop];
  }

  const isJedi = getProp('jedi');
  ```


## Variables

* <a name="references--prefer-const"></a>Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)
  <sup>[[link](#references--prefer-const)]</sup>

  > Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

  ```javascript
  // bad
  var a = 1;
  var b = 2;

  // good
  const a = 1;
  const b = 2;
  ```

* <a name="references--disallow-var"></a>If you must reassign references, use `let` instead of `var`. eslint: [`no-var`](https://eslint.org/docs/rules/no-var)
  <sup>[[link](#references--disallow-var)]</sup>

  > Why? `let` is block-scoped rather than function-scoped like `var`.

  ```javascript
  // bad
  var count = 1;
  if (true) {
    count += 1;
  }

  // good, use the let.
  let count = 1;
  if (true) {
    count += 1;
  }
  ```

**Note:** both `let` and `const` are block-scoped, whereas `var` is function-scoped.

  ```javascript
  // const and let only exist in the blocks they are defined in.
  {
    let a = 1;
    const b = 1;
    var c = 1;
  }
  console.log(a); // ReferenceError
  console.log(b); // ReferenceError
  console.log(c); // Prints 1
  ```

* <a name="variables--declare"></a>Always declare your variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that. eslint: [`no-undef`](https://eslint.org/docs/rules/no-undef) [`prefer-const`](https://eslint.org/docs/rules/prefer-const)
  <sup>[[link](#variables--declare)]</sup>

  ```javascript
  // bad
  superPower = new SuperPower();

  // good
  const superPower = new SuperPower();
  ```

* <a name="variables--one-const"></a>Use one `const` declaration per variable or assignment. eslint: [`one-var`](https://eslint.org/docs/rules/one-var)
  <sup>[[link](#variables--one-const)]</sup>
  
  ```javascript
  // bad
  const items = getItems(),
      goSportsTeam = true,
      dragonball = 'z';

  // bad
  // (compare to above, and try to spot the mistake)
  const items = getItems(),
      goSportsTeam = true;
      dragonball = 'z';

  // good
  const items = getItems();
  const goSportsTeam = true;
  const dragonball = 'z';
  ```

* <a name="variables--const-let-group"></a>Group all your `const`s and then group all your `let`s.
  <sup>[[link](#variables--const-let-group)]</sup>

  > Why? This is helpful when later on you might need to assign a variable depending on one of the previously assigned variables.

  ```javascript
  // bad
  let i;
  const items = getItems();
  let dragonball;
  const goSportsTeam = true;
  let len;

  // good
  const goSportsTeam = true;
  const items = getItems();
  let dragonball;
  let i;
  let length;
  ```

* <a name="variables--no-chain-assignment"></a>Avoid chain variable assignments. eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)
  <sup>[[link](#variables--no-chain-assignment)]</sup>

  > Why? Chaining variable assignments creates implicit global variables.

  ```javascript
  // bad
  (function example() {
    // JavaScript interprets this as
    // let a = ( b = ( c = 1 ) );
    // The let keyword only applies to variable a; variables b and c become
    // global variables.
    let a = b = c = 1;
  }());

  console.log(a); // throws ReferenceError
  console.log(b); // 1
  console.log(c); // 1

  // good
  (function example() {
    let a = 1;
    let b = a;
    let c = a;
  }());

  console.log(a); // throws ReferenceError
  console.log(b); // throws ReferenceError
  console.log(c); // throws ReferenceError

  // the same applies for `const`
  ```

* <a name="variables--unary-increment-decrement"></a>Avoid using unary increments and decrements (`++`, `--`). eslint [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)
  <sup>[[link](#variables--unary-increment-decrement)]</sup>

  > Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num += 1` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

  ```javascript
  // bad
  const array = [1, 2, 3];
  let num = 1;
  num++;
  --num;

  let sum = 0;
  let truthyCount = 0;
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    sum += value;
    if (value) {
      truthyCount++;
    }
  }

  // good
  const array = [1, 2, 3];
  let num = 1;
  num += 1;
  num -= 1;

  const sum = array.reduce((a, b) => a + b, 0);
  const truthyCount = array.filter(Boolean).length;
  ```

* <a name="variables--linebreak"></a>Avoid linebreaks before or after `=` in an assignment. If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len), surround the value in parens. eslint [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak).
  <sup>[[link](#variables--linebreak)]</sup>

  > Why? Linebreaks surrounding `=` can obfuscate the value of an assignment.

  ```javascript
  // bad
  const foo =
    superLongLongLongLongLongLongLongLongFunctionName();

  // bad
  const foo
    = 'superLongLongLongLongLongLongLongLongString';

  // good
  const foo = (
    superLongLongLongLongLongLongLongLongFunctionName()
  );

  // good
  const foo = 'superLongLongLongLongLongLongLongLongString';
  ```


## Comparison Operators & Equality

* <a name="comparison--eqeqeq"></a>Use `===` and `!==` over `==` and `!=`. eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)
  <sup>[[link](#comparison--eqeqeq)]</sup>

* <a name="comparison--if"></a>Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:
  <sup>[[link](#comparison--if)]</sup>

    - **Objects** evaluate to **true**
    - **Undefined** evaluates to **false**
    - **Null** evaluates to **false**
    - **Booleans** evaluate to **the value of the boolean**
    - **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
    - **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

  ```javascript
  if ([0] && []) {
    // true
    // an array (even an empty one) is an object, objects will evaluate to true
  }
  ```

* <a name="comparison--shortcuts"></a>Use shortcuts for booleans, but explicit comparisons for strings and numbers.
  <sup>[[link](#comparison--shortcuts)]</sup>

  ```javascript
  // bad
  if (isValid === true) {
    // ...
  }

  // good
  if (isValid) {
    // ...
  }

  // bad
  if (name) {
    // ...
  }

  // good
  if (name !== '') {
    // ...
  }

  // bad
  if (collection.length) {
    // ...
  }

  // good
  if (collection.length > 0) {
    // ...
  }
  ```

* <a name="comparison--switch-blocks"></a>Avoid braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`). eslint: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)
  <sup>[[link](#comparison--switch-blocks)]</sup>

    ```javascript
    // bad
    switch (foo) {
      case 1: {
        // ...
        break;
      }
      default: {
        // ...
      }
    }
    
    // good
    switch (foo) {
      case 1:
        // ...
        break;
    
      default:
        // ...
    }
    ```

* <a name="comparison--nested-ternaries"></a>Ternaries should not be nested and generally be single line expressions. eslint: [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary)
  <sup>[[link](#comparison--nested-ternaries)]</sup>

  ```javascript
  // bad
  const foo = maybe1 > maybe2
    ? "bar"
    : value1 > value2 ? "baz" : null;

  // good
  const maybeNull = value1 > value2 ? 'baz' : null;
  const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
  ```

* <a name="comparison--no-mixed-operators"></a>When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators: `+`, `-`, and `**` since their precedence is broadly understood. We recommend enclosing `/` and `*` in parentheses because their precedence can be ambiguous when they are mixed. eslint: [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators)
  <sup>[[link](#comparison--no-mixed-operators)]</sup>

  ```javascript
  // bad
  const foo = a && b < 0 || c > 0 || d + 1 === 0;

  // bad
  const bar = a ** b - 5 % d;

  // bad
  // one may be confused into thinking (a || b) && c
  if (a || b && c) {
    return d;
  }

  // bad
  const bar = a + b / c * d;

  // good
  const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

  // good
  const bar = a ** b - (5 % d);

  // good
  if (a || (b && c)) {
    return d;
  }

  // good
  const bar = a + (b / c) * d;
  ```

* <a name="nullish-coalescing-operator"></a>The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`. Otherwise, it returns the left-hand side operand.
  <sup>[[link](#nullish-coalescing-operator)]</sup>

  > Why? It provides precision by distinguishing null/undefined from other falsy values, enhancing code clarity and predictability.

  ```javascript
  // bad
  const value = 0 ?? 'default';
  // returns 0, not 'default'

  // bad
  const value = '' ?? 'default';
  // returns '', not 'default'

  // good
  const value = null ?? 'default';
  // returns 'default'

  // good
  const user = {
    name: 'John',
    age: null
  };
  const age = user.age ?? 18;
  // returns 18
  ```


## Blocks

* <a name="blocks--braces"></a>Use braces with all blocks. eslint: [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)
  <sup>[[link](#blocks--braces)]</sup>

  ```javascript
  // bad
  if (test)
    return false;

  // bad
  if (test) return false;

  // good
  if (test) {
    return false;
  }

  // good
  function foo() { return false; }
  ```

* <a name="blocks--cuddled-elses"></a>If you’re using multiline blocks with `if` and `else`, put `else` on the same line as your `if` block’s closing brace. eslint: [`brace-style`](https://eslint.org/docs/rules/brace-style)
  <sup>[[link](#blocks--cuddled-elses)]</sup>

  ```javascript
  // bad
  if (test) {
    // ...
  }
  else {
    // ...
  }

  // good
  if (test) {
    // ...
  } else {
    // ...
  }
  ```

* <a name="blocks--no-else-return"></a>If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks. eslint: [`no-else-return`](https://eslint.org/docs/rules/no-else-return)
  <sup>[[link](#blocks--no-else-return)]</sup>

  ```javascript
  // bad
  function foo() {
    if (x) {
      return x;
    } else {
      return y;
    }
  }

  // bad
  function cats() {
    if (x) {
      return x;
    } else if (y) {
      return y;
    }
  }

  // bad
  function dogs() {
    if (x) {
      return x;
    } else {
      if (y) {
        return y;
      }
    }
  }

  // good
  function foo() {
    if (x) {
      return x;
    }

    return y;
  }

  // good
  function cats() {
    if (x) {
      return x;
    }

    if (y) {
      return y;
    }
  }
  ```

## Commenting

Well-written code should aim to be self-explanatory.
Clear, descriptive names for classes, methods, and variables often eliminate the need for additional commentary.

Giving sensible names to types and variables is much better
than using obscure names that you must then explain through comments.

That said, comments are valuable in situations where the code's intent, context, or reasoning isn't immediately obvious. Use them to clarify **why** something is done, not just **what** is done.

Pay attention to punctuation, spelling, and grammar; it is easier to read
well-written comments than badly written ones.

> Write comments with future developers in mind — especially those unfamiliar with your work.
> Generosity here pays off: that future developer might be you.

* <a name="comments--newline"></a>Place single line comments on a newline above the subject of the comment. Put an empty line before the comment.
  <sup>[[link](#comments--newline)]</sup>

  ```javascript
  // bad
  const active = true;  // is current tab

  // good
  // is current tab
  const active = true;

  // bad
  function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
  }

  // good
  function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
  }
  ```

* <a name="comments--spaces"></a>Start all comments with a space to make it easier to read.
  <sup>[[link](#comments--spaces)]</sup>

  ```javascript
  // bad
  //is current tab
  const active = true;

  // good
  // is current tab
  const active = true;
  ```


### Section comments

Use comments to divide files, classes, or methods into logical sections.
This can significantly improve the readability and flow of longer code blocks,
helping others quickly understand how a file is structured.

### TODO comments

* <a name="comments-todo"></a>Use `@todo` comments for code that is temporary, a short-term solution, or good-enough but not perfect.
  <sup>[[link](#comments-todo)]</sup>

TODOs should always be followed by a comment explaining what there is
to do is required. The main purpose is to have a consistent TODO format that
can be searched.

```javascript
// bad
// TODO

// bad
// to fix

// good
// @todo: Use proper namespacing for this constant.
```

### Deprecation comments

* <a name="comments-deprecation"></a>Use `@deprecated` comments for code that will no-longer be supported in the future, place the comment right above the method or class
  <sup>[[link](#comments-deprecation)]</sup>

### Commented-out code

* <a name="commented-out-code"></a>Avoid leave commented-out code in our codebase.
  <sup>[[link](#commented-out-code)]</sup>


## Control Statements

* <a name="control-statements"></a>In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line.
  <sup>[[link](#control-statements)]</sup>

  ```javascript
  // bad
  if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
    thing1();
  }

  // bad
  if (foo === 123 &&
    bar === 'abc') {
    thing1();
  }

  // bad
  if (foo === 123
    && bar === 'abc') {
    thing1();
  }

  // bad
  if (
    foo === 123
    && bar === 'abc'
  ) {
    thing1();
  }

  // good
  if (
    foo === 123 &&
    bar === 'abc'
  ) {
    thing1();
  }

  // good
  if (
    (foo === 123 || bar === 'abc') &&
    doesItLookGoodWhenItBecomesThatLong() &&
    isThisReallyHappening()
  ) {
    thing1();
  }

  // good
  if (foo === 123 && bar === 'abc') {
    thing1();
  }
  ```


## Whitespace

* <a name="whitespace--spaces"></a>Use soft tabs (space character) set to 4 spaces. eslint: [`indent`](https://eslint.org/docs/rules/indent
  <sup>[[link](#whitespace--spaces)]</sup>

* <a name="whitespace--before-blocks"></a>Place 1 space before the leading brace. eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)
  <sup>[[link](#whitespace--before-blocks)]</sup>

  ```javascript
  // bad
  function test(){
    console.log('test');
  }

  // good
  function test() {
    console.log('test');
  }

  // bad
  dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  });

  // good
  dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  });
  ```

* <a name="whitespace--around-keywords"></a>Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)
  <sup>[[link](#whitespace--around-keywords)]</sup>

  ```javascript
  // bad
  if(isJedi) {
    fight ();
  }

  // good
  if (isJedi) {
    fight();
  }

  // bad
  function fight () {
    console.log ('Swooosh!');
  }

  // good
  function fight() {
    console.log('Swooosh!');
  }
  ```

* <a name="whitespace--infix-ops"></a>Set off operators with spaces. eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops)
  <sup>[[link](#whitespace--infix-ops)]</sup>

  ```javascript
  // bad
  const x=y+5;

  // good
  const x = y + 5;
  ```

* <a name="whitespace--after-blocks"></a>Leave a blank line after blocks and before the next statement.
  <sup>[[link](#whitespace--after-blocks)]</sup>

  ```javascript
  // bad
  if (foo) {
    return bar;
  }
  return baz;

  // good
  if (foo) {
    return bar;
  }

  return baz;

  // bad
  const obj = {
    foo() {
    },
    bar() {
    },
  }
  return obj;

  // good
  const obj = {
    foo() {
    },

    bar() {
    },
  }

  return obj;

  // bad
  const arr = [
    function foo() {
    },
    function bar() {
    },
  ]
  return arr;

  // good
  const arr = [
    function foo() {
    },

    function bar() {
    },
  ]

  return arr;
  ```

* <a name="whitespace--no-multiple-blanks"></a>Do not use multiple blank lines to pad your code. eslint: [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)
  <sup>[[link](#whitespace--no-multiple-blanks)]</sup>

  ```javascript
  // bad
  class Person {
    constructor(fullName, email, birthday) {
      this.fullName = fullName;


      this.email = email;


      this.setAge(birthday);
    }


    getAge(today, birthday) {
      // ..
    }
  }

  // good
  class Person {
    constructor(fullName, email, birthday) {
      this.fullName = fullName;
      this.email = email;
      this.setAge(birthday);
    }

    getAge(today, birthday) {
      // ..
    }
  }
  ```

* <a name="whitespace--in-braces"></a>Add spaces inside curly braces. eslint: [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)
  <sup>[[link](#whitespace--in-braces)]</sup>

  ```javascript
  // bad
  const foo = {clark: 'kent'}

  // good
  const foo = { clark: 'kent' }
  ```

* <a name="whitespace--block-spacing"></a>Use spacing inside an inline blocks
  <sup>[[link](#whitespace--block-spacing)]</sup>

  ```javascript
  // bad
  function foo() {return true;}
  if (foo) {bar = 0;}

  // good
  function foo() { return true; }
  if (foo) { bar = 0; }
  ```

* <a name="whitespace--comma-spacing"></a>Avoid spaces before commas and require a space after commas. eslint: [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)
  <sup>[[link](#whitespace--comma-spacing)]</sup>

  ```javascript
  // bad
  const foo = 1,bar = 2;
  const arr = [1 , 2];

  // good
  const foo = 1, bar = 2;
  const arr = [1, 2];
  ```

* <a name="whitespace--computed-property-spacing"></a>Enforce spacing inside of computed property brackets. eslint: [`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)
  <sup>[[link](#whitespace--computed-property-spacing)]</sup>

  ```javascript
  // bad
  obj[foo ]
  obj[ 'foo']
  const x = {[ b ]: a}
  obj[foo[ bar ]]

  // good
  obj[foo]
  obj['foo']
  const x = { [b]: a }
  obj[foo[bar]]
  ```

* <a name="whitespace--func-call-spacing"></a>Avoid spaces between functions and their invocations. eslint: [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)
  <sup>[[link](#whitespace--func-call-spacing)]</sup>

  ```javascript
  // bad
  func ();

  func
  ();

  // good
  func();
  ```

* <a name="whitespace--key-spacing"></a>Enforce spacing between keys and values in object literal properties. eslint: [`key-spacing`](https://eslint.org/docs/rules/key-spacing)
  <sup>[[link](#whitespace--key-spacing)]</sup>

  ```javascript
  // bad
  const obj = { foo : 42 };
  const obj2 = { foo:42 };

  // good
  const obj = { foo: 42 };
  ```

* <a name="whitespace--no-trailing-spaces"></a>Avoid trailing spaces at the end of lines. eslint: [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)
  <sup>[[link](#whitespace--no-trailing-spaces)]</sup>

* <a name="whitespace--no-multiple-empty-lines"></a>Avoid multiple empty lines, only allow one newline at the end of files, and avoid a newline at the beginning of files. eslint: [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)
  <sup>[[link](#whitespace--no-multiple-empty-lines)]</sup>

  ```javascript
  // bad - multiple empty lines
  const x = 1;


  const y = 2;

  // bad - 2+ newlines at end of file
  const x = 1;
  const y = 2;


  // bad - 1+ newline(s) at beginning of file

  const x = 1;
  const y = 2;

  // good
  const x = 1;
  const y = 2;

  ```


## Commas

* <a name="commas--leading-trailing"></a>Avoid leading commas. eslint: [`comma-style`](https://eslint.org/docs/rules/comma-style)
  <sup>[[link](#commas--leading-trailing)]</sup>

  ```javascript
  // bad
  const story = [
      once
    , upon
    , aTime
  ];

  // good
  const story = [
    once,
    upon,
    aTime,
  ];

  // bad
  const hero = {
      firstName: 'Ada'
    , lastName: 'Lovelace'
    , birthYear: 1815
    , superPower: 'computers'
  };

  // good
  const hero = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    birthYear: 1815,
    superPower: 'computers',
  };
  ```


## Semicolons

* <a name="semicolons--required"></a>It's a better approach to use semicolons. eslint: [`semi`](https://eslint.org/docs/rules/semi)
  <sup>[[link](#semicolons--required)]</sup>

  > Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) to determine whether it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.

  ```javascript
  // bad - raises exception
  const luke = {}
  const leia = {}
  [luke, leia].forEach((jedi) => jedi.father = 'vader')

  // bad - raises exception
  const reaction = "No! That’s impossible!"
  (async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
  }())

  // bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
  function foo() {
    return
      'search your feelings, you know it to be foo'
  }

  // good
  const luke = {};
  const leia = {};
  [luke, leia].forEach((jedi) => {
    jedi.father = 'vader';
  });

  // good
  const reaction = 'No! That’s impossible!';
  (async function meanwhileOnTheFalcon() {
    // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
    // ...
  }());

  // good
  function foo() {
    return 'search your feelings, you know it to be foo';
  }
  ```

  [Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214)

* Avoid adding semicolons after brackets

  ```javascript
  // bad
  function x() {
    // ...  
  };
  
  // good
  function x() {
    // ...  
  }
  ```