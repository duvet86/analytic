import { encode } from "base-64";

import { getAsync } from "./http";
import { getToken } from "./sessionStorageApi";

export const getTokenAsync = (
  userName: string,
  password: string
): Promise<string> =>
  getAsync("api/token", {
    Authorization: `Basic ${encode(userName + ":" + password)}`
  });

export const getTokenFromSession = () => {
  // attempt to grab the token from localstorage
  const jwtToken = getToken();

  // if it exists
  if (jwtToken != null) {
    // compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const timeToLive = process.env.TIME_TO_LIVE;
    if (timeToLive == null) {
      throw new Error("process.env.TIME_TO_LIVE cannot be null.");
    }
    const expiry = jwtToken.createdAt + parseInt(timeToLive, 10);

    // if the token has expired return false
    if (jwtToken.createdAt > expiry) {
      return null;
    }

    return jwtToken;
  }

  return null;
};
