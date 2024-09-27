import React from 'react'
import Link from 'next/link'
import styles from "./links.module.css"
const Links = ({item}) => {
  return (
    <Link href={item.path} className={styles.container}>
        {item.icon}
        {item.title}

      
    </Link>
  )
}

export default Links
