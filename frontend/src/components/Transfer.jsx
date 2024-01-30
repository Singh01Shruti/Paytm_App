import { useRecoilValue } from "recoil"
import { searchUser, usersAtomFamily, userId , userName } from "../store/users"
import { useState } from "react";
import axios from "axios";
import { signInAtom } from "../store/signIn";

export default function Transfer(){
const input = useRecoilValue(searchUser);
const user = useRecoilValue(usersAtomFamily(input));
const signIn = useRecoilValue(signInAtom)
const id = useRecoilValue(userId);
const name = useRecoilValue(userName);
const [amount, setAmount] = useState(0);

    return (
            <div className="flex justify-center mt-40">
            <div className="border border-black w-80 h-58 p-8 rounded-lg py-10 px-4">
            <h2 className="text-center text-black font-bold text-3xl pb-5">Send Money</h2>
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <h3 className="font-bold text-base pl-1">{name}</h3>
            </div>
            <h4 className="font-semibold text-base">Amount(in Rs)</h4>
            <input className = "border border-slate-400 w-72 h-58 rounded mt-2" type="Number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <button className = "bg-lime-600 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded mt-5 w-72"
                onClick={async () => {
                const config = {
                    headers: { Authorization: `Bearer ${signIn['token']}` }
                };

               
                const res = await axios.post("http://localhost:3000/api/vi/account/transfer",{
                    to : id,
                    amount: amount
                }, config);
                alert("Transferred Successfully");
            }}>Initiate Transfer</button>
            </div>
        </div>
    )
}


