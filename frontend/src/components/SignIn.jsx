import { useRecoilState } from "recoil"
import { signInAtom } from "../store/signIn"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SignIn(){
const[signIn, setSignInValue] = useRecoilState(signInAtom);
const navigate = useNavigate();
    return (
        <div>
            <h1>Sign In</h1>
            <h4>Enter your credentials to access your account</h4>
            <h4>Email</h4>
            <input type = "text" value = {signIn.email} onChange={(e) => {
                setSignInValue((prevState) => ({
                    ...prevState,
                    email:  e.target.value
                }))
            }}></input>
            <h4>Password</h4>
            <input type = "text" value = {signIn.password} onChange={(e) => {
                setSignInValue((prevState) => ({
                    ...prevState,
                    password:  e.target.value
                }))
            }}></input>
            <button onClick={() => {
                axios.post("http://localhost:3000/api/vi/user/signin", {
                    username: signIn.email,
                    password: signIn.password
                })
                .then((res) => {
                    setSignInValue((prevState) => ({
                        ...prevState,
                        token : res.data.token,
                    }))
                    navigate("/dashboard");   
                })
            }}>Sign In</button>
            <h4>Don't have an account? <a href="http://localhost:3000/api/vi/user/signup">Sign Up</a></h4>
        </div>
    )
}