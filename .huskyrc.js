module.exports = {
  hooks: {
    "pre-commit": "lint-staged",
    "prepare-commit-msg": "./bin/git-commit-template.js",
  },
};
