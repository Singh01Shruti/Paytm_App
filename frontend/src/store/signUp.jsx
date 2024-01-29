import {atom} from "recoil"

export const signUpAtom = atom({
    key: "signUpAtom",
    default : {
        firstName : "",
        lastName: "",
        email: "",
        password: ""
    },
});