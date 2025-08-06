import { Route, Routes } from "react-router"
import  { Home }  from "../pages/Home"
import { SignIn } from "../components/auth/signIn"
import { SignUp } from "../components/auth/signUp"
import { City } from "../pages/City"
import { DriverSignIn } from "../components/auth/driverSignIn"
import { DriverSignUp } from "../components/auth/driverSignUp"
import { DriverHome } from "../pages/DriverHome"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/signIn" element = {<SignIn/>} />
            <Route path="/signUp" element = {<SignUp/>} />
            <Route path="/city" element = {<City/>} />
            <Route path="/driverSignIn" element={<DriverSignIn />} />
            <Route path="/driverSignUp" element={<DriverSignUp />} />
            
            <Route path="/driverdashboard" element ={<DriverHome/>} />

        </Routes>
    )
}

export default AppRouter