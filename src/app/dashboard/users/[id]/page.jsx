import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infocontainer}>
            <div className={styles.imgcontainer}>
                <Image src="/avatar.png" fill/>

            </div>
            jhon Doe

        </div>

        <div className={styles.formcontainer}>
        <form action="" className={styles.form}>
            <label >Username</label>
            <input type="text" name='username' placeholder='bezawit' />
            <label >Email</label>
            <input type="email" name='email' placeholder='beza@gmail.com' />
            <label >Password</label>
            <input type="password" name='password'  />
            <label >Phone</label>
            <input type="text" name='phone' placeholder='+85938409' />
            <label >Address</label>
            <input type="text" name='address' placeholder='New York' />
            <label >Is Admin</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label >Is Active</label>
            <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button>Update</button>

            </form>


        </div>
      
    </div>
  )
}

export default page
