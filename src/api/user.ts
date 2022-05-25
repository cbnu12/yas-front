import axiosInstance from ".";
import { apiUserUrls } from "./url";

interface SignUpBodyParams {
	email: string;
	nickname: string;
	password: string;
	birthYear: number;
	optionBirthYear: boolean;
	career: number;
	optionCareer: boolean;
	jobGroup: string[];
}

export const signUp = (bodyParams: SignUpBodyParams) => {
    axiosInstance.post(apiUserUrls.signUp(), bodyParams)
        .then(res => res.data);
}

interface CheckNicknameBodyParams {
    nickname: string;
}

export const checkNickname = ({ nickname }: CheckNicknameBodyParams) => {
    axiosInstance.get(apiUserUrls.checkNickname())
        .then(res => res.data);
}

interface ConfirmEmailBodyParams {
    code: string;
}

export const confirmEmail = ({ code }: ConfirmEmailBodyParams) => {
    axiosInstance.get(apiUserUrls.confirmEmail())
        .then(res => res.data);
}

interface FindPasswordBodyParams {
    email: string;
}

export const findPassword = ({ email }: FindPasswordBodyParams) => {
    axiosInstance.post(apiUserUrls.findPassword(), email)
        .then(res => res.data);
}   