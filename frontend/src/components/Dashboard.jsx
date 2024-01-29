import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil"
import { signInAtom } from "../store/signIn"
import { balanceAtom } from "../store/account";
import { searchUser, usersAtomFamily, userId } from "../store/users";
import { useNavigate } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';

export default function Dashboard(){
const [input, setInputUser] = useRecoilState(searchUser);
const signInPerson = useRecoilValue(signInAtom);
const balanceAmount = useRecoilValue(balanceAtom);
const [users, setUsers]  = useRecoilState(usersAtomFamily(input));
const setUserId = useSetRecoilState(userId);

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
            {users.map((user) => 
                <div key = {user._id} className = "flex justify-between mt-4">
                <h3 className="py-2 px-4 mt-4 mr-28">{user.firstName}</h3>
                <button className = "bg-black hover:bg-slate-700 text-white font-bold rounded mt-7 mr-28 py-1 px-1"
                onClick={() => {
                navigate("/transfer");
                setUserId(user._id);
                }}>Send Money</button>
            </div>
            )}
        </div>
    )
}

