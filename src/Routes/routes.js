import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../Pages/login';
import Search from '../Pages/search';
import Album from '../Pages/album';
import Favorites from '../Pages/favorite';
import Profile from '../Pages/profile';

export default function rotas() {
  return (
    <Routes>
      <Route element={<Login />} path="/" exact />
      <Route element={<Search />} path="/search" exact />
      <Route element={<Album />} path="/album/:id" exact />
      <Route element={<Favorites />} path="/favorites" exact />
      <Route element={<Profile />} path="/profile" exact />
    </Routes>
  )
}