import '../App.css';
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import {Routes, Route} from "react-router-dom";
import LoginPage from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";

/*
import AccountMenu from "../components/Home/Greeting";
*/

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<UserDashboard/>}/>
       {/* <Route exact path='register' element={<RegisterPage/>}/>
        <Route exact path='login' element={<LoginPage/>}/>*/}
      </Routes>
  );
}

export default App;
