import { generateGithubAppJwtToken } from "../auth/github";

const githubHeader = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};


export { githubHeader };
