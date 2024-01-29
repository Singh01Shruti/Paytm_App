import { useRecoilState } from "recoil"
import axios from "axios";
import { signUpAtom } from "../store/signUp"
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
const[signup , setSignupValue] = useRecoilState(signUpAtom)
const navigate = useNavigate();
    return (
        <div className="flex justify-center mt-28 ">
            <div className="border border-black w-80 h-58 p-8 rounded-lg py-10 px-4">
            <h1 className="text-center text-black font-bold text-3xl">Sign Up</h1>
            <h4 className="text-center ml-6 mt-2 text-slate-600 mb-9 ">Enter your information to create an account</h4>
            <h4 className="text-black font-bold text-s pb-2">First Name</h4>
            <input className = "border border-slate-400 w-72 h-58 rounded" type = "text" value = {signup.firstName} onChange={(e) => {
                setSignupValue((prevState) => ({
                    ...prevState,
                    firstName:  e.target.value
                }))
            }}></input>
            <h4 className="text-black font-bold text-s pt-2 pb-2">Last Name</h4>
            <input className = "border border-slate-400 w-72 h-58 rounded" type = "text" value = {signup.lastName} onChange={(e) => {
                setSignupValue((prevState) => ({
                    ...prevState,
                    lastName: e.target.value
                }))
            }}></input>
            <h4 className="text-black font-bold text-s pt-2 pb-2">Email</h4>
            <input className = "border border-slate-400 w-72 h-58 rounded" type = "text" value = {signup.email} onChange={(e) => {
                setSignupValue((prevState) => ({
                    ...prevState,
                    email : e.target.value
                }))
            }}></input>
            <h4 className="text-black font-bold text-s pt-2 pb-2">Password</h4>
            <input className = "border border-slate-400 w-72 h-58 rounded" type = "text" value = {signup.password} onChange={(e) => {
                setSignupValue((prevState) => ({
                    ...prevState,
                    password: e.target.value
                }))
            }}></input>
            <button className = "bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-5 w-72"
                onClick={() => {
                axios.post("http://localhost:3000/api/vi/user/signup", {
                    username : signup.email,
                    password : signup.password,
                    firstName : signup.firstName,
                    lastName: signup.lastName,
                })
                .then(() => {
                   navigate("/signin");
                })
            }}>Sign Up</button>
            <h5 className="text-center mt-5 font-semibold">Already have an account? <Link className="underline" to= "/signin">Signin</Link> </h5>
            </div>
        </div>
    )
}
