import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Portfolio from "../components/Portfolio";
//import ContactPage from "../components/ContactPage";
import NoPageFound from "../components/NoPageFound";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import "../styles/social.css";
import Education from "../components/Education";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />

      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/education" component={Education} />

        <Route component={NoPageFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
