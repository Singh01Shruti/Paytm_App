import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import { RecoilRoot } from "recoil"
function App() {
  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<SignUp />}></Route>
    <Route path = "/signin" element = {<SignIn />}></Route>
    <Route path = "/dashboard" element = {<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App
