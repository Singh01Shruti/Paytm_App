import {atom} from "recoil"

export const signInAtom = atom({
    key: "signInAtom",
    default : {
        email: "",
        password: "",
        token:""
    },
});



