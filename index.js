const engine = require("./engine");
const conventionalCommitTypes = require("conventional-commit-types");
const configLoader = require("commitizen").configLoader;

const config = configLoader.load() || {};
const options = {
  types: config.types || conventionalCommitTypes.types,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || "entire project",
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  maxHeaderWidth: 150,
  showCommitTypeExplanation: config.showCommitTypeExplanation ?? false,
};

module.exports = engine(options);
