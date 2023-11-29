
      
import { useState } from 'react'
import './App.css'
import AllRoutes from'./AllRoutes'
import Navbar from './Components/Navbar'
import Work from './Pages/Work'



function App() {
 
    return(

      <>
       
      <AllRoutes>
          <Work/>    
      </AllRoutes>
      
      </>
    )

}

export default App;