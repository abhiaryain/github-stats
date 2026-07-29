import { octokit } from "@/config/octokit";

export const getOverview = async (params: OverviewParams, query: OverviewQuery) => {
  const { data } = await octokit.rest.users.getByUsername({
    username,
  });

  return data;
};
