import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { getuser, updateUser } from '../../db/action';

const page = async ({params}) => {
    const {id} = params;
    const user = await getuser(id)
   
  return (
    <div className={styles.container}>
        <div className={styles.infocontainer}>
            <div className={styles.imgcontainer}>
                <Image src={user.img || "/avatar.png"} fill/>

            </div>
            {user.username}

        </div>

        <div className={styles.formcontainer}>
        <form  action={updateUser} className={styles.form}>
            <input type="hidden" name='id' value={user.id} />
            <label >Username</label>
            <input type="text" name='username' placeholder={user.username} />
            <label >Email</label>
            <input type="email" name='email' placeholder={user.email} />
            <label >Password</label>
            <input type="password" name='password'  />
            <label >Phone</label>
            <input type="text" name='phone' placeholder={user.phone} />
            <label >Address</label>
            <input type="text" name='address' placeholder={user.address} />
            <label >Is Admin</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true} selected={user.isAdmin}>Yes</option>
                <option value={false} selected={user.isAdmin}>No</option>
            </select>
            <label >Is Active</label>
            <select name="isActive" id="isActive">
                <option value={true} selected={user.isActive}>Yes</option>
                <option value={false} selected={user.isActive}>No</option>
            </select>
            <button>Update</button>

            </form>


        </div>
      
    </div>
  )
}

export default page
