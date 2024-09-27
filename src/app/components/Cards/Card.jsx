import React from 'react'
import styles from "./cards.module.css"
import { MdSupervisedUserCircle } from 'react-icons/md'
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
         <span className={styles.title}>
          Total users
         </span>
         <span className={styles.number}>10</span>
         <span className={styles.detail}>
           <span className={styles.postive}>more than pre</span>
         </span>
      </div>
      
    </div>
  )
}

export default Card
