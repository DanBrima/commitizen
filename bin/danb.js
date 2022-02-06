#!/usr/bin/env node

const chalkAnimation = require("chalk-animation");
const { spawnSync } = require("child_process");

const danBrimaRainbow = chalkAnimation.rainbow("Made by Dan Brima\n");

const main = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  danBrimaRainbow.stop();

  spawnSync("git add -A && cz", { shell: true, stdio: "inherit" });
};

main();
