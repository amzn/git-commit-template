# git-commit-template

Sets commit template for your git projects. This is a husky plugin which should
be used on `prepare-commit-msg` hook exposed by git.

It exposes a cli command with name `git-commit-template` which you can use in
your husky configuration. For example:

```javascript
// .huskyrc.js
module.exports = {
  hooks: {
    "prepare-commit-msg": "git-commit-template",
  },
};
```

## `git-commit-template` command

This command takes an optional parameter of your commit message file name. If
provided, then it will read the file provided by you, otherwise uses its default
configuration file. Read [`.commit-msg`](.commit-msg) file to see the default configuration
added by us.

Sample for providing file name:

```javascript
// .huskyrc.js
module.exports = {
  hooks: {
    "prepare-commit-msg": "git-commit-template .my-custom-git-msg-file",
  },
};
```

> Note: This hooks provides you default commit message only if you haven't
> provided any yet. This means that this plugin will not add message if you are
> amending your commit(`git commit --amend`) or using interactive rebase
> (`git rebase -i HEAD~3`).

## License

This library is licensed under the Apache 2.0 License.
