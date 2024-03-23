import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/signup/Signup";
import Lecreg from "./Components/Lregister/Lecreg";
import Login from "./Components/login/Login";
import Home from "./Components/home/Home";
import Users from "./Components/users/Users";
import Courses from "./Components/Courses/Courses";
import Courseform from "./Components/Courses/Courseform";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/users" element={<Users />} />
          <Route path="/lregister" element={<Lecreg />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/addCourses" element={<Courseform />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
