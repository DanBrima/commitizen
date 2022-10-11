const chalk = require("chalk");
const longest = require("longest");

const headerLength = (answers) =>
  answers.type.length + 2 + (answers.scope ? answers.scope.length + 2 : 0);

const maxSummaryLength = (options, answers) =>
  options.maxHeaderWidth - headerLength(answers);

const filterSubject = (subject) => {
  subject = subject.trim();
  if (subject.charAt(0).toLowerCase() !== subject.charAt(0)) {
    subject =
      subject.charAt(0).toLowerCase() + subject.slice(1, subject.length);
  }

  while (subject.endsWith(".")) {
    subject = subject.slice(0, subject.length - 1);
  }

  return subject;
};

module.exports = (options) => {
  const { types, showCommitTypeExplanation } = options;
  const length =
    longest(Object.values(types).map((type) => type.title)).length + 1;

  const choices = Object.entries(types).map(([typeName, type]) => {
    return {
      name: !showCommitTypeExplanation
        ? type.title
        : (type.title + ":").padEnd(length) + " " + type.description,
      value: typeName,
    };
  });

  return {
    prompter(cz, commit) {
      cz.prompt([
        {
          type: "list",
          name: "type",
          message: "Select the type of change that you're committing:",
          choices: choices,
          default: options.defaultType,
        },
        {
          type: "input",
          name: "scope",
          message:
            "What is the scope of this change (e.g. component or file name): ",
          default: options.defaultScope,
          filter: (value) => value.trim(),
        },
        {
          type: "input",
          name: "subject",
          message: (answers) =>
            "Write a short, imperative tense description of the change (max " +
            maxSummaryLength(options, answers) +
            " chars):\n",
          default: options.defaultSubject,
          validate(subject, answers) {
            const filteredSubject = filterSubject(subject);

            if (filteredSubject.length === 0) {
              return "subject is required";
            }

            return filteredSubject.length <= maxSummaryLength(options, answers)
              ? true
              : "Subject length must be less than or equal to " +
                  maxSummaryLength(options, answers) +
                  " characters. Current length is " +
                  filteredSubject.length +
                  " characters.";
          },
          transformer: (subject, answers) => {
            const filteredSubject = filterSubject(subject);

            const color =
              filteredSubject.length <= maxSummaryLength(options, answers)
                ? chalk.green
                : chalk.red;
            return color("(" + filteredSubject.length + ") " + subject);
          },
          filter: filterSubject,
        },
      ]).then(({ scope, type, subject }) => {
        const formattedScope = "(" + scope + ")";
        const message = type + formattedScope + ": " + subject + "\n";

        commit(message);
      });
    },
  };
};
