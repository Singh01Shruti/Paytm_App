import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil"
import { signInAtom } from "../store/signIn"
import { balanceAtom } from "../store/account";
import { searchUser, usersAtomFamily, userId, userName } from "../store/users";
import { useNavigate } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';

export default function Dashboard(){
const [input, setInputUser] = useRecoilState(searchUser);
const signInPerson = useRecoilValue(signInAtom);
const balanceAmount = useRecoilValue(balanceAtom);
const [users, setUsers]  = useRecoilState(usersAtomFamily(input));
const setUserId = useSetRecoilState(userId);
const setUserName = useSetRecoilState(userName);

const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between py-4 px-4 mb-4 border">
                <div className="font-bold text-xl ">Payments App</div>
                <div className="text-base">Hello, {signInPerson.email}</div>
            </div>
            <h2 className="font-bold text-xl px-4">Your Balance  ${balanceAmount}</h2>
            <h2 className="font-bold text-xl px-4 py-4">Users</h2>
            <DebounceInput className = "border border-slate-300 w-11/12 h-58 rounded mx-4 " type = "text" placeholder="Search Users" minLength={3} debounceTimeout={500} value = {input} onChange ={(e) => setInputUser(e.target.value)} />
            {console.log(users)}
            {users.map((user) => 
                <div key = {user._id} className = "flex justify-between mt-4">
                <div className="flex px-4 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <h3 className=" font-semibold px-1 mr-28">{user.firstName}</h3>
                </div>
                <button className = "bg-black hover:bg-slate-700 text-white font-bold rounded mt-7 mr-28 py-1 px-1"
                onClick={() => {
                navigate("/transfer");
                setUserId(user._id);
                setUserName(user.firstName);
                }}>Send Money</button>
            </div>
            )}
        </div>
    )
}
//users

