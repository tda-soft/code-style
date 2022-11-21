## Ruby Code Styles

- [1. Comments](#1-comments)
- [2. Deprecation](#2-deprecation)
- [3. Services](#3-services)
- [4. Quotes](#4-quotes)
- [5. Tests](#5-tests)
- [6. Routes](#6-routes)
- [7. Translations](#7-translations)

----

#### General
* **underline_case** naming notation.
* Classes begin with Capital letter.
* Constants are **UPPER_CASE** notation.
* 2 space (see editorconfig).
* Every method that return boolean value will end with `?` - will not update data.
* Every method that might raise exception will end with `!`.
* Always use `return` at the end to return value.
* Use early return pattern whenever possible, [read more](https://medium.com/swlh/return-early-pattern-3d18a41bba8).

<br>

#### 1. Comments
```ruby
# One line comment
def foo()
  ...
end


#
# Section comment (2 spaces above)
def foo()
  ...
end


##
# Multiline comment - method description (2 spaces above)
#
# @param bar: String - description
# @return Hash - description
def foo(bar)
  ...
end
```
* Comment indentation same as code.


#### 2. Deprecation
Add `# @deprecated` comment right above the method / class.


#### 3. Services
* Each method in the service will begin with `do` when it does an action.
* Each method in the service will begin with `get` when it returns a value and does not modify anything.

#### 4. Quotes
* Use only double quote (").

#### 5. Tests
* Naming convention should be `test_{ method name }_should_{ do something }`.
* Ignore `max_line_length` for tests.
* Each test is divided into those sections:
    * Unit tests:
        * `Prepare`, `Function`, `Assert`.
    * Controller tests / Integration tests:
        * `Prepare`, `Request`, `Assert`.
* Each method should have 2 types of tests **positive** and **negative**:
    * Positive tests expect the tested method to succeed - given correct input & permissions.
    * Negative tests expect the tested method to fail - given invalid input or insufficient permissions
        
#### 6. Routes
* All routes should be cascading.
* All API should begin with `v2/`.

#### 7. Translations
* Don't nest more than 5 indentations.
* Re-use as much as possible.