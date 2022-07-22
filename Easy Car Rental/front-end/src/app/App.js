import '../App.css';
import HomePage from "../pages/Home";
import RegisterPage from "../pages/Register";
import {Routes, Route} from "react-router-dom";

/*
import AccountMenu from "../components/Home/Greeting";
*/

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<RegisterPage/>}/>
        {/*<Route exact path='register' element={<RegisterPage/>}/>*/}
      </Routes>
  );
}

export default App;
