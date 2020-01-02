## Ruby Code Styles

- [1. Comments](#1-comments)
- [2. Deprecation](#2-deprecation)

----

#### General
* `underline_case` variable name convention.
* Classes begin with Capital letter.

<br>

#### 1. Comments
```ruby
# One line comment
def foo()
    ...
end


##
# Section comment (2 spaces above, 1 below)

def foo()
    ...
end


##
# Multiline comment - method description (2 spaces above, 0 below)
#
# @param bar: String - description
# @return Hash - description
def foo(bar)
    ...
end
```
* Comment indentation same as code.


#### 2. Deprecation
Add `# @deprecated` comment right above the method / class