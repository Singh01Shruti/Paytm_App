import {atom, selector, useRecoilValue} from "recoil"
import { signInAtom } from "./signIn";
import axios from "axios";

export const balanceAtom = atom({
    key : "accountAtom",
    default : selector({
        key : "getBalance",
        get : async() => {
            const signIn = useRecoilValue(signInAtom);
            
            const config = {
                headers: { Authorization: `Bearer ${signIn['token']}` }
            };
            
            axios.get("http://localhost:3000/api/vi/account/balance", {
            config
            }).then((res) => {
                console.log(res);
                return res.balance;
            })
        }
    })
});

 