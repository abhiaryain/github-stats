export const getWakatime = async (params: WakatimeParams, query: WakatimeQuery) => {
  const { data } = await octokit.rest.users.getByUsername({
    username,
  });

  return data;
};