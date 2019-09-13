import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import AdminPage from "./components/admin/AdminPage";
import Login from "./components/login/Login";
import Landing from "./components/layout/Landing";
import RegisterBand from "./components/registration/RegisterBand";
import ProfileProvider from "./components/utils/ProfileProvider";
import RouteRedirect from "./components/utils/RouteRedirector";
import Band from "./components/band/Band";

const App = () => {
  return (
    <div className="App">
      <ProfileProvider>
        <BrowserRouter>
          <Route path="/" component={Landing} />
          <Switch>
            <Route exact path="/" component={RouteRedirect} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin-page" component={AdminPage} />
            <Route exact path="/register" component={RegisterBand} />
            <Route exact path="/band" component={Band} />
          </Switch>
        </BrowserRouter>
      </ProfileProvider>
    </div>
  );
};

export default App;
