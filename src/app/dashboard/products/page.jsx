import React from 'react'
import styles from "./products.module.css"
import Search from '@/app/components/Search/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/components/Pagination/Pagination'
const page = () => {
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
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                  src="/avatar.png"
                  alt=''
                  width={40}
                  height={40}
                  className={styles.userimage}
                  />
                  Iphone
                </div>
              </td>
              <td>Desc</td>
              <td>$999</td>
              <td>13.01.2024</td>
              <td>34</td>
              <td>
                <div className={styles.buttons}>
                <Link href="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                </Link>
                
                <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                </button>
                </div>
                
              </td>
            </tr>
          </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default page
