import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { Button } from '@mui/material';
import {appfirebase} from "./firebase"
const db = getDatabase(appfirebase);
const ChackFirebase = () => {
    const putData = () => {
        set(ref(db, 'users/firoj'), {
            id:1,
            username: "name",
            email: "email",
            profile_picture: "imageUrl"
        });
    }
    return (
        <>

        <div>ChackFirebase</div>
        <Button onClick={putData}>ChackFirebase</Button>
        </>
    )
}

export default ChackFirebase