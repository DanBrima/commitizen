#!/usr/bin/env node

const { spawnSync } = require("child_process");
const chalk = require("chalk");

console.log(chalk.bold.blue.bgWhite("Made by Dan Brima\n"));

spawnSync("git add -A && cz", { shell: true, stdio: "inherit" });
