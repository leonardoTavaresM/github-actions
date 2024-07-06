import { execSync } from "child_process";

console.log("[DEPLOY_PREVIEW]: START");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf8" }).toString();
console.log(output);
const outputLines = output.split("\n");
const DEPLOY_URL = outputLines[outputLines.length - 1];
console.log("[DEPLOY_PREVIEW]: END");
console.log("You can see the deploy preview here:", DEPLOY_URL);

console.log("[GITHUB_COMMENT]: START");

fetch(
  `https://api.github.com/repos/${GITHUB_REPOSITORY}/issues/${GITHUB_PR_NUMBER}/comments`,
  {
    headers: defaultHeaders,
    method: "POST",
    body: JSON.stringify({
      body: GH_COMMENT,
    }),
  }
)
  .then((response) => {
    if (response.ok) return response.json();
    throw new Error(response.statusText);
  })
  .catch((err) => {
    console.log("[COMMENT_ON_GITHUB: ERROR]");
    console.error(err);
  })
  .finally(() => {
    console.log("[COMMENT_ON_GITHUB: END]");
  });

console.log("[GITHUB_COMMENT]: END");
