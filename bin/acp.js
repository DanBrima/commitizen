#!/usr/bin/env node

const { spawnSync } = require("child_process");
const chalk = require("chalk");

console.log(chalk.bold.blue.bgWhite("Made by Dan Brima\n"));

spawnSync("git add -A && cz && git push", { shell: true, stdio: "inherit" });
