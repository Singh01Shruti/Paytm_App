import { useRecoilState } from "recoil"
import axios from "axios";
import { signUpAtom } from "../store/signUp"
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
const[signup , setSignupValue] = useRecoilState(signUpAtom)
const navigate = useNavigate();
    return (
        <div >
            <h1>Sign Up</h1>
            <h4>Enter your information to create an account</h4>
            <h4>First Name</h4>
            <input type = "text" value = {signup.firstName} onChange={(e) => {
                setSignupValue((prevState) => ({
                    ...prevState,
                    firstName:  e.target.value
                }))
            }}></input>
            <h4>Last Name</h4>
            <input type = "text" value = {signup.lastName} onChange={(e) => {
                setSignupValue((prevState) => ({
                    ...prevState,
                    lastName: e.target.value
                }))
            }}></input>
            <h4>Email</h4>
            <input type = "text" value = {signup.email} onChange={(e) => {
                setSignupValue((prevState) => ({
                    ...prevState,
                    email : e.target.value
                }))
            }}></input>
            <h4>Password</h4>
            <input type = "text" value = {signup.password} onChange={(e) => {
                setSignupValue((prevState) => ({
                    ...prevState,
                    password: e.target.value
                }))
            }}></input>
            <button onClick={() => {
                axios.post("http://localhost:3000/api/vi/user/signup", {
                    username : signup.email,
                    password : signup.password,
                    firstName : signup.firstName,
                    lastName: signup.lastName,
                })
                .then(() => {
                   navigate("/signin");
                })
                .catch((e) => {
                    alert(e);
                })
            }}>Sign Up</button>
            <h5>Already have an account?<Link to= "/signin">SignIn</Link> </h5>
        </div>
    )
}
