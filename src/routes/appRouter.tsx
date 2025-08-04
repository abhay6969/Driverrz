import { Route, Routes } from "react-router"
import  { Home }  from "../pages/Home"
import { SignIn } from "../components/auth/signIn"
import { SignUp } from "../components/auth/signUp"
import { DriverSignIn } from "../components/auth/driverSignIn"
import { DriverSignUp } from "../components/auth/driverSignUp"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element = <Home/> />
            <Route path="/signIn" element = {<SignIn/>} />
            <Route path="/signUp" element = {<SignUp/>} />
            <Route path="/driverSignIn" element={<DriverSignIn />} />
            <Route path="/driverSignUp" element={<DriverSignUp />} />

        </Routes>
    )
}

export default AppRouter