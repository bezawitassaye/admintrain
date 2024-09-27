import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidbar from '../components/Sidbar/Sidbar'
const layout = ({children}) => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Sidbar/>
        </div>
         {children}
      
    </div>
  )
}

export default layout
