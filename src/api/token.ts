import axios from "axios";
import { apiTokenUrls } from "./url";

const axiosNoToken = axios.create({
  timeout: 100000,
});

interface SignInBodyParams {
  email: string;
  password: string;
}

interface SignInResponse {
  isSuccess: boolean;
  accessToken: string;
  refreshToken: string;
}

export const signIn = async (bodyParams: SignInBodyParams) =>
  await axiosNoToken
    .post<SignInResponse>(apiTokenUrls.signIn(), bodyParams)
    .then((res) => res.data);

interface GetAccessTokenBodyParams {
  refreshToken: string;
}

export const getAccessToken = async (bodyParams: GetAccessTokenBodyParams) => {
  await axiosNoToken
    .post<string>(apiTokenUrls.getAccessToken(), bodyParams)
    .then((res) => {
      console.log(res);
    });
};