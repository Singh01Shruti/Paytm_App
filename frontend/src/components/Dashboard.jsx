import { useRecoilValue } from "recoil"
import { signInAtom } from "../store/signIn"
import { signUpAtom } from "../store/signUp";
import { balanceAtom } from "../store/account";
import axios from "axios";



export default function Dashboard(){
const signInPerson = useRecoilValue(signInAtom);
const balanceAmount = useRecoilValue(balanceAtom);
console.log(balanceAmount);
    return (
        <div>
            <div>
                <div>Payments App</div>
                <div>Hello, {signInPerson.email}</div>
            </div>
            <h2>Your Balance ${balanceAmount}</h2>
            <h2>Users</h2>
            <input type = "text" placeholder="Search Users" onChange={(e) => {
            const config = {
                headers: { Authorization: `Bearer ${signInAtom.token}` }
            };
            const bodyParameters = {
               filter: e
            };
            axios.get("http://localhost:3000/api/vi/user/bulk", {
            bodyParameters,
            config
            }).then((res) => {
            <div>
            {res.users.map(user => (
            <div key = {user._id}>
                <div>{user.firstName}</div>
                <button>Send Money</button>
            </div>
            ))}
            </div>
            })
            }} ></input>
        </div>
    )
}

