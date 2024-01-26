import { useRecoilValue, useRecoilState } from "recoil"
import { signInAtom } from "../store/signIn"
import { balanceAtom } from "../store/account";
import { searchUser, usersAtomFamily } from "../store/users";
import { useNavigate } from "react-router-dom";


export default function Dashboard(){
const [input, setInputUser] = useRecoilState(searchUser);
const signInPerson = useRecoilValue(signInAtom);
const balanceAmount = useRecoilValue(balanceAtom);
const [users, setUsers]  = useRecoilState(usersAtomFamily(input));
const navigate = useNavigate();


    return (
        <div>
            <div>
                <div>Payments App</div>
                <div>Hello, {signInPerson.email}</div>
            </div>
            <h2>Your Balance ${balanceAmount}</h2>
            <h2>Users</h2>
            <input type = "text" placeholder="Search Users" value = {input} onChange ={(e) => setInputUser(e.target.value)} ></input>
            {users.map((user) => 
            <div key = {user._id} style={{display: "flex", justifyContent: "space-between"}}>
                <h3>{user.firstName}</h3>
                <button onClick={() => navigate("/transfer")}>Send Money</button>
            </div>
            )}
        </div>
    )
}

