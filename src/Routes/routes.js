import React from 'react';

import { Route, BrowserRouter } from "react-router-dom";

import Login from "../Pages/login";
import Search from '../Pages/search';
import Album from '../Pages/album'

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { Search }  path="/search" exact />
           <Route component = { Album }  path="/album/:id" exact />
       </BrowserRouter>
   )
}

export default Routes;