export const isExpired = (token: any) => {
    return true;
}

export const setToken = (token: any) => {
    localStorage.setItem('accessToken', token.accessToken);
}

export const getToken = () => {
    const token = localStorage.getItem('accessToken');
    return `Bearer ${token}`;
}