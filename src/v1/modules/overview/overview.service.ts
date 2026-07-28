import { octokit } from "@/config/octokit";

export const getOverview = async (username: string) => {
  const { data } = await octokit.rest.users.getByUsername({
    username,
  });

  return data;
};
