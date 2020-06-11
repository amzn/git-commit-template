// Since this module is set to use es6 thus module is giving error. Thus
// defining module as global before hand
module.exports = {
  "*.{js,json,md}": [
    "npm run lint:files",
    // Assuming prettier doesn't add any linting issues
    "prettier --write",
    // Checking if anything broke because of prettier
    "npm run lint:files",
  ],
};
