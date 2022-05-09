import axios from "axios";
import { apiTokenUrls } from "./url";

export const getAccessToken = () => {
    axios.get(apiTokenUrls.getAccessToken()).then(res => { console.log(res)})
};

export const getRefreshToken = () => {
    axios.get(apiTokenUrls.getRefreshToken()).then(res => { console.log(res)})
}