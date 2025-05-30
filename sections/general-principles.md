# General Principles for Code Styling

The following principles apply to all technologies, programming languages, and frameworks used.

## Table of Contents
1. [Naming](#naming)
1. [Consistency](#consistency)
1. [Commenting](#commenting)
    1. [Section comments](#section-comments)
    1. [TODO comments](#todo-comments)
    1. [Deprecation comments](#deprecation-comments)
    1. [Commented-out code](#commented-out-code)
1. [Line Length](#line-length)
1. [Code Duplication](#code-duplication)


---


### Naming
Choose clear, descriptive, and meaningful names for all identifiers in your code. Good naming improves readability and reduces the need for additional comments.

* <a name="meaningful-names"></a>Use meaningful, descriptive names for variables, methods, classes, and constants.<sup>[[link](#meaningful-names)]</sup>

    ```
    # bad
    function calc(x) { ... }

    # good
    function calculate_total_price(cart_items) { ... }
    ```

* <a name="avoid-slang"></a>Avoid slang or humorous terms in naming.<sup>[[link](#avoid-slang)]</sup>

    ```
    # bad
    product.diePlease()

    # good
    product.remove()
    ```
* <a name="avoid-abbreviations"></a>Avoid abbreviations, especially for variable names.<sup>[[link](#avoid-abbreviations)]</sup>

    ```ruby
    # bad
    u = User.where(active: true)

    # good
    active_user = User.where(active: true)
    ```

* <a name="boolean-prefixes"></a>Prefix boolean variables and methods with `is_` or `has_`.<sup>[[link](#boolean-prefixes)]</sup>

    ```
    # bad
    valid = true

    # good
    is_valid = true
    ```

* <a name="noun-variable-names"></a>Use **nouns** for variables and constants that describe the data they hold.<sup>[[link](#noun-variable-names)]</sup>

    ```
    # bad
    uuids = [...]

    # good
    authorized_user_uuids = [...]
    ```

* <a name="verb-method-names"></a>For functions / methods / commands use **verbs** or short-phrase with **adjectives** that will explain what this method supposed to do<sup>[[link](#verb-method-names)]</sup>

    ```
    # bad
    function sned() { ... }
    function handle() { ... }
    function proc_val() { ... }
    function data() { ... }
  
    # good
    function send_data() { ... }
    ```

* <a name="noun-class-names"></a>Use **nouns** for class names that reflect the responsibility of the class.<sup>[[link](#noun-class-names)]</sup>

    ```ruby
    # bad
    class ProcessData
      ...
    end
  
    # bad
    class Helper
      ...
    end

    # good
    class ReportService
      ...
    end
    ```

More reference about naming convention [read this article](https://medium.com/wix-engineering/naming-convention-8-basic-rules-for-any-piece-of-code-c4c5f65b0c09).


## Consistency

Consistency is critical to maintaining a clean and maintainable codebase. Always follow existing naming patterns used in the project. 
If multiple terms exist for the same concept — for example, `fetchData`, `getData`, and `retrieveData` — choose one (e.g., `getData`) and apply it consistently throughout the codebase.

When in doubt, search the project for similar usages or ask the team to confirm the standard term.

* <a name="consistent-indentation"></a>Maintain consistent indentation throughout the codebase.<sup>[[link](#consistent-indentation)]</sup>

    ```ruby
    # bad
    def fetch_data
    user = User.find(1)
      puts user.name
    end

    # good
    def fetch_data
      user = User.find(1)
      puts user.name
    end
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


## Line Length

* Keep each line of code to a readable length. Unless
  you have a reason not to, keep lines to fewer than 150 characters.
  [[link](#line-length)]</sup>


## Code Duplication
* Avoid copying and pasting code
* Extract common functionality into reusable functions
* Use shared utilities for common operations