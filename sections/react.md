# React/JSX Style Guide

## Table of Contents

1. [Basic Rules](#basic-rules)
1. [Mixins](#mixins)
1. [Naming Conventions](#naming-conventions)
1. [Alignment](#alignment)
1. [Quotes](#quotes)
1. [Spacing](#spacing)
1. [Props](#props)
1. [Parentheses](#parentheses)
1. [Tags](#tags)
1. [Methods](#methods)
1. [File Structure](#file-structure)


---


## Basic Rules

* Only include one React component per file. However, `Provider` component is allowed in the same file
* Always use JSX syntax.
* Do not use `React.createElement` unless you’re initializing the app from a file that is not JSX.
* Explicit `window` when you access global scope variables.


## Mixins

- [Do not use mixins](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html).

> Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules.


## Naming Conventions

* Don't use one word as component name (except common components).
* Container components will end with `Container`, view components will end with `View`. (E.g. `EmployeeFormsView`)
* Use `.jsx` extension for React components. eslint: [`react/jsx-filename-extension`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
* Use **PascalCase** for filenames. (E.g., `ReservationCard.jsx`)
* **Reference Naming**: Use **PascalCase** for React components and **camelCase** for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

  ```jsx
  // bad
  import reservationCard from './ReservationCard';

  // good
  import ReservationCard from './ReservationCard';

  // bad
  const ReservationItem = <ReservationCard />;

  // good
  const reservationItem = <ReservationCard />;
  ```

* **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

  ```jsx
  // bad
  import Footer from './Footer/Footer';

  // bad
  import Footer from './Footer/index';

  // good
  import Footer from './Footer';
  ```

* Avoid using DOM component prop names for different purposes.

  > Why? People expect props like `style` and `className` to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

  ```jsx
  // bad
  <MyComponent style="fancy" />

  // bad
  <MyComponent className="fancy" />

  // good
  <MyComponent variant="fancy" />
  ```
  

## Alignment

  ```jsx
  // bad
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
  />

  // bad
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz" />

  // good
  <Foo superLongParam="bar"
       anotherSuperLongParam="baz" />

  // if props fit in one line then keep it on the same line
  <Foo bar="bar" />

  // bad
  {showButton &&
    <Button />
  }

  // bad
  { showButton &&
      <Button />
  }

  // good
  { showButton && (
    <Button />
  ) }

  // good
  { showButton && <Button /> }
  ```


## Quotes

* Always use double quotes (`"`) for JSX attributes, but single quotes (`'`) for all other JS. eslint: [`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)

  > Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

  ```jsx
  // bad
  <Foo bar='bar' />

  // good
  <Foo bar="bar" />

  // bad
  <Foo style={{ left: "20px" }} />

  // good
  <Foo style={{ left: '20px' }} />
  ```


## Spacing

* Always include a single space in your self-closing tag. eslint: [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

  ```jsx
  // bad
  <Foo/>
  <Foo name="Danny"/>
  <Foo
   />

  // good
  <Foo />
  <Foo name="Danny" />
  ```

* Always pad JSX curly braces with 1 spaces. eslint: [`react/jsx-curly-spacing`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

  ```jsx
  // bad
  <Foo bar={baz} />

  // good
  <Foo bar={ baz } />
  ```


## Props

* Always use **camelCase** for prop names
* Avoid passing unnecessary props
* Always use `on` prefix for callback props

  ```jsx
  // bad
  <Foo UserName="hello"
       phone_number={ 12345678 } 
       wasClicked={ () => { ... } } />

  // good
  <Foo userName="hello"
       phoneNumber={ 12345678 }
       onClick={ () => { ... } } />
  ```

* Omit the value of the prop when it is explicitly `true`. eslint: [`react/jsx-boolean-value`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)
* Props with no value should always be last

  ```jsx
  // bad
  <Foo hidden={ true } 
       userName="hello" />

  // good
  <Foo userName="hello"
       hidden />
  ```

* Avoid using an array index as `key` prop, prefer a stable ID. eslint: [`react/no-array-index-key`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

  > Why? Not using a stable ID [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) because it can negatively impact performance and cause issues with component state.

  ```jsx
  // bad
  { todos.map((todo, index) =>
    <Todo key={ index } { ...todo } />
  ) }

  // good
  { todos.map(todo => 
    <Todo key={ todo.id } { ...todo } />
  ) }
  ```


## Parentheses

* Wrap JSX tags in parentheses when they span more than one line. eslint: [`react/jsx-wrap-multilines`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

  ```jsx
  // bad
  render() {
    return <MyComponent variant="long body" foo="bar">
             <MyChild />
           </MyComponent>;
  }

  // good
  render() {
    return (
      <MyComponent variant="long body" foo="bar">
        <MyChild />
      </MyComponent>
    );
  }

  // good, when single line
  render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
  }
  ```


## Tags

* Always self-close tags that have no children. eslint: [`react/self-closing-comp`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

  ```jsx
  // bad
  <Foo variant="stuff"></Foo>

  // good
  <Foo variant="stuff" />
  ```

* If your component has multiline properties, close its tag on the last line.

  ```jsx
  // bad
  <Foo
    bar="bar"
    baz="baz" 
  />

  // good
  <Foo
    bar="bar"
    baz="baz" />
  ```
  
* Always include a single space in your self-closing tag. eslint: [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

  ```jsx
  // bad
  <Foo/>
  <Foo name="Danny"/>
  <Foo
   />

  // good
  <Foo />
  <Foo name="Danny" />
  ```


## Methods


* Prefer arrow functions over using `bind` in render methods. eslint: [`react/jsx-no-bind`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

  > Why? A bind call in the render path creates a brand new function on every single render.

  ```jsx
  // bad
  onClick() {
    // ...
  }

  render() {
    return <button onClick={ onClick.bind(this) } />;
  }
  
  // good
  onClick() {
    // ..
  }

  render() {
    return <button onClick={ () => onClick() } />;
  }
  ```

* Do not use underscore prefix for internal methods of a React component.
  > Why? Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of your intentions, adding underscore prefixes to your properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues [#1024](https://github.com/airbnb/javascript/issues/1024), and [#490](https://github.com/airbnb/javascript/issues/490) for a more in-depth discussion.

  ```jsx
  // bad
  React.createClass({
    _onClickSubmit() {
      // ...
    }
  });

  // good
  class extends React.Component {
    onClickSubmit() {
      // ...
    }
  }
  ```


## File Structure

* Always use the following order of sections in React components:

  ```
  1. Imports
  2. Constants
  3. Store Provider
  ---
  1. References
  2. State
  3. Variables
  4. Lifecycle
  5. Actions
  6. Callbacks
  7. Helpers
  8. Rendering
  ```

### Example

```jsx
'use strict';

// Imports
import React, { useEffect, useState } from 'react';

// Constants
const LABEL_PREFIX = '';
const MODE = {
    DEFAULT: 'default'
}

// Component
export default function COMPONENT_NAME(props) {
    const { t } = I18n;

    /** Refs */

    /** State */
    const [mode, setMode] = useState(MODE.DEFAULT)


    /** Variables */


    /** Lifecycle */
    useEffect(() => load(), [])


    /** Actions */
    function load() {

    }

    /** Callbacks */
    function onClick() {

    }

    /** Rendering */
    return (
        <div>
            hello :)
        </div>
    )
}
```