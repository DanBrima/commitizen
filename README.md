# cz-bsmch

This package is an adapter for [commitizen](https://github.com/commitizen/cz-cli), and it promotes the commit standard of bsmch.

An example of a commit:
```console
? Select the type of change that you're committing: (Use arrow keys)
> Features
  Bug Fixes
  Documentation
  Styles
  Code Refactoring
  Performance Improvements
  Tests
(Move up and down to reveal more choices)
```

# Installation
In order to install this module, run the following commends in bash:
```sh
npm install -g commitizen cz-bsmch
```

After you successfully installed commitizen and cz-bsmch, run the following command (that will configure commitizen to use the 'cz-bsmch' adapter):
```sh
echo '{ "path": "cz-bsmch" }' > ~/.czrc
```

# Configuration
The package allows for an extended commit type format that included the explanation of each commit type:

```console
? Select the type of change that you're committing: (Use arrow keys)
> Features:                 A new feature
  Bug Fixes:                A bug fix
  Documentation:            Documentation only changes
  Styles:                   Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  Code Refactoring:         A code change that neither fixes a bug nor adds a feature
  Performance Improvements: A code change that improves performance
(Move up and down to reveal more choices)
```

In order to use the extended format mentioned above, run the following commend in bash:
```sh
echo '{ "path": "cz-bsmch", "showCommitTypeExplanation": true }' > ~/.czrc
```

# Usage
The package adds three commends:
  - ac: Adds the untracked files and commits via commitizen
  - acp: Adds the untracked files, commits via commitizen and pushes to the remote repo
  - log: shorthand for "git log --all --color --graph --decorate"
