import {atom, selector} from "recoil"
import { signInAtom } from "./signIn";
import axios from "axios";

export const balanceAtom = atom({
    key : "accountAtom",
    default : selector({
        key : "getBalance",
        get : async({get}) => {
            const signIn = get(signInAtom);
            const config = {
                headers: { Authorization: `Bearer ${signIn['token']}` }
            };
            const res = await axios.get("http://localhost:3000/api/vi/account/balance", 
            config
            )
                console.log(res.data.balance);
                return res.data.balance;
            
        }
    })
});



 