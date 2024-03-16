import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/signup/Signup";
import Login from "./Components/login/Login";
import Home from "./Components/home/Home";
import Users from "./Components/users/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
