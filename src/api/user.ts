import axiosInstance from ".";
import { apiUserUrls } from "./url";

interface SignInBodyParams {
    email: string;
    password: string;
}

export const signIn = ({ email, password }: SignInBodyParams) => {
    axiosInstance.post(apiUserUrls.signIn());
}

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
    axiosInstance.post(apiUserUrls.signUp());
}

interface CheckNicknameBodyParams {
    nickname: string;
}

export const checkNickname = ({ nickname }: CheckNicknameBodyParams) => {
    axiosInstance.get(apiUserUrls.checkNickname());
}

interface ConfirmEmailBodyParams {
    code: string;
}

export const confirmEmail = ({ code }: ConfirmEmailBodyParams) => {
    axiosInstance.get(apiUserUrls.confirmEmail());
}

interface FindPasswordBodyParams {
    email: string;
}

export const findPassword = ({ email }: FindPasswordBodyParams) => {
    axiosInstance.post(apiUserUrls.findPassword());
}   