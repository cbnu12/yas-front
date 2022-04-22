import { AxiosPromise, AxiosError } from 'axios';

interface ErrorCode {
    content?: string;
}

export function showErrorMessage(error: AxiosError<ErrorCode>) {
  if (error.response?.data?.content) {
    alert(error.response.data.content);
  } else {
    alert("예기치 못한 에러가 발생하였습니다.");
  }
}

export async function getAxiosResponse<T = any>(promise: AxiosPromise<T>) {
  try {
    const result = await promise;
    return result.data;
  } catch (error) {
    throw error;        
  }
}