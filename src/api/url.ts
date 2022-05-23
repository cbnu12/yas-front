const BASE_URL = "http://211.208.125.180:8000/api";

export const apiTokenUrls = {
    getToken: () => `${BASE_URL}/signIn`,
    getAccessToken: () => `${BASE_URL}/accessToken`,
}

export const apiUserUrls = {
    signIn: () => "",
    signUp: () => "",
    checkNickname: () => "",
    confirmEmail: () => "",
    findPassword: () => "",
}