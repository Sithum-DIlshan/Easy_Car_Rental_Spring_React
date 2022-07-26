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
import PersistentDrawerLeft from "../components/Dashboard/Admin/AdminTopbar";
import AdminTopbar from "../components/Dashboard/Admin/AdminTopbar";
import {Chart} from "@syncfusion/ej2-react-charts";
import AdminDashboard from "../pages/AdminDashBoard";
import AdminProfile from "../components/Dashboard/Admin/AdminProfile";
import UserProfile from "../components/Dashboard/User/UserProfile";
import LoginForm from "../components/Login/Form/LoginForm";

/*
import AccountMenu from "../components/Home/Greeting";
*/

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<LoginForm/>}/>
       {/* <Route exact path='register' element={<RegisterPage/>}/>
        <Route exact path='login' element={<LoginPage/>}/>*/}
      </Routes>
  );
}

export default App;
