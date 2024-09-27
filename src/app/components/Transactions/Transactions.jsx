import Image from 'next/image'
import React from 'react'
import styles from "./Transactions.module.css"

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transacrtions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar.png" alt='' width={40} height={40} className={styles.userimage}/>
                 doe Doe
            </div>
            </td>
            
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
                <Image src="/avatar.png" alt='' width={40} height={40} className={styles.userimage}/>
                 jhon Doe
            </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
            
          </tr>

          <tr>
            <td>
            <div className={styles.user}>
                <Image src="/avatar.png" alt='' width={40} height={40} className={styles.userimage}/>
                 jhon Doe
            </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
