import axios from "axios";
import { apiTokenUrls } from "./url";


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
  await axios
    .post<SignInResponse>(apiTokenUrls.signIn(), bodyParams)
    .then((res) => res.data);

interface GetAccessTokenBodyParams {
    refreshToken: string;
}

export const getAccessToken = async (bodyParams: GetAccessTokenBodyParams) => {
    await axios.post<string>(apiTokenUrls.getAccessToken(), bodyParams).then(res => { console.log(res)})
}