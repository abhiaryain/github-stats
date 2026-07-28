const ALLOWED_GISTS = new Set<string>();

export const isWhitelisted = (gist: string) => ALLOWED_GISTS.has(gist);
