export const EXCLUDED_REPOSITORIES = new Set<string>();

export const isExcluded = (username, repository) => {
  return EXCLUDED_REPOSITORIES.has(`${username}/${repository}`);
};
