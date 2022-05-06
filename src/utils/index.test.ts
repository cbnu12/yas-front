import { hasSpecialCharacter, isValidateEmail } from ".";

describe("특수문자 검증 함수 테스트", () => {
    test.each([
        "..",
        "(",
        ")",
        "[",
        "]",
        "{",
        "}"
    ])("%s는 특수문자 입니다.", (email => {
        expect(hasSpecialCharacter(email)).toBeTruthy();
    }));
    
    test.each([
        "abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "@",
        ".",
        "_",
        "-",
    ])("%s는 특수문자가 아닙니다.", (email => {
        expect(hasSpecialCharacter(email)).toBeFalsy();
    }));
})

describe("이메일 검증 함수 테스트", () => {
    test.each([
        "abc123@naver.com",
        "abc_123@naver.com",
        "abc.123@naver.com",
        "abc-123@naver.com",
        "abc123@abc.co.kr"
    ])("%s는 이메일 양식입니다.", (email => {
        expect(isValidateEmail(email)).toBeTruthy();
    }));
    
    test.each([
        "abc123",
        "abc123@",
        "abc123@abc",
        "abc123@abc.",
    ])("%s는 이메일 양식이 아닙니다.", (email => {
        expect(isValidateEmail(email)).toBeFalsy();
    }));
})