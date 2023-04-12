import { Octokit } from "octokit";
import { TOKEN } from "../constants/token";
import { IFetchIssuesParams } from "../interfaces/IFetchIssuesParams";

const octokit = new Octokit({
	auth: TOKEN
});

export const fetchIssues = async ({ owner, repo, signal }: IFetchIssuesParams) => {
	try {
		return await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
			headers: {
				'X-GitHub-Api-Version': '2022-11-28'
			},
			request: {
				signal
			},
		})
	} catch (error) {
		console.log(error);
		return error;
	}
}