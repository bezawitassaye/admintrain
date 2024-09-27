import React from 'react'
import Card from '../components/Cards/Card'
import styles from "./page.module.css"
import Transactions from '../components/Transactions/Transactions'
import Chart from '../components/Chart/Chart'
import Rightbar from '../components/Rightbar/Rightbar'
const dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
      
    </div>
  )
}

export default dashboard
