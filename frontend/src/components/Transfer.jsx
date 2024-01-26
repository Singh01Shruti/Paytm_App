import { useRecoilValue } from "recoil"
import { searchUser, usersAtomFamily } from "../store/users"
import { useState } from "react";
import axios from "axios";
import { signInAtom } from "../store/signIn";

export default function Transfer(){
const input = useRecoilValue(searchUser);
const user = useRecoilValue(usersAtomFamily(input));
const signIn = useRecoilValue(signInAtom)
const [amount, setAmount] = useState(0);

    return (
        <div>
            <h2>Send Money</h2>
            <h3>{user.firstName}</h3>
            <h4>Amount(in Rs)</h4>
            <input type="Number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <button onClick={async () => {
                
                const config = {
                    headers: { Authorization: `Bearer ${signIn['token']}` }
                };
                const res = await axios.post("http://localhost:3000/api/vi/account/transfer", config ,{
                    to : user._id,
                    amount: amount
                })
                console.log(res);
            }}>Initiate Transfer</button>
        </div>
    )
}