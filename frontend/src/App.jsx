import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import Transfer from "./components/Transfer"
import { RecoilRoot } from "recoil"
import { Suspense } from "react"


function App() {
  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {(<Suspense fallback = "loading..."><SignUp /></Suspense>)}/>
    <Route path = "/signin" element = {(<Suspense fallback = "loading..."><SignIn /></Suspense>)}/>
    <Route path = "/dashboard" element = {(<Suspense fallback = "loading..."><Dashboard /></Suspense>)}/>
    <Route path = "/transfer" element = {(<Suspense fallback = "loading..."><Transfer /></Suspense>)}/>
    </Routes>
    </BrowserRouter>

    </RecoilRoot>
    </>
  )
}


export default App
