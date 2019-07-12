interface IToken {
  createdAt: number;
  token: string;
}

const getTokenKey = () => {
  const tokenKey = process.env.TOKEN_KEY;
  if (tokenKey == null) {
    throw new Error("process.env.TOKEN_KEY cannot be null.");
  }
  return tokenKey;
};

export const storeToken = (token: string) => {
  sessionStorage.setItem(
    getTokenKey(),
    JSON.stringify({
      createdAt: Math.floor(Date.now() / 1000),
      token
    })
  );
};

export const clearToken = () => sessionStorage.removeItem(getTokenKey());

export const getToken = (): IToken | null => {
  const storageTokenKey = sessionStorage.getItem(getTokenKey());
  if (!storageTokenKey) {
    return null;
  }

  return JSON.parse(storageTokenKey);
};
