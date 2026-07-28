const EXCLUDED_REPOSITORIES = ["google"];

export const isExcluded = (repository: string) => {
  return EXCLUDED_REPOSITORIES.includes(repository);
};
