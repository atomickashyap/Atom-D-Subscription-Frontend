import React from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
   Switch, 
   Route
  } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Nav />
      <Toaster 
      position="top-center" 
      toastOptions={{
        duration: 2500,
      }}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch> 

    </Router>
  );
}

export default App;
