# TDA R&D Conventions

- [1. CodeStyles](#1-codestyles)
- [2. EditorConfig](#2-editorconfig)
- [3. Git Ignore](#3-git-ignore)
- [4. Package Details](#4-package-details)
- [5. Code Linting](#5-code-linting)

----

## 1. CodeStyles
* [JavaScript](./js/README.md)
  * [React](./js/react/README.md)
  * [Node JS](./js/node/README.md)
* [Ruby](./ruby/README.md)
* [SCSS](./scss/README.md)

## 2. EditorConfig
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


##
# JetBrains Specific
ij_visual_guides = 100
ij_wrap_on_typing = false
```
Read more about [EditorConfig](https://editorconfig.org/).

## 3. Git Ignore
All of the projects should contain `.gitignore` at the root folder including:

```
### Configurations ###
/node_modules
/.idea
.yarn-integrity
.env

### Compiled source ###
*.com
*.class
*.dll
*.exe
*.o
*.so
*.pyc
*.crx

### Packages ###
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

### Logs and databases ###
*.log
yarn-debug.log*
yarn-error.log*

### OS generated files ###
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
tmp/
```

## 4. Package Details
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

## 5. Code Linting
tbd...