import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateHisaab from "../pages/CreateHisaab";
import ShowHisaab from '../pages/ShowHisaab';
import EditHisaab from '../pages/EditHisaab';
import NoFound from '../components/NoFound';

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={Home}/> 
      <Route path='/create-new-hissab' Component={CreateHisaab}/> 
      <Route path='/show-hisaab/:id' Component={ShowHisaab}/> 
      <Route path='/update-hisaab/:id' Component={EditHisaab}/> 
      <Route path='*' Component={NoFound}/> 

    </Routes>
    </>
  )
}

export default Routing