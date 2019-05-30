#!/usr/bin/env node

/**
 * Script to set our template as commit message template. This depends on husky
 * parameters $HUSKY_GIT_PARAMS which gives me the git commit message template
 * being used for commit message. By default this is ./git/COMMIT_MSG file
 */

/**
 * Here we are using only the first parameter of $HUSKY_GIT_PARAMS variable i.e.
 * the commit message file. We will update that file with our template file
 * content
 */

/**
 * Usage examples:
 * Add this script in your hooks section of husky. We require 1.x version of
 * husky so this will not work for 0.x version of husky.
 *
 * Example:
 * ```javascript
 * // .huskyrc.js
 * module.exports = {
 *   hooks: {
 *     "prepare-commit-msg": "git-commit-template .gitmessage",
 *   },
 * };
 *
 * ```
 */

const fs = require("fs");
const path = require("path");
const COMMIT_MSG_FILE_NAME = ".commit-msg";

// Default template file but will be overridden with input argument if provided
let templateFile = path.join(__dirname, `../${COMMIT_MSG_FILE_NAME}`);

/**
 * If we have 3rd argument i.e. file name then use that as template
 * e.g.
 * ./bin/setup-template.js .gitmessage
 * // Then  argv will look like this:
 * argv = [ "node", "./bin/setup-template.js", ".gitmessage" ]
 */
if (process.argv[2]) {
  templateFile = path.join(process.cwd(), process.argv[2]);
}

/**
 * Sample git params are [ "./git/COMMIT_MSG", "commit", "HEAD" ] in case of
 * --amend flag
 */
const gitParams = process.env["HUSKY_GIT_PARAMS"].split(" ");

/**
 * We are running our logic only in case of empty commit message. In other
 * scenarios commit message would already be present and no longer needs our
 * template thus skip it.
 */
if (gitParams.length === 1) {
  const commitMsgFile = gitParams[0];

  let gitFileContent = fs.readFileSync(commitMsgFile, { encoding: "utf8" });
  const templateFileContent = fs.readFileSync(templateFile, {
    encoding: "utf8",
  });

  gitFileContent = templateFileContent + gitFileContent;

  fs.writeFileSync(commitMsgFile, gitFileContent, { encoding: "utf8" });
}
