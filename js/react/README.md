## React Code Styles

**The react code style is extending the [basic JS code style](../README.md).**

- [1. JSX File Structure](#1-jsx-file-structure)
- [2. propTypes & defaultProps](#2-proptypes--defaultprops)

----

#### General
* Don't use one word as component name (except common components).
* Container components will end with `Container`.
* Explicit `window` when you access global scope variables.

#### 1. JSX File Structure
* See [Example JSX Component Structure](./templates/FileStructure.jsx)
* The `render` method is always the last method in the class.
* Remove empty sections / methods.
* Keep the methods in sections:
    * Don't place unrelated method in between others.
    * Don't place you methods at the bottom. 

#### 2. propTypes & defaultProps
<details><summary>Use ES7 version:</summary>
  
<br>
<br>

**Good:**
```js
class Example extends React.Component {

  static propTypes = {
    ...
  }
	
  static defaultProps = {
    ...
  }

}
```

<br> 

**Bad:**

```js
class Example extends React.Component {
  ...
}

Example.propTypes = {
  ...
}

Example.defaultProps = {
  ...
}
```
</details>

* Use primitive propTypes (String, Integer, Array, Function).
* Use Shape for object or array of objects.
* See React [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html).
