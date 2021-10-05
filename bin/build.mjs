#!/usr/bin/env node
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const main = () => {
  if (process.argv.length <= 2) {
    return;
  }
  const packageListDir = path.join(__dirname, "../package-list.json");
  const cfgStr = fs.readFileSync(packageListDir, { encoding: "utf8" });
  const cfg = JSON.parse(cfgStr);
  const [, , ...cmds] = process.argv;
  for (let dir of cfg.packages) {
    spawnSync("pnpm", ["run", ...cmds], {
      cwd: dir,
      stdio: [process.stdin, process.stdout, process.stderr],
    });
  }
};

main();
