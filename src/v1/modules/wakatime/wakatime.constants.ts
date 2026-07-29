enum UsernameStatus {
  Whitelisted = "whitelist",
  Blacklisted = "blacklist",
}

const USERNAME_STATUS = new Map<string, UsernameStatus>();

export const isWhitelisted = (username: string) =>
  USERNAME_STATUS.get(username) === UsernameStatus.Whitelisted;

export const getUsernames = () => Array.from(USERNAME_STATUS.keys());
