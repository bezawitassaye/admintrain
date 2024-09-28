"use client"
import React from 'react';
import styles from "./add.module.css";
import { addProduct } from '../../db/action';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const Page = () => {
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target); // Create FormData object from the form

    const result = await addProduct(formData); // Call the addProduct function

    // Log the result for debugging
    console.log(result);

    if (result.redirect) {
      router.push(result.redirect); // Redirect if there's a valid redirect URL
    } else if (result.error) {
      console.error(result.error); // Handle errors appropriately
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder='Title' name='title' required />
        <select name="cat" id="cat">
          <option value="">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="text" placeholder='Price' name='price' required />
        <input type="text" placeholder='Stock' name='stock' required />
        <input type="text" placeholder='Color' name='color' required />
        <input type="text" name="size" placeholder='Size' required />
        <textarea name="desc" id='desc' rows="4" placeholder='Description' required></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Page;
