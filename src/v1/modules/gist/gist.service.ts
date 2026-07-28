import { octokit } from "@/config/octokit";

const GIST_QUERY = `
query gistInfo($gistName: String!) {
  viewer {
    gist(name: $gistName) {
      description
      owner {
        login
      }
      stargazerCount
      forks {
        totalCount
      }
      files {
        name
        language {
          name
        }
        size
      }
    }
  }
}
`;

export const getGist = async (gist_id: string) => {
  const { data } = await octokit.graphql(GIST_QUERY, {
    gistName: gist_id,
  });

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }
  const gist = data.data.viewer.gist;

  if (!gist) {
    throw new Error("Gist not found");
  }

  return {
    // languages:
    stars: gist.stargazerCount,
    forks: gist.forks.totalCount,
  };

  return data;
};
