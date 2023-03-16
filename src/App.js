import React from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
   Switch, 
   Route
  } from "react-router-dom";
import AuthRoute from "./component/routes/AuthRoute";
import Home from "./pages/Home";
import Nav from "./component/Nav";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import StripeCancel from "./pages/stripe-cancel";
import StripeSuccess from "./pages/stripe-success";
import Account from "./pages/account";

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
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <AuthRoute exact path="/stripe/success" component={StripeSuccess} />
        <AuthRoute exact path="/stripe/cancel" component={StripeCancel} />
        <AuthRoute exact path="/account" component={Account} />
      </Switch> 

    </Router>
  );
}

export default App;
