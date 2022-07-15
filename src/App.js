import React from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";     // <Home/> 
import Blogpost from "./pages/blogpost/Blogpost"; //<Blogpost/> 
import Writepost from "./pages/writepost/Writepost";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{ BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <NavBar/> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup"  element={user ? <Home /> : <Register />}/>
        <Route path="/signin" element={user ? <Home /> : <Login />} />
        
        <Route path="/write" element={user ? <Writepost /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Blogpost />} />
      </Routes>
    </Router>
  );
}

export default App;
