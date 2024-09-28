"use client"
import React from 'react';
import styles from "./add.module.css";
import { addUser } from '../../db/action';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const Page = () => {
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target); // Create FormData object from the form

    const result = await addUser(formData); // Call the addUser function

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
        <input type="text" placeholder='Username' name='username' required />
        <input type="email" placeholder='Email' name='email' required />
        <input type="password" placeholder='Password' name='password' required />
        <input type="phone" placeholder='Phone' name='phone' />

        <select name="isAdmin" id="isAdmin">
          <option value="">Is Admin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value="">Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <textarea name="address" id='address' rows="4" placeholder='Address'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Page;
