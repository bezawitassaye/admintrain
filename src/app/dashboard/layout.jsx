import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidbar from '../components/Sidbar/Sidbar'
import styles from "./page.module.css"
import Footer from '../components/Footer/Footer'
const layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            
            <Sidbar/>
        </div>
        <div className={styles.content}>
        <Navbar/>
            {children}
          <Footer/>  
        </div>
         
      
    </div>
  )
}

export default layout
