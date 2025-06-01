# Git Practices

This outlines the standard Git practices for consistent and collaborative development across all TDA projects. 
It covers branching strategy, commit message format, pull request process, code review guidelines, and gitignore usage.

## Table of Contents

1. [Branching Strategy](#branching-strategy)
1. [Git Ignore](#git-ignore)


---


## Branching Strategy

We follow a structured branching model to maintain stability and enable feature development:

#### Main Branches

* `master`: Stable production-ready code.
* `staging`: Integration branch for features before release.

#### Supporting Branches

* `feature/<feature-name>`: New feature base branch.
* `<developer-name>/<feature-name>`: Development branch.
* `<developer-name>/hotfix`: Critical fixes for production - non dependant branch.

All branches should be based off `master`, except epic feature based from the central feature branch.

## Git Ignore
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