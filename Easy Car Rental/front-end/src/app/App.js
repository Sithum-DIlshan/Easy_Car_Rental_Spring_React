import '../App.css';
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import {Routes, Route} from "react-router-dom";
import LoginPage from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import Cars from "../components/Dashboard/User/Cars";
import RequestConfirm from "../components/Dashboard/User/RentRequestConfirmation";
import AddDriver from "../components/Dashboard/Admin/Tasks/AddDriver";
import AddCar from "../components/Dashboard/Admin/Tasks/AddCar";
import PersistentDrawerLeft from "../components/Dashboard/Admin/SideBar";

/*
import AccountMenu from "../components/Home/Greeting";
*/

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<PersistentDrawerLeft/>}/>
       {/* <Route exact path='register' element={<RegisterPage/>}/>
        <Route exact path='login' element={<LoginPage/>}/>*/}
      </Routes>
  );
}

export default App;
