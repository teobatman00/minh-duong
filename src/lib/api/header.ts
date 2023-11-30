const githubHeader = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.GITHUB_TEOBATMAN00_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28'
}

export {
    githubHeader
}