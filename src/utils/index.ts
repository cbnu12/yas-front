export const hasSpecialCharacter = (email: string): boolean => {
    const specialCharacterRegex = /[.]{2}|[(){}[\]]+/g;

    return specialCharacterRegex.test(email);
}

export const isValidateEmail = (email: string): boolean => {
    const emailRegex = /^([-_.]?[0-9a-zA-Z])+@([-_.]?[0-9a-zA-Z])+\.([-_.]?[0-9a-zA-Z])/g;

    return emailRegex.test(email);
}