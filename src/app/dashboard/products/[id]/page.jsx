import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { getproduct, updateproduct } from '../../db/action'

const page = async ({params}) => {
    const {id} = params
    const product = await getproduct(id)
  return (
    <div className={styles.container}>
        <div className={styles.infocontainer}>
            <div className={styles.imgcontainer}>
                <Image src="/avatar.png" fill/>

            </div>
            {product.title}

        </div>

        <div className={styles.formcontainer}>
        <form action={updateproduct} className={styles.form}>
            <input type="hidden" name='id' value={id} />
            <label >Title</label>
            <input type="text" name='title' placeholder={product.title} />
            <label >Pricee</label>
            <input type="number" name='price' placeholder={product.price} />
            <label >Stock</label>
            <input type="number" name='stock' placeholder={product.stock}  />
            <label >Color</label>
            <input type="text" name='color' placeholder={product.color} />
            <label >Size</label>
            <input type="text" name='size' placeholder={product.size} />
            <label >cat </label>
            <select name="isAdmin" id="isAdmin">
                <option value="kithen">Kitchen</option>
                <option value="computers">computers</option>
            </select>
            <label >Description</label>
            <textarea name="desc" id="desc" rows={10}
            placeholder={product.desc}
            ></textarea>
            
            <button>Update</button>

            </form>


        </div>
      
    </div>
  )
}

export default page
