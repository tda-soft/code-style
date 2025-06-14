# Ruby on Rails Code Style Guide

## Table of Contents
1. [Whitespace](#whitespace)
    1. [Indentation](#indentation)
    1. [Inline](#inline)
    1. [Newlines](#newlines)
1. [Commenting](#commenting)
    1. [Section comments](#section-comments)
    1. [TODO comments](#todo-comments)
    1. [Commented-out code](#commented-out-code)
1. [Methods](#methods)
    1. [Method definitions](#method-definitions)
    1. [Method calls](#method-calls)
1. [Conditional Expressions](#conditional-expressions)
    1. [Conditional keywords](#conditional-keywords)
    1. [Ternary operator](#ternary-operator)
1. [Syntax](#syntax)
1. [Naming Conventions](#naming-conventions)
1. [Classes](#classes)
1. [Exceptions](#exceptions)
1. [Collections](#collections)
1. [Strings](#strings)
1. [Regular Expressions](#regular-expressions)
1. [Percent Literals](#percent-literals)
1. [Rails](#rails)
    1. [Scopes](#scopes)
1. [Consistency](#consistency)


---


## Whitespace

### Indentation

* <a name="default-indentation"></a>Use soft-tabs with a
  two-space indent.<sup>[[link](#default-indentation)]</sup>

* <a name="indent-when-as-case"></a>Indent `when` as deep as `case`.
  <sup>[[link](#indent-when-as-case)]</sup>

    ```ruby
    case
    when song.name == 'Misty'
      puts 'Not again!'
    when song.duration > 120
      puts 'Too long!'
    when Time.now.hour > 21
      puts "It's too late"
    else
      song.play
    end
    ```

* <a name="align-function-params"></a>Align function parameters either one per line.<sup>[[link](#align-function-params)]</sup>

    ```ruby
    # bad
    def self.create_translation(phrase_id, phrase_key, target_locale,
                                value, user_id, do_xss_check, allow_verification)
      ...
    end

    # bad
    def self.create_translation(phrase_id,
                                phrase_key,
                                target_locale,
                                value,
                                user_id,
                                do_xss_check,
                                allow_verification)
      ...
    end

    # good
    def self.create_translation(
      phrase_id,
      phrase_key,
      target_locale,
      value,
      user_id,
      do_xss_check,
      allow_verification
    )
      ...
    end
    ```

* <a name="indent-multi-line-bool"></a>Indent succeeding lines in multi-line
  boolean expressions.<sup>[[link](#indent-multi-line-bool)]</sup>

    ```ruby
    # bad
    def is_eligible?(user)
      Trebuchet.current.launch?(ProgramEligibilityHelper::PROGRAM_TREBUCHET_FLAG) &&
      is_in_program?(user) &&
      program_not_expired
    end

    # good
    def is_eligible?(user)
      Trebuchet.current.launch?(ProgramEligibilityHelper::PROGRAM_TREBUCHET_FLAG) &&
        is_in_program?(user) &&
        program_not_expired
    end
    ```

### Inline

* <a name="trailing-whitespace"></a>Never leave trailing whitespace.
  <sup>[[link](#trailing-whitespace)]</sup>

* <a name="space-before-comments"></a>When making inline comments, include a
  space between the end of the code and the start of your comment.
  <sup>[[link](#space-before-comments)]</sup>

    ```ruby
    # bad
    result = func(a, b)# we might want to change b to c

    # good
    result = func(a, b) # we might want to change b to c
    ```

* <a name="spaces-operators"></a>Use spaces around operators; after commas,
  colons, and semicolons; and around `{` and before `}`.
  <sup>[[link](#spaces-operators)]</sup>

    ```ruby
    sum = 1 + 2
    a, b = 1, 2
    1 > 2 ? true : false; puts 'Hi'
    [1, 2, 3].each { |e| puts e }
    ```

* <a name="no-space-before-commas"></a>Never include a space before a comma.
  <sup>[[link](#no-space-before-commas)]</sup>

    ```ruby
    result = func(a, b)
    ```

* <a name="spaces-block-params"></a>Do not include space inside block
  parameter pipes. Include one space between parameters in a block.
  Include one space outside block parameter pipes.
  <sup>[[link](#spaces-block-params)]</sup>

    ```ruby
    # bad
    {}.each { | x,  y |puts x }

    # good
    {}.each { |x, y| puts x }
    ```

* <a name="no-space-after-!"></a>Do not leave space between `!` and its
  argument.<sup>[[link](#no-space-after-!)]</sup>

    ```ruby
    !something
    ```

* <a name="no-spaces-braces"></a>No spaces after `(`, `[` or before `]`, `)`.
  <sup>[[link](#no-spaces-braces)]</sup>

    ```ruby
    some(arg).other
    [1, 2, 3].length
    ```

* <a name="no-spaces-string-interpolation"></a>Omit whitespace when doing
  string interpolation.<sup>[[link](#no-spaces-string-interpolation)]</sup>

    ```ruby
    # bad
    var = "This #{ foobar } is interpolated."

    # good
    var = "This #{foobar} is interpolated."
    ```

* <a name="no-spaces-range-literals"></a>Don't use extra whitespace in range
  literals.<sup>[[link](#no-spaces-range-literals)]</sup>

    ```ruby
    # bad
    (0 ... coll).each do |item|

    # good
    (0...coll).each do |item|
    ```

### Newlines

* <a name="multiline-if-newline"></a>Add a new line after `if` conditions spanning
  multiple lines to help differentiate between the conditions and the body.
  <sup>[[link](#multiline-if-newline)]</sup>

    ```ruby
    if @reservation_alteration.checkin == @reservation.start_date &&
       @reservation_alteration.checkout == (@reservation.start_date + @reservation.nights)

      redirect_to_alteration @reservation_alteration
    end
    ```

* <a name="newline-after-conditional"></a>Add a new line after conditionals,
  blocks, case statements, etc.<sup>[[link](#newline-after-conditional)]</sup>

    ```ruby
    if robot.is_awesome?
      send_robot_present
    end

    robot.add_trait(:human_like_intelligence)
    ```

* <a name="newline-different-indent"></a>Include newlines between areas
  of different indentation (such as around class or module bodies).
  <sup>[[link](#newline-different-indent)]</sup>

    ```ruby
    # bad
    class Foo
      def bar
        # body omitted
      end
    end

    # good
    class Foo

      def bar
        # body omitted
      end

    end
    ```

* <a name="newline-between-methods"></a>Include one, but no more than one, new
  line between methods.<sup>[[link](#newline-between-methods)]</sup>

    ```ruby
    def a
    end

    def b
    end
    ```

* <a name="method-def-empty-lines"></a>Use a single empty line to break between
  statements to break up methods into logical paragraphs internally.
  <sup>[[link](#method-def-empty-lines)]</sup>

    ```ruby
    def transformorize_car
      car = manufacture(options)
      t = transformer(robot, disguise)

      car.after_market_mod!
      t.transform(car)
      car.assign_cool_name!

      fleet.add(car)
      car
    end
    ```

* <a name="trailing-newline"></a>Don't include newlines at the end of a file.
  <sup>[[link](#trailing-newline)]</sup>


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

  ```ruby
  # bad
  active = true  # is current tab

  # good
  # is current tab
  active = true

  # bad
  def getType
    puts "fetching type..."
    # set the default type to 'no type'
    type ||= "no type"

    return type
  end

  # good
  def getType
    puts "fetching type..."

    # set the default type to 'no type'
    type ||= "no type"

    return type
  end
  ```

* <a name="comments--spaces"></a>Start all comments with a space to make it easier to read.
  <sup>[[link](#comments--spaces)]</sup>

  ```ruby
  // bad
  //is current tab
  active = true

  // good
  // is current tab
  active = true
  ```
  
### Section comments

Use comments to divide files, classes, or methods into logical sections. 
This can significantly improve the readability and flow of longer code blocks, 
helping others quickly understand how a file is structured.

```ruby
def foo
  ...
end


#
# Section comment (2 spaces above)
def bar
  ...
end
```

### TODO comments

Use TODO comments for code that is temporary, a short-term solution, or
good-enough but not perfect.

TODOs should include the string TODO in all caps, followed by a comment explaining what there is
to do is required. The main purpose is to have a consistent TODO format that
can be searched.

```ruby
  # bad
  # TODO
  
  # bad
  # to fix

  # good
  # TODO: Use proper namespacing for this constant.
```

### Commented-out code
    
* <a name="commented-code"></a>Avoid leave commented-out code in our codebase.
  <sup>[[link](#commented-code)]</sup>


## Methods

### Method definitions

* <a name="method-def-parens"></a>Use `def` with parentheses when there are
  parameters. Omit the parentheses when the method doesn't accept any
  parameters.<sup>[[link](#method-def-parens)]</sup>

     ```ruby
     def some_method
       # body omitted
     end

     def some_method_with_parameters(arg1, arg2)
       # body omitted
     end
     ```

* <a name="no-single-line-methods"></a>Don't use single-line methods
  <sup>[[link](#no-single-line-methods)]</sup>

    ```ruby
    # bad
    def too_much; something; something_else; end

    # good
    def some_method
      # body
    end
    ```

### Method calls

**Use parentheses** for a method call:

* <a name="returns-val-parens"></a>If the method returns a value.
  <sup>[[link](#returns-val-parens)]</sup>

    ```ruby
    # bad
    @current_user = User.find_by_id 1964192

    # good
    @current_user = User.find_by_id(1964192)
    ```

* <a name="first-arg-parens"></a>If the first argument to the method uses
  parentheses.<sup>[[link](#first-arg-parens)]</sup>

    ```ruby
    # bad
    put! (x + y) % len, value

    # good
    put!((x + y) % len, value)
    ```

* <a name="space-method-call"></a>Never put a space between a method name and
  the opening parenthesis.<sup>[[link](#space-method-call)]</sup>

    ```ruby
    # bad
    f (3 + 2) + 1

    # good
    f(3 + 2) + 1
    ```

* <a name="no-args-parens"></a>**Omit parentheses** for a method call if the
  method accepts no arguments.<sup>[[link](#no-args-parens)]</sup>

    ```ruby
    # bad
    nil?()

    # good
    nil?
    ```


## Conditional Expressions

### Conditional keywords

* <a name="multiline-if-then"></a>Never use `then` for multi-line `if/unless`.
  <sup>[[link](#multiline-if-then)]</sup>

    ```ruby
    # bad
    if some_condition then
      ...
    end

    # good
    if some_condition
      ...
    end
    ```

* <a name="multiline-while-until"></a>Never use `do` for multi-line `while` or
  `until`.<sup>[[link](#multiline-while-until)]</sup>

    ```ruby
    # bad
    while x > 5 do
      ...
    end

    until x > 5 do
      ...
    end

    # good
    while x > 5
      ...
    end

    until x > 5
      ...
    end
    ```

* <a name="no-and-or"></a>The `and`, `or`, and `not` keywords are banned. It's
  just not worth it. Always use `&&`, `||`, and `!` instead.
  <sup>[[link](#no-and-or)]</sup>

* <a name="only-simple-if-unless"></a>Modifier `if/unless` usage is okay when
  the body is simple, the condition is simple, and the whole thing fits on
  one line. Otherwise, avoid modifier `if/unless`.
  <sup>[[link](#only-simple-if-unless)]</sup>

    ```ruby
    # bad - this doesn't fit on one line
    add_trebuchet_experiments_on_page(request_opts[:trebuchet_experiments_on_page]) if request_opts[:trebuchet_experiments_on_page] && !request_opts[:trebuchet_experiments_on_page].empty?

    # good
    if (request_opts[:trebuchet_experiments_on_page] &&
         !request_opts[:trebuchet_experiments_on_page].empty?)

      add_trebuchet_experiments_on_page(request_opts[:trebuchet_experiments_on_page])
    end

    # bad - this is complex and deserves multiple lines and a comment
    parts[i] = part.to_i(INTEGER_BASE) if !part.nil? && [0, 2, 3].include?(i)

    # good
    return if reconciled?
    ```

* <a name="no-unless-with-else"></a>Never use `unless` with `else`. Rewrite
  these with the positive case first.<sup>[[link](#no-unless-with-else)]</sup>

    ```ruby
    # bad
    unless success?
      puts 'failure'
    else
      puts 'success'
    end

    # good
    if success?
      puts 'success'
    else
      puts 'failure'
    end
    ```

* <a name="unless-with-multiple-conditions"></a>Avoid `unless` with multiple
  conditions.<sup>[[link](#unless-with-multiple-conditions)]</sup>

    ```ruby
      # bad
      unless foo? && bar?
        ...
      end

      # good
      if !(foo? && bar?)
        ...
      end
    ```

* <a name="unless-with-comparison-operator"></a>Avoid `unless` with comparison operators if you can use `if` with an opposing comparison operator.<sup>[[link](#unless-with-comparison-operator)]</sup>

    ```ruby
      # bad
      unless (x == 10)
        ...
      end

      # good
      if (x != 10)
        ...
      end

      # bad
      unless (x < 10)
        ...
      end

      # good
      if (x >= 10)
        ...
      end

      # okay
      unless (x === 10)
        ...
      end
    ```

* <a name="parens-around-conditions"></a>Use parentheses around the
  condition of an `if/unless/while`.
  <sup>[[link](#parens-around-conditions)]</sup>

    ```ruby
    # bad
    if x > 10
      ...
    end

    # good
    if (x > 10)
      ...
    end
    ```

### Ternary operator

* <a name="avoid-complex-ternary"></a>Avoid the ternary operator (`?:`) except
  in cases where all expressions are extremely trivial. However, do use the
  ternary operator(`?:`) over `if/then/else/end` constructs for single line
  conditionals.<sup>[[link](#avoid-complex-ternary)]</sup>

    ```ruby
    # bad
    result = if some_condition then something else something_else end

    # good
    result = some_condition ? something : something_else
    ```

* <a name="no-nested-ternaries"></a>Use one expression per branch in a ternary
  operator. This also means that ternary operators must not be nested. Prefer
  `if/else` constructs in these cases.<sup>[[link](#no-nested-ternaries)]</sup>

    ```ruby
    # bad
    some_condition ? (nested_condition ? nested_something : nested_something_else) : something_else

    # good
    if some_condition
      nested_condition ? nested_something : nested_something_else
    else
      something_else
    end
    ```

* <a name="single-condition-ternary"></a>Avoid multiple conditions in ternaries.
  Ternaries are best used with single conditions.
  <sup>[[link](#single-condition-ternary)]</sup>

* <a name="no-multiline-ternaries"></a>Avoid multi-line `?:` (the ternary
  operator), use `if/then/else/end` instead.
  <sup>[[link](#no-multiline-ternaries)]</sup>

    ```ruby
    # bad
    some_really_long_condition_that_might_make_you_want_to_split_lines ?
      something : something_else

    # good
    if some_really_long_condition_that_might_make_you_want_to_split_lines
      something
    else
      something_else
    end
    ```

### Nested conditionals

* <a name="no-nested-conditionals"></a>
  Avoid the use of nested conditionals for flow of control.
  ([More on this][avoid-else-return-early].) <sup>[[link](#no-nested-conditionals)]</sup>

  Prefer a guard clause when you can assert invalid data. A guard clause
  is a conditional statement at the top of a function that returns as soon
  as it can.

  The general principles boil down to:
    * Return immediately once you know your function cannot do anything more.
    * Reduce nesting and indentation in the code by returning early. This makes
      the code easier to read and requires less mental bookkeeping on the part
      of the reader to keep track of `else` branches.
    * The core or most important flows should be the least indented.

  ```ruby
  # bad
  def compute
    server = find_server
    if server
      client = server.client
      if client
        request = client.make_request
        if request
           process_request(request)
        end
      end
    end
  end

  # good
  def compute
    server = find_server
    return unless server
    client = server.client
    return unless client
    request = client.make_request
    return unless request
    process_request(request)
  end
  ```

  Prefer `next` in loops instead of conditional blocks.

  ```ruby
  # bad
  [0, 1, 2, 3].each do |item|
    if item > 1
      puts item
    end
  end

  # good
  [0, 1, 2, 3].each do |item|
    next unless item > 1
    puts item
  end
  ```

  See also the section "Guard Clause", p68-70 in Beck, Kent.
  *Implementation Patterns*. Upper Saddle River: Addison-Wesley, 2008, which
  has inspired some of the content above.


## Syntax

* <a name="no-for"></a>Never use `for`, unless you know exactly why. Most of the
  time iterators should be used instead. `for` is implemented in terms of
  `each` (so you're adding a level of indirection), but with a twist - `for`
  doesn't introduce a new scope (unlike `each`) and variables defined in its
  block will be visible outside it.<sup>[[link](#no-for)]</sup>

    ```ruby
    arr = [1, 2, 3]

    # bad
    for elem in arr do
      puts elem
    end

    # good
    arr.each { |elem| puts elem }
    ```

* <a name="single-line-blocks"></a>Prefer `{...}` over `do...end` for
  single-line blocks.  Avoid using `{...}` for multi-line blocks (multiline
  chaining is always ugly). Always use `do...end` for "control flow" and
  "method definitions" (e.g. in Rakefiles and certain DSLs).  Avoid `do...end`
  when chaining.<sup>[[link](#single-line-blocks)]</sup>

    ```ruby
    names = ["Bozhidar", "Steve", "Sarah"]

    # good
    names.each { |name| puts name }

    # bad
    names.each do |name| puts name end

    # good
    names.each do |name|
      puts name
      puts 'yay!'
    end

    # bad
    names.each { |name|
      puts name
      puts 'yay!'
    }

    # good
    names.select { |name| name.start_with?("S") }.map { |name| name.upcase }

    # bad
    names.select do |name|
      name.start_with?("S")
    end.map { |name| name.upcase }
    ```

  Some will argue that multiline chaining would look okay with the use of
  `{...}`, but they should ask themselves if this code is really readable and
  whether the block's content can be extracted into nifty methods.

* <a name="self-assignment"></a>Use shorthand self assignment operators
  whenever applicable.<sup>[[link](#self-assignment)]</sup>

    ```ruby
    # bad
    x = x + y
    x = x * y
    x = x**y
    x = x / y
    x = x || y
    x = x && y

    # good
    x += y
    x *= y
    x **= y
    x /= y
    x ||= y
    x &&= y
    ```

* <a name="semicolons"></a>Avoid semicolons except for in single line class
  definitions. When it is appropriate to use a semicolon, it should be
  directly adjacent to the statement it terminates: there should be no
  space before the semicolon.<sup>[[link](#semicolons)]</sup>

    ```ruby
    # bad
    puts 'foobar'; # superfluous semicolon
    puts 'foo'; puts 'bar' # two expressions on the same line

    # good
    puts 'foobar'

    puts 'foo'
    puts 'bar'

    puts 'foo', 'bar' # this applies to puts in particular
    ```

* <a name="colon-use"></a>Use :: only to reference constants(this includes
  classes and modules) and constructors (like Array() or Nokogiri::HTML()).
  Do not use :: for regular method invocation.<sup>[[link](#colon-use)]</sup>

    ```ruby
    # bad
    SomeClass::some_method
    some_object::some_method

    # good
    SomeClass.some_method
    some_object.some_method
    SomeModule::SomeClass::SOME_CONST
    SomeModule::SomeClass()
    ```

* <a name="redundant-return"></a>Always use `return` when value is returned.
  <sup>[[link](#redundant-return)]</sup>

    ```ruby
    # bad
    def some_method(some_arr)
      some_arr.size
    end
  
    # good
    def some_method(some_arr)
      return some_arr.size
    end
    ```

* <a name="assignment-in-conditionals"></a>Don't use the return value of `=` in
  conditionals<sup>[[link](#assignment-in-conditionals)]</sup>

    ```ruby
    # bad - shows intended use of assignment
    if (v = array.grep(/foo/))
      ...
    end

    # bad
    if v = array.grep(/foo/)
      ...
    end

    # good
    v = array.grep(/foo/)
    if v
      ...
    end

    ```

* <a name="double-pipe-for-uninit"></a>Use `||=` freely to initialize variables.
  <sup>[[link](#double-pipe-for-uninit)]</sup>

    ```ruby
    # set name to Bozhidar, only if it's nil or false
    name ||= 'Bozhidar'
    ```

* <a name="no-double-pipes-for-bools"></a>Don't use `||=` to initialize boolean
  variables. (Consider what would happen if the current value happened to be
  `false`.)<sup>[[link](#no-double-pipes-for-bools)]</sup>

    ```ruby
    # bad - would set enabled to true even if it was false
    enabled ||= true

    # good
    enabled = true if enabled.nil?
    ```

* <a name="lambda-calls"></a>Use `.call` explicitly when calling lambdas.
  <sup>[[link](#lambda-calls)]</sup>

    ```ruby
    # bad
    lambda.(x, y)

    # good
    lambda.call(x, y)
    ```

* <a name="no-cryptic-perl"></a>Avoid using Perl-style special variables (like
  `$0-9`, `$`, etc. ). They are quite cryptic and their use in anything but
  one-liner scripts is discouraged. Prefer long form versions such as
  `$PROGRAM_NAME`.<sup>[[link](#no-cryptic-perl)]</sup>

* <a name="single-action-blocks"></a>When a method block takes only one
  argument, and the body consists solely of reading an attribute or calling
  one method with no arguments, use the `&:` shorthand.
  <sup>[[link](#single-action-blocks)]</sup>

    ```ruby
    # bad
    bluths.map { |bluth| bluth.occupation }
    bluths.select { |bluth| bluth.blue_self? }

    # good
    bluths.map(&:occupation)
    bluths.select(&:blue_self?)
    ```

* <a name="redundant-self"></a>Prefer `some_method` over `self.some_method` when
  calling a method on the current instance.<sup>[[link](#redundant-self)]</sup>

    ```ruby
    # bad
    def end_date
      self.start_date + self.nights
    end

    # good
    def end_date
      start_date + nights
    end
    ```

  In the following three common cases, `self.` is required by the language
  and is good to use:

    1. When defining a class method: `def self.some_method`.
    2. The *left hand side* when calling an assignment method, including assigning
       an attribute when `self` is an ActiveRecord model: `self.guest = user`.
    3. Referencing the current instance's class: `self.class`.

* <a name="freeze-constants"></a>When defining an object of any mutable
  type meant to be a constant, make sure to call `freeze` on it. Common
  examples are strings, arrays, and hashes.
  ([More on this][ruby-freeze].)<sup>[[link](#freeze-constants)]</sup>

  The reason is that Ruby constants are actually mutable. Calling `freeze`
  ensures they are not mutated and are therefore truly constant and
  attempting to modify them will raise an exception. For strings, this allows
  older versions of Ruby below 2.2 to intern them.

    ```ruby
    # bad
    class Color
      RED = 'red'
      BLUE = 'blue'
      GREEN = 'green'

      ALL_COLORS = [
        RED,
        BLUE,
        GREEN,
      ]

      COLOR_TO_RGB = {
        RED => 0xFF0000,
        BLUE => 0x0000FF,
        GREEN => 0x00FF00,
      }
    end

    # good
    class Color
      RED = 'red'.freeze
      BLUE = 'blue'.freeze
      GREEN = 'green'.freeze

      ALL_COLORS = [
        RED,
        BLUE,
        GREEN,
      ].freeze

      COLOR_TO_RGB = {
        RED => 0xFF0000,
        BLUE => 0x0000FF,
        GREEN => 0x00FF00,
      }.freeze
    end
    ```


## Naming Conventions

Choose clear, descriptive, and meaningful names for all identifiers in your code. Good naming improves readability and reduces the need for additional comments.

* <a name="meaningful-names"></a>Use meaningful, descriptive names for variables, methods, classes, and constants.
  <sup>[[link](#meaningful-names)]</sup>

    ```ruby
    # bad
    def calc(x) 
      ...
    end

    # good
    def calculate_total_price(cart_items)
      ...
    end
    ```

* <a name="avoid-slang"></a>Avoid slang or humorous terms in naming.
  <sup>[[link](#avoid-slang)]</sup>

    ```ruby
    # bad
    product.diePlease()

    # good
    product.remove()
    ```

* <a name="avoid-abbreviations"></a>Avoid abbreviations, especially for variable names.
  <sup>[[link](#avoid-abbreviations)]</sup>

    ```ruby
    # bad
    u = User.where(active: true)

    # good
    active_user = User.where(active: true)
    ```

* <a name="boolean-prefixes"></a>Prefix boolean variables and methods with `is_` or `has_`.
  <sup>[[link](#boolean-prefixes)]</sup>

    ```ruby
    # bad
    valid = true

    # good
    is_valid = true
    ```

* <a name="noun-variable-names"></a>Use **nouns** for variables and constants that describe the data they hold.
  <sup>[[link](#noun-variable-names)]</sup>

    ```ruby
    # bad
    uuids = [...]

    # good
    authorized_user_uuids = [...]
    ```

* <a name="verb-method-names"></a>For functions / methods / commands use **verbs** or short-phrase with **adjectives** that will explain what this method supposed to do.
  <sup>[[link](#verb-method-names)]</sup>

    ```ruby
    # bad
    def sned()
      ...
    end
    
    def handle()
      ...
    end
  
    def proc_val() 
      ...
    end
  
    def data()
      ...
    end
  
    # good
    def send_data()
      ... 
    end
    ```

* <a name="noun-class-names"></a>Use **nouns** for class names that reflect the responsibility of the class.
  <sup>[[link](#noun-class-names)]</sup>

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
  
* <a name="snake-case"></a>Use `snake_case` for methods and variables.
  <sup>[[link](#snake-case)]</sup>

* <a name="camel-case"></a>Use `CamelCase` for classes and modules. (Keep
  acronyms like HTTP, RFC, XML uppercase.)
  <sup>[[link](#camel-case)]</sup>

* <a name="screaming-snake-case"></a>Use `SCREAMING_SNAKE_CASE` for other
  constants.<sup>[[link](#screaming-snake-case)]</sup>

* <a name="predicate-method-names"></a>The names of predicate methods (methods
  that return a boolean value) should end in a question mark.
  (i.e. `Array#empty?`).<sup>[[link](#predicate-method-names)]</sup>

* <a name="bang-methods"></a>The names of potentially "dangerous" methods
  (i.e. methods that modify `self` or the arguments, `exit!`, etc.) should
  end with an exclamation mark. Bang methods should only exist if a non-bang
  method exists. ([More on this][ruby-naming-bang].)
  <sup>[[link](#bang-methods)]</sup>

* <a name="throwaway-variables"></a>Name throwaway variables `_`.
  <sup>[[link](#throwaway-variables)]</sup>

    ```ruby
    version = '3.2.1'
    major_version, minor_version, _ = version.split('.')
    ```


## Classes

* <a name="avoid-class-variables"></a>Avoid the usage of class (`@@`) variables
  due to their "nasty" behavior in inheritance.
  <sup>[[link](#avoid-class-variables)]</sup>

    ```ruby
    class Parent
      @@class_var = 'parent'

      def self.print_class_var
        puts @@class_var
      end
    end

    class Child < Parent
      @@class_var = 'child'
    end

    Parent.print_class_var # => will print "child"
    ```

  As you can see all the classes in a class hierarchy actually share one
  class variable. Class instance variables should usually be preferred
  over class variables.

* <a name="singleton-methods"></a>Use `def self.method` to define singleton
  methods. This makes the methods more resistant to refactoring changes.
  <sup>[[link](#singleton-methods)]</sup>

    ```ruby
    class TestClass
      # bad
      def TestClass.some_method
        ...
      end

      # good
      def self.some_other_method
        ...
      end
    ```
* <a name="no-class-self"></a>Avoid `class << self` except when necessary,
  e.g. single accessors and aliased attributes.
  <sup>[[link](#no-class-self)]</sup>

    ```ruby
    class TestClass
      # bad
      class << self
        def first_method
          ...
        end

        def second_method_etc
          ...
        end
      end

      # good
      class << self
        attr_accessor :per_page
        alias_method :nwo, :find_by_name_with_owner
      end

      def self.first_method
        ...
      end

      def self.second_method_etc
        ...
      end
    end
    ```

* <a name="access-modifiers"></a>Indent the `public`, `protected`, and
  `private` methods as much the method definitions they apply to. Leave one
  blank line above and below them.<sup>[[link](#access-modifiers)]</sup>

    ```ruby
    class SomeClass
      def public_method
        # ...
      end

      private

        def private_method
          # ...
        end
    end
    ```


## Exceptions

* <a name="exception-flow-control"></a>Don't use exceptions for flow of control.
  <sup>[[link](#exception-flow-control)]</sup>

    ```ruby
    # bad
    begin
      n / d
    rescue ZeroDivisionError
      puts "Cannot divide by 0!"
    end

    # good
    if d.zero?
      puts "Cannot divide by 0!"
    else
      n / d
    end
    ```

* <a name="redundant-exception"></a>Don't specify `RuntimeError` explicitly in
  the two argument version of raise. Prefer error sub-classes for clarity and
  explicit error creation.<sup>[[link](#redundant-exception)]</sup>

    ```ruby
    # bad
    raise RuntimeError, 'message'

    # better - RuntimeError is implicit here
    raise 'message'

    # best
    class MyExplicitError < RuntimeError; end
    raise MyExplicitError
    ```


* <a name="exception-class-messages"></a>
  Prefer supplying an exception class and a message as two separate arguments
  to `raise`, instead of an exception instance.
  <sup>[[link](#exception-class-messages)]</sup>

    ```Ruby
    # bad
    raise SomeException.new('message')
    # Note that there is no way to do `raise SomeException.new('message'), backtrace`.

    # good
    raise SomeException, 'message'
    # Consistent with `raise SomeException, 'message', backtrace`.
    ```


* <a name="rescue-as-modifier"></a>Avoid using rescue in its modifier form.
  <sup>[[link](#rescue-as-modifier)]</sup>

    ```ruby
    # bad
    read_file rescue handle_error($!)

    # good
    begin
      read_file
    rescue Errno:ENOENT => ex
      handle_error(ex)
    end
    ```


## Collections

* <a name="map-over-collect"></a>Prefer `map` over
  `collect`.<sup>[[link](#map-over-collect)]</sup>

* <a name="detect-over-find"></a>Prefer `detect` over `find`. The use of `find`
  is ambiguous with regard to ActiveRecord's `find` method - `detect` makes
  clear that you're working with a Ruby collection, not an AR object.
  <sup>[[link](#detect-over-find)]</sup>

* <a name="reduce-over-inject"></a>Prefer `reduce` over `inject`.
  <sup>[[link](#reduce-over-inject)]</sup>

* <a name="size-over-count"></a>Prefer `size` over either `length` or `count`
  for performance reasons.<sup>[[link](#size-over-count)]</sup>

* <a name="empty-collection-literals"></a>Prefer literal array and hash creation
  notation unless you need to pass parameters to their constructors.
  <sup>[[link](#empty-collection-literals)]</sup>

    ```ruby
    # bad
    arr = Array.new
    hash = Hash.new

    # good
    arr = []
    hash = {}

    # good because constructor requires parameters
    x = Hash.new { |h, k| h[k] = {} }
    ```

* <a name="array-join"></a>Favor `Array#join` over `Array#*` for clarity.
  <sup>[[link](#array-join)]</sup>

    ```ruby
    # bad
    %w(one two three) * ', '
    # => 'one, two, three'

    # good
    %w(one two three).join(', ')
    # => 'one, two, three'
    ```

* <a name="symbol-keys"></a>Use symbols instead of strings as hash keys.
  <sup>[[link](#symbol-keys)]</sup>

    ```ruby
    # bad
    hash = { 'one' => 1, 'two' => 2, 'three' => 3 }

    # good
    hash = { :one => 1, :two => 2, :three => 3 }
    ```

* <a name="symbol-literals"></a>Relatedly, use plain symbols instead of string
  symbols when possible.<sup>[[link](#symbol-literals)]</sup>

    ```ruby
    # bad
    :"symbol"

    # good
    :symbol
    ```

* <a name="deprecated-hash-methods"></a>Use `Hash#key?` instead of
  `Hash#has_key?` and `Hash#value?` instead of `Hash#has_value?`. According
  to Matz, the longer forms are considered deprecated.
  <sup>[[link](#deprecated-hash-methods)]</sup>

    ```ruby
    # bad
    hash.has_key?(:test)
    hash.has_value?(value)

    # good
    hash.key?(:test)
    hash.value?(value)
    ```

* <a name="multiline-hashes"></a>Use multi-line hashes when it makes the code
  more readable, and use trailing commas to ensure that parameter changes
  don't cause extraneous diff lines when the logic has not otherwise changed.
  <sup>[[link](#multiline-hashes)]</sup>

    ```ruby
    hash = {
      :protocol => 'https',
      :only_path => false,
      :controller => :users,
      :action => :set_password,
      :redirect => @redirect_url,
      :secret => @secret,
    }
    ```

* <a name="array-trailing-comma"></a>Use a trailing comma in an `Array` that
  spans more than 1 line<sup>[[link](#array-trailing-comma)]</sup>

    ```ruby
    # good
    array = [1, 2, 3]

    # good
    array = [
      "car",
      "bear",
      "plane",
      "zoo",
    ]
    ```


## Strings

* <a name="string-interpolation"></a>Prefer string interpolation instead of
  string concatenation:<sup>[[link](#string-interpolation)]</sup>

    ```ruby
    # bad
    email_with_name = user.name + ' <' + user.email + '>'

    # good
    email_with_name = "#{user.name} <#{user.email}>"
    ```

* <a name="multi-line-strings"></a>Use `\` at the end of the line instead of `+`
  or `<<` to concatenate multi-line strings.
  <sup>[[link](#multi-line-strings)]</sup>

    ```ruby
    # bad
    "Some string is really long and " +
      "spans multiple lines."

    "Some string is really long and " <<
      "spans multiple lines."

    # good
    "Some string is really long and " \
      "spans multiple lines."
    ```


## Regular Expressions

* <a name="regex-named-groups"></a>Avoid using `$1-9` as it can be hard to track
  what they contain. Named groups can be used instead.
  <sup>[[link](#regex-named-groups)]</sup>

    ```ruby
    # bad
    /(regexp)/ =~ string
    ...
    process $1

    # good
    /(?<meaningful_var>regexp)/ =~ string
    ...
    process meaningful_var
    ```

* <a name="caret-and-dollar-regexp"></a>Be careful with `^` and `$` as they
  match start/end of line, not string endings.  If you want to match the whole
  string use: `\A` and `\z`.<sup>[[link](#caret-and-dollar-regexp)]</sup>

    ```ruby
    string = "some injection\nusername"
    string[/^username$/]   # matches
    string[/\Ausername\z/] # don't match
    ```

* <a name="comment-regexes"></a>Use `x` modifier for complex regexps. This makes
  them more readable and you can add some useful comments. Just be careful as
  spaces are ignored.<sup>[[link](#comment-regexes)]</sup>

    ```ruby
    regexp = %r{
      start         # some text
      \s            # white space char
      (group)       # first group
      (?:alt1|alt2) # some alternation
      end
    }x
    ```


## Percent Literals

* <a name="percent-literal-delimiters"></a>Prefer parentheses over curly
  braces, brackets, or pipes when using `%`-literal delimiters for
  consistency, and because the behavior of `%`-literals is closer to method
  calls than the alternatives.<sup>[[link](#percent-literal-delimiters)]</sup>

    ```ruby
    # bad
    %w[date locale]
    %w{date locale}
    %w|date locale|

    # good
    %w(date locale)
    ```

* <a name="percent-x"></a>Avoid the use of %x unless you're going to invoke a
  command with backquotes in it (which is rather unlikely).
  <sup>[[link](#percent-x)]</sup>

    ```ruby
    # bad
    date = %x(date)

    # good
    date = `date`
    echo = %x(echo `date`)
    ```


## Rails

* <a name="next-line-return"></a>When immediately returning after calling
  `render` or `redirect_to`, put `return` on the next line, not the same line.
  <sup>[[link](#next-line-return)]</sup>

    ```ruby
    # bad
    render :text => 'Howdy' and return

    # good
    render :text => 'Howdy'
    return

    # still bad
    render :text => 'Howdy' and return if foo.present?

    # good
    if foo.present?
      render :text => 'Howdy'
      return
    end
    ```

### Scopes
* <a name="scope-lambda"></a>When defining ActiveRecord model scopes, wrap the
  relation in a `lambda`.  A naked relation forces a database connection to be
  established at class load time (instance startup).
  <sup>[[link](#scope-lambda)]</sup>

    ```ruby
    # bad
    scope :foo, where(:bar => 1)

    # good
    scope :foo, -> { where(:bar => 1) }
    ```


## Consistency

Consistency is critical to maintaining a clean and maintainable codebase. Always follow existing naming patterns used in the project.

> If you're editing code, take a few minutes to look at the code around you and
> determine its style. If they use spaces around all their arithmetic
> operators, you should too. If their comments have little boxes of hash marks
> around them, make your comments have little boxes of hash marks around them
> too.

> The point of having style guidelines is to have a common vocabulary of coding
> so people can concentrate on what you're saying rather than on how you're
> saying it. We present global style rules here so people know the vocabulary,
> but local style is also important. If code you add to a file looks
> drastically different from the existing code around it, it throws readers out
> of their rhythm when they go to read it. Avoid this.