import React from "react";
import { Route } from "react-router";
import { Entertainment } from "../categories/Entertainment";
import { Header } from "../components/Header";
import { Switch } from "react-router";
import { Landing } from "../Landing/Landing";
import { Automobiles } from "../categories/Automobiles";
import { Politics } from "../categories/Politics";
import { Business } from "../categories/Business";
import { Tech } from "../categories/Tech";
import { Sharemarket } from "../categories/Sharemarket";
export const MainLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/automobiles" component={Automobiles} exact={true} />
        <Route path="/politics" component={Politics} exact={true} />
        <Route path="/business" component={Business} exact={true} />
        <Route path="/tech" component={Tech} exact={true} />
        <Route path="/sharemarket" component={Sharemarket} exact={true} />
        <Route path="/entertainment" component={Entertainment} exact={true} />
        <Route path={""} component={Landing} exact={true} />
      </Switch>
    </>
  );
};
