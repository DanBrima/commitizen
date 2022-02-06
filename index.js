var engine = require("./engine");
var conventionalCommitTypes = require("conventional-commit-types");
var configLoader = require("commitizen").configLoader;

var config = configLoader.load() || {};
var options = {
  types: config.types || conventionalCommitTypes.types,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || "entire project",
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  maxHeaderWidth: 150,
};

module.exports = engine(options);
