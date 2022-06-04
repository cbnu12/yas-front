import axios from "axios";
import { apiTokenUrls } from "./url";

interface GetTokenBodyParams {
    id: string;
    email: string;
    password: string;
}

interface GetTokenResponse {
    isSuccess: boolean;
    accessToken: string;
    refreshToken: string;
}

export const getToken = async (bodyParams: GetTokenBodyParams) => {
    await axios.post<GetTokenResponse>(apiTokenUrls.getToken(), bodyParams).then(res => { console.log(res)})
}

interface GetAccessTokenBodyParams {
    refreshToken: string;
}

export const getAccessToken = async (bodyParams: GetAccessTokenBodyParams) => {
    await axios.post<string>(apiTokenUrls.getAccessToken(), bodyParams).then(res => { console.log(res)})
}