import '../App.css';
import RegisterPage from "../pages/Register";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import AddCar from "../components/Dashboard/Admin/Tasks/AddCar";
import AdminDashboard from "../pages/AdminDashBoard";
import HomePage from "../pages/Home";
import UserCars from "../components/Dashboard/User/Cars";

/*
import AccountMenu from "../components/Home/Greeting";
*/

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='register' element={<RegisterPage/>}/>
            <Route exact path='user/dashboard' element={<UserDashboard/>}/>
            <Route exact path='admin/dashboard' element={<AdminDashboard/>}/>
            <Route exact path='login' element={<LoginPage/>}/>
        </Routes>
    );
}

export default App;
