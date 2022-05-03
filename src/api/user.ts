// import axios from 'axios';

interface SignInBodyParams {
    email: string;
    password: string;
}

export const signIn = ({ email, password }: SignInBodyParams) => {
    console.log(email, password);
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
    console.log(bodyParams);
}

interface CheckNicknameBodyParams {
    nickname: string;
}

export const checkNickname = ({ nickname }: CheckNicknameBodyParams) => {
    console.log(nickname);
}

interface ConfirmEmailBodyParams {
    code: string;
}

export const confirmEmail = ({ code }: ConfirmEmailBodyParams) => {
    console.log(code);
}

interface FindPasswordBodyParams {
    email: string;
}

export const findPassword = ({ email }: FindPasswordBodyParams) => {
    console.log(email);
}   