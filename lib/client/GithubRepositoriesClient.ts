import axios from "axios";
import ListRepositoriesUserResponse from "../dto/ListRepositoriesUserResponse";
import { githubHeader } from "../api/header";

const callListRepositoriesForUser = async (): Promise<ListRepositoriesUserResponse[]> => {
    return await axios.get<ListRepositoriesUserResponse[]>(
        `${process.env.API_GITHUB_URL}/users/${process.env.GITHUB_USERNAME}/repos`,
        {
            params: {
                type: 'owner',
                sort: 'pushed',
                direction: 'desc',
                per_page: 24,
                page: 0
            },
            headers: githubHeader
        }
    ).then(res => res.data);
}

const GithubRepositoriesClient = {
    callListRepositoriesForUser
}
export default GithubRepositoriesClient;