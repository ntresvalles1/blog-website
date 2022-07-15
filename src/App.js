import React from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";     // <Home/> 
import Blogpost from "./pages/blogpost/Blogpost"; //<Blogpost/> 
import Writepost from "./pages/writepost/Writepost";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{ BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar/> 
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
