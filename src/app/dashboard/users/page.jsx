// users/page.jsx
import React from 'react';
import styles from "./users.module.css";
import Search from '@/app/components/Search/Search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/components/Pagination/Pagination';
import { getusers } from '../db/usersdata';
import {searchParams} from "next/navigation"
import { deleteUser } from '../db/action';

const Page = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = Number(searchParams?.page) || 1; // Ensure page is a number
    const { users, count } = await getusers(q, page);
    console.log(users)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user ..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={user.img || "/avatar.png"}
                                        alt=''
                                        width={40}
                                        height={40}
                                        className={styles.userimage}
                                    />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>{user.isActive ? "active" : "passive"}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user._id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteUser}>
                                       <input type='hidden' name='id' value={user._id}/>
                     
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
            <Pagination count={count} />
        </div>
    );
};

export default Page;
