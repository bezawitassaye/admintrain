import React from 'react'
import styles from "./products.module.css"
import Search from '@/app/components/Search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/components/Pagination/Pagination'

import { getProduct } from '../db/usersdata'
import { deleteProduct } from '../db/action'
const page = async ({searchParams}) => {
     const q = searchParams?.q || "";
    const page = Number(searchParams?.page) || 1; // Ensure page is a number
    const { products, count } = await getProduct(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a products ..."/>
        <Link href="/dashboard/products/add">
           <button className={styles.addButton}>Add New</button>
        </Link>

      </div>
      <table className={styles.table}>
          <thead>
           
             <tr>
               <td>Title</td>
               <td>Descrition</td>
               <td>Created At</td>
               <td>Price</td>
               <td>Stock</td>
               <td>Action</td>
             </tr>
          </thead>
          <tbody>
          {products.map(product=>(
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image
                  src={product.img || "/avatar.png"}
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userimage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4,16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                <Link href= {`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                </Link>
                <form action={deleteProduct}>
                  <input type='hidden' name='id' value={product._id}/>
                     
                <button className={`${styles.button} ${styles.delete}`}>
                 
                    
                      Delete
                </button>
                </form>
                </div>
                
              </td>
            </tr>
            ))}
          </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default page
