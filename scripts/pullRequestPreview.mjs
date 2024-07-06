import { execSync } from "child_process";

console.log("[DEPLOY_PREVIEW]: START");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf8" }).toString();
console.log(output);
const outputLines = output.split("\n");
const DEPLOY_URL = outputLines[outputLines.length - 1];
console.log("[DEPLOY_PREVIEW]: END");
console.log("You can see the deploy preview here:", DEPLOY_URL);

// console.log("[GITHUB_COMMENT]: START");
// console.log("[GITHUB_COMMENT]: END");
