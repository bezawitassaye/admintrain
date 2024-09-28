"use client"
import React from 'react'
import styles from "./pagination.module.css"
import { usePathname,useRouter, useSearchParams } from 'next/navigation'


const Pagination = ({count}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname()
  const page = searchParams.get("page")||1;
  const params = new URLSearchParams(searchParams);
  const Item_per_page = 2;
  const hasPrev = Item_per_page *(parseInt(page)-1)>0;
  const hasNext = Item_per_page * (parseInt(page)-1)+Item_per_page < count
  const handleChangePage=(type)=>{
    type === "prev"
    ?params.set("page",parseInt(page)-1)
    :params.set("page",parseInt(page)+1);
    replace(`${pathname}?${params}`)
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev}
        onClick={()=>handleChangePage("prev")}
      >Previous</button>
      <button className={styles.button} disabled={!hasNext}
      onClick={()=>handleChangePage("next")}
      
      >Next</button>
    </div>
  )
}

export default Pagination
