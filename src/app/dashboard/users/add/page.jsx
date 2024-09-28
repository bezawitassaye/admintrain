import React from 'react'
import styles from "./add.module.css"
const page = () => {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder='username' name='username' required />
            <input type="email" placeholder='email' name='email' required />
            <input type="password" placeholder='password' name='password' required />
            <input type="phone" placeholder='phone' name='phone'  />
            
            <select name="isAdmin" id="isAdmin">
                <option value={false}> Is Admin?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>

            <select name="isActive" id="isActive">
                <option value={false}> Is Active?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>



            <textarea name="address" id='address'  rows="16" 
            placeholder='address'></textarea>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default page
