# TDA R&D Conventions

- [1. Naming](#1-naming)
- [2. Code Styles](#2-code-styles)
- [3. Editor Config](#3-editor-config)
- [4. Git Ignore](#4-git-ignore)
- [5. Package Details](#5-package-details)
- [6. Code Linting](#6-code-linting)

----

## 1. Naming
* Names should be meaningful
* Avoid slang (eg. `product.remove()` instead of `product.diePlease()` )
* Avoid abbreviations (eg. `user = User.where(...` instead of `u = User.where(...`)
* For boolean data use **is** or **has** (eg. `is_valid`)

For variables / constants use **nouns** or short-phrase with **adjectives** that will explain what is stored in that variable.

For functions / methods / commands use **verbs** or short-phrase with **adjectives** that will explain what this method supposed to do (eg. `send_data()`).

For class names use **nouns** or short-phrase with **nouns** that will reflect the class (eg. `ReportService`)

## 2. Code Styles
* [JavaScript](./js/README.md)
  * [React](./js/react/README.md)
  * [MobX](./js/mobx/README.md)
  * [Node JS](./js/node/README.md)
* [Ruby](./ruby/README.md)
* [SCSS](./scss/README.md)

## 3. Editor Config
We use EditorConfig to maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.

Each project should contain `.editorconfig` at the root folder including:
```
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = space
insert_final_newline = false
max_line_length = 120
tab_width = 4
trim_trailing_whitespace = true

[{*.rb, *.rake}]
indent_size = 2
tab_width = 2


##
# JetBrains Specific
ij_wrap_on_typing = false
```
Read more about [Editor Config](https://editorconfig.org/).

## 4. Git Ignore
All of the projects should contain `.gitignore` at the root folder including:

```
##
# Configurations
/node_modules
/.idea
/.vscode
.env


##
# Compiled source
*.com
*.class
*.dll
*.exe
*.o
*.so
*.pyc
*.crx


##
# Packages
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip


##
# Logs and databases
*.log
yarn-debug.log*
yarn-error.log*


##
# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
tmp/
```

## 5. Package Details
All of the projects Front-End / Backend / Serverless should contain `package.json` at the root folder including:

```json
{
    "name": "@tda-soft/{ project-name }",
    "version": "1.0.0",
    "description": "TDA Soft - { Project description }",
    "repository": {
        "type": "git",
        "url": "git://github.com/tda-soft/{ project }.git"
    },
    "publishConfig": {
        "registry": "https://npm.pkg.github.com/"
    },
    "author": "TDA Soft Ltd.",
    "license": "ISC"
}

```

## 6. Code Linting
tbd...