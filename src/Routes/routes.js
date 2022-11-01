import React from 'react';

import { Route, BrowserRouter } from "react-router-dom";

import Login from "../Pages/login";
import Search from '../Pages/search';

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { Search }  path="/search" exact />
       </BrowserRouter>
   )
}

export default Routes;