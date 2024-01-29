import { useRecoilState } from "recoil"
import { signInAtom } from "../store/signIn"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function SignIn(){
const[signIn, setSignInValue] = useRecoilState(signInAtom);
const navigate = useNavigate();
    return (
        <div className="flex justify-center mt-40 ">
            <div className="border border-black w-80 h-58 p-8 rounded-lg py-10 px-4">
            <h1 className="text-center text-black font-bold text-3xl">Sign In</h1>
            <h4 className="text-center ml-6 mt-2 text-slate-600 mb-9 ">Enter your credentials to access your account</h4>
            <h4 className="text-black font-bold text-s pb-2">Email</h4>
            <input className = "border border-slate-400 w-72 h-58 rounded" type = "text" value = {signIn.email} onChange={(e) => {
                setSignInValue((prevState) => ({
                    ...prevState,
                    email:  e.target.value
                }))
            }}></input>
            <h4 className="text-black font-bold text-s pt-2 pb-2">Password</h4>
            <input className = "border border-slate-400 w-72 h-58 rounded" type = "text" value = {signIn.password} onChange={(e) => {
                setSignInValue((prevState) => ({
                    ...prevState,
                    password:  e.target.value
                }))
            }}></input>
            <button className = "bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-5 w-72"
                onClick={() => {
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
            <h4 className="text-center mt-5 font-semibold">Don't have an account? <Link className="underline" to="/signup">Sign Up</Link></h4>
            </div>
        </div>
    )
}