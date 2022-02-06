#!/usr/bin/env node

const chalkAnimation = require("chalk-animation");
const { spawnSync } = require("child_process");
// const a = chalkAnimation.rainbow("Made by Dan Brima\n");
// setTimeout(() => a.stop(), 2000);
spawnSync("git add -A && cz", { shell: true, stdio: "inherit" });

// console.log("error", child.error);
// console.log("stdout ", child.stdout.toString());
// console.log("stderr ", child.stderr.toString());
