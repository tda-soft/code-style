## React Code Styles

**The react code style is extending the [basic JS code style](../code-style.md).**

- [1. JSX File Structure](#1-jsx-file-structure)
- [2. propTypes & defaultProps](#2-proptypes--defaultprops)

----

#### 1. JSX File Structure
* The `render` method is always the last method in the class.
* Remove empty sections / methods.

```js
class Example extends React.Component {

    static propTypes = {
        ...
    }
    
    static defaultProps = {
        ...
    }
    

    ////
    // Lifecycle
	
    constructor(props) {
        super(props);

        // Initial state
        this.state = {};
    }

    componentDidMount() { ... }

    componentWillUnmount() { ... }
    
    static getDerivedStateFromProps(props, state) { ... }


    ////
    // Methods


    ////
    // Actions


    ////
    // Events


    ////
    // Helpers
    

    ////
    // Rendering
    
    renderSection() { ... }
    
    render() { ... }

}
```

#### 2. propTypes & defaultProps
<details>
    <summary>Use ES7 version propTypes:</summary>
    
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
