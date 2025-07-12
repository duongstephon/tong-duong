import React, { useEffect, useState } from "react";
import { db } from './config/firebase-config';
import { getDocs, collection } from "firebase/firestore";

export default function TestPage() {
    const [userList, setUserList] = useState([]);

    const usersCollectionRef = collection(db, "Users")

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await getDocs(usersCollectionRef);
                const userData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                console.log(userData)
            } catch (err) {
                console.log(err)
            }
        }

        getUsers();
    }, [])

    return (
        <div>Hello</div>
    )
}   
