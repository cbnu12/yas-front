const BASE_URL = "http://211.208.125.180:8000/api";

export const apiTokenUrls = {
  signIn: () => `${BASE_URL}/signIn`,
  getAccessToken: () => `${BASE_URL}/accessToken`,
};

export const apiUserUrls = {
  signUp: () => `${BASE_URL}/`,
  checkNickname: () => `${BASE_URL}/`,
  confirmEmail: () => `${BASE_URL}/`,
  findPassword: () => `${BASE_URL}/`,
};