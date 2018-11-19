import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import dashboardRoutes from "routes/dashboard.jsx";
// background image for the sidebar
import image from "assets/img/sidebar-2.jpg";
import logo from "./assets/img/logo-white.svg";

import "./assets/css/material-dashboard-react.css?v=1.4.1";

import indexRoutes from './routes/index';

const hist = createBrowserHistory();

ReactDOM.render(
   // {/*<Router history={hist}>*/}
      //  {/*<Switch>*/}
       //     {/*{indexRoutes.map((prop, key) => {*/}
       //         {/*return <Route path={prop.path} component={prop.component} key={key} />;*/}
        //    {/*})}*/}
      //  {/*</Switch>*/}
 //   {/*</Router>,*/}
   // document.getElementById("root")



    <Sidebar
        routes={dashboardRoutes}
        logoText={"Creative Tim"}
        logo={logo}
        image={image}
        handleDrawerToggle={this.handleDrawerToggle}
        open={this.state.mobileOpen}
        color="white"
        bgColor="blue"
        miniActive={this.state.miniActive}
        {...rest}
    />
);
