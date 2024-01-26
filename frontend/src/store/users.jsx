import { atom, atomFamily, selectorFamily} from "recoil";
import { signInAtom } from "./signIn";
import axios from "axios";

export const searchUser = atom({
    key : "searchUser",
    default : ""
});

export const usersAtomFamily = atomFamily({
    key : "usersAtomFamily",
    default : selectorFamily({
    key : "getUsersSelectorFamily",
    get : function(input) {
            return async({get}) => {
            const signIn = get(signInAtom);
            const config = {
                headers: { Authorization: `Bearer ${signIn['token']}` }
            };
            const res = await axios.get(`http://localhost:3000/api/vi/user/bulk?filter=${input}`, 
            config
            )
            console.log(res.data);
            return res.data.user;
            
        }

    }})

});

