
import "./App.css";
import Jsk from "./jk";
import { createContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Link, Nav, NavItem, NavLink } from 'react-router-dom';
import Hk from "./hk";

const firstname = createContext();
function App() {

  
  return (
     <>

     <Link exact to="/about" >fenil</Link>
     <Link exact to="/">jak</Link>
     <Switch>
    <Route exact path="/">
      <Jsk />
    </Route>
    <Route path="/about" >
    <Hk/>
      
    </Route>
    <Redirect to="/"/>

  </Switch>
      </>
    
  );
}

export default App;
export { firstname };
