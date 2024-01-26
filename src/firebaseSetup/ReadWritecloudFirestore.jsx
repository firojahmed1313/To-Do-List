import React from 'react'
import { getFirestore, collection, addDoc, doc, getDoc,query,where,getDocs,updateDoc } from "firebase/firestore";
import { Button } from '@mui/material';
import { appfirebase } from "./firebase"
const dbapp = getFirestore(appfirebase);

const ReadWritecloudFirestore = () => {

    const writeData = async () => {
        try {
            const docRef = await addDoc(collection(dbapp, "users/DWNGXpw7S5z06GNyrI07/list"), {
                NAMEi: "Ada",
                EMAILi: "lovelace@gmail.com",
            });
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    const readData = async () => {
        const docRef = doc(dbapp, "users", "DWNGXpw7S5z06GNyrI07");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
    }
    const updateData=async()=>{
        const docRef = doc(dbapp, "users", "DWNGXpw7S5z06GNyrI07");
        const docSnap = await updateDoc(docRef,{
            NAME:"FIROJADA"
        });
        console.log(docSnap)
    }
    const getDataFromQuary=async()=>{
        const docref= collection(dbapp,"users");
        const q=query(docref,where("NAME","==","Ada"))
        const docSnap= await getDocs(q);
        docSnap.forEach((data)=>console.log(data.data()))
    }

    return (
        <>

            <div>ReadWritecloudFirestore</div>
            <Button onClick={writeData}>add Data</Button>
            <Button onClick={readData}>Get Data</Button>
            <Button onClick={updateData}>Update Data</Button>
            <Button onClick={getDataFromQuary}>Get Data from quary</Button>
        </>
    )
}

export default ReadWritecloudFirestore