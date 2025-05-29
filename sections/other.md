## Package Details
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

## Editor Config
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