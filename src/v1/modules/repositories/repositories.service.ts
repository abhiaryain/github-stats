export const getRepositories = async (params: RepositoryParams, query: RepositoryQuery) => {
  const { data } = await octokit.rest.repos.listForUser({
    username,
  });

  return data;
};