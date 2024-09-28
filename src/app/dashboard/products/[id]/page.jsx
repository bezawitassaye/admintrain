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
            Iphone

        </div>

        <div className={styles.formcontainer}>
        <form action="" className={styles.form}>
            <label >Title</label>
            <input type="text" name='title' placeholder='Iphon' />
            <label >Pricee</label>
            <input type="number" name='price' placeholder='12' />
            <label >Stock</label>
            <input type="number" name='stock' placeholder='23'  />
            <label >Color</label>
            <input type="text" name='color' placeholder='red' />
            <label >Size</label>
            <input type="text" name='size' placeholder='12' />
            <label >cat </label>
            <select name="isAdmin" id="isAdmin">
                <option value="kithen">Kitchen</option>
                <option value="computers">computers</option>
            </select>
            <label >Description</label>
            <textarea name="desc" id="desc" rows={10}
            placeholder='description'
            ></textarea>
            
            <button>Update</button>

            </form>


        </div>
      
    </div>
  )
}

export default page
