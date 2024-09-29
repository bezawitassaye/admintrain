import React from 'react'
import styles from "./login.module.css"


const login = () => {
  return (
    <div className={styles.container}>
     
      <form  className={styles.form}>
      <h1>Login</h1>
        <input type="text" placeholder='username' name='username' />
         <input type="text" placeholder='password' name='password' />
         <button>Login</button>
      </form>

      
    </div>
  )
}

export default login
