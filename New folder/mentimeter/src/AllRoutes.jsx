import React from "react";
import { Route, Routes } from "react-router-dom";
import Work from "./Pages/Work";
import Education from "./Pages/Education";
import Features from "./Pages/Features";
import Resources from"./Pages/Resources";
import Pricing from "./Pages/Pricing";
import Getaquote from "./Pages/Getaquote";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";



function AllRoutes(){

  return (
    <>
    <Routes>
      
       <Route path="/" element= {<Work/>} />
    
       <Route path="/Education" element={<Education/>}  />

       <Route path="/Features" element = { <Features/> } />

       <Route path="/Resources" element = { <Resources/> } />

       <Route path="/Pricing" element={ <Pricing/>} />

       <Route path="/Getaquote" element={ <Getaquote/>}/>

       <Route path="/SignUp" element={ <SignUp/>}/>

       <Route path="/Login" element={ <Login/>}/>

       

       

    </Routes>
    </>
  )
}
export default AllRoutes;