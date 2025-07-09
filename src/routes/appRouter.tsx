import { Route, Routes } from "react-router"
import  { Home }  from "../pages/Home"
import { SignIn } from "../components/auth/signIn"
import { SignUp } from "../components/auth/signUp"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element = <Home/> />
            <Route path="/signIn" element = {<SignIn/>} />
            <Route path="/signUp" element = {<SignUp/>} />
        </Routes>
    )
}

export default AppRouter