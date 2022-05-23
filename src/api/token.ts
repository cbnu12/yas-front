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

export const getToken = (bodyParams: GetTokenBodyParams) => {
    axios.post<GetTokenResponse>(apiTokenUrls.getToken(), bodyParams).then(res => { console.log(res)})
}

interface GetAccessTokenBodyParams {
    refreshToken: string;
}

export const getAccessToken = (bodyParams: GetAccessTokenBodyParams) => {
    axios.post<string>(apiTokenUrls.getAccessToken(), bodyParams).then(res => { console.log(res)})
}