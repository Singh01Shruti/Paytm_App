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
            <div>
                <div>Payments App</div>
                <div>Hello, {signInPerson.email}</div>
            </div>
            <h2>Your Balance ${balanceAmount}</h2>
            <h2>Users</h2>
            <DebounceInput type = "text" placeholder="Search Users" minLength={3} debounceTimeout={500} value = {input} onChange ={(e) => setInputUser(e.target.value)} />
            {users.map((user) => 
            <div key = {user._id} style={{display: "flex", justifyContent: "space-between"}}>
                <h3>{user.firstName}</h3>
                <button onClick={() => {
                navigate("/transfer");
                setUserId(user._id);
                }}>Send Money</button>
            </div>
            )}
        </div>
    )
}

