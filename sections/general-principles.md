# General Principles for Code Styling

The following principles apply to all technologies, programming languages, and frameworks used.

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

### Consistency

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
  
### Code Duplication
* Avoid copying and pasting code
* Extract common functionality into reusable functions
* Use shared utilities for common operations