import React from 'react'
import { getDatabase, ref, set, child, get ,onValue } from "firebase/database";
import { Button } from '@mui/material';
import { appfirebase } from "./firebase"
const db = getDatabase(appfirebase);
const ChackFirebase = () => {
    const putData = () => {
        set(ref(db, 'users/raihan'), {
            id: 1,
            username: "name1",
            email: "email1",
            profile_picture: "imageUrl1"
        });
    }
    const GetdataChackFirebase = () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

    }
    onValue(ref(db,"users/raihan"),(snapshot)=>{
        console.log(snapshot.val());
    })
    return (
        <>

            <div>ChackFirebase</div>
            <Button onClick={putData}>ChackFirebase</Button>
            <Button onClick={GetdataChackFirebase}>GetdataChackFirebase</Button>
        </>
    )
}

export default ChackFirebase