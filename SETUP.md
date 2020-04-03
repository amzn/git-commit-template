## Setup project:

For setting up of the project you only need `npm` and `git`.

Once you have forked and cloned the repository move to the package directory and
run `npm` install:

```bash
cd git-commit-template
npm install
```

## Testing the change

This git commit tempalte uses itself to set the commit tmeplate using husky. So
once you are done with your changes in the template just say `git add .` and
`git commit`, you should be showed the message you changed.

If things are not to your satishfaction then just reject the commit by deleting
all the message and change the template.

## Releasing the changes:

We use [github actions](https://github.com/features/actions) to automate the
release process. Our current hook is on release create, this means when the
created tag is released.

Steps:

1. Make your changes(don't forget to up the package version [patch|minor|major]
   and raise a pull request. You can use
   `npm --no-git-tag-version version [major|minor|patch]` command to
   automatically update these versions.
2. Once the changes are merged if you have write permissions on the
   [repository](https://github.com/amzn/git-commit-template) you can create a
   tag ad push it.

   ```bash
   # create tag
   git tag v<<package.version>>

   # push tags
   git push --tags
   ```

3. After pushing the tags head over to releases section and go to tags tab. For
   the tag that you created if you click on ellipsis you will see an options to
   create a release.
4. Provide proper message and create a release. After this our github actions
   will take over and publish the master branch to npm repository.
