## React Code Styles

**The React code style is extending the [basic JS code style](../README.md).**

- [1. Component Types](#1-component-types)
- [2. JSX File Structure](#2-jsx-file-structure)
- [3. propTypes & defaultProps](#3-proptypes--defaultprops)

----

#### General
* Don't use one word as component name (except common components).
* Container components will end with `Container`.
* Explicit `window` when you access global scope variables.

#### 1. Component Types
```

```
  
#### 2. JSX File Structure
* Remove empty sections / methods.
* Keep the file in sections:
    * Don't place unrelated methods / variables in between others.
    * Don't place your methods at the bottom.
* The component name should reflect it's nature for example: the view component will be `usersView` and modal component will be `userDetailsModal`

##### Functional Components
* See [Example Components](./templates/functional_component.jsx)

##### Class Components
Class components have previously been the most commonly used
* See [Example Components](./templates/class_component.jsx)
* The `render` method is always the last method in the class.
* The `constructor` method is always the first method in the class.

#### 3. propTypes & defaultProps
* Use primitive propTypes (String, Integer, Array, Function).
* Use Shape for object or array of objects.
* See React [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html).
