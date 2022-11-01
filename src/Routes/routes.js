import React from 'react';

import { Route, BrowserRouter } from "react-router-dom";

import Login from "../Pages/login";
import Search from '../Pages/search';
import Album from '../Pages/album';
import Profile from '../Pages/profile';
import ProfileEdit from '../Pages/profileEdit';

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { Search }  path="/search" exact />
           <Route component = { Album }  path="/album/:id" exact />
           <Route component = { Profile }  path="/profile" exact />
           <Route component = { ProfileEdit }  path="/profile/edit" exact />
       </BrowserRouter>
   )
}

export default Routes;