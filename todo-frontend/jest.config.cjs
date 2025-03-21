/* eslint-disable no-undef */
module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    moduleDirectories: ["node_modules", "src"],
  };