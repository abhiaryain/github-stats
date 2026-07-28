import { octokit } from "@/config/octokit";

export const getLanguages = async (username: string) => {
  const data = await octokit.graphql.paginate(
    `
      query userInfo($login: String!, $cursor: String) {
        user(login: $login) {
          # fetch only owner repos & not forks
          repositories(ownerAffiliations: OWNER, isFork: false, first: 100, after: $cursor) {
            nodes {
              name
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    color
                    name
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    `,
    {
      login: username,
    },
  );
  return data;
};
