import { useCallback } from "react";

interface IusePasswordGenerator {
    isNumberAllowed: boolean,
    isSymbolAllowed: boolean,
    length: number
}
const usePasswordGenerator = ({ isNumberAllowed, isSymbolAllowed, length }: IusePasswordGenerator) => {
    const generetPassword = useCallback(() => {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let num = "0123456789";
        let sym = "!@#$%^&*()_+{}:<>?"
        let pass = "";
        for (let i = 0; i < length; i++) {
            if (isNumberAllowed) str += num;
            if (isSymbolAllowed) str += sym;
            let charIdx = Math.floor(Math.random() * str.length);
            pass += str[charIdx];
        }
        return pass;
    }, [isNumberAllowed, isSymbolAllowed, length])
    return generetPassword;
}

export default usePasswordGenerator;