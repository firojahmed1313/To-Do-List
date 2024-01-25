import React, { useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from '@mui/material';
import { appfirebase } from "./firebase";
const auth = getAuth(appfirebase);
const provider = new GoogleAuthProvider();
const Auth = () => {
    const signUpUser = () => {
        createUserWithEmailAndPassword(auth, "email2@email.com", "pass@word").then((userf) => console.log(userf));
    }
    const signInUser = () => {
        signInWithEmailAndPassword(auth, "email2@email.com", "pass@word").then((userf) => console.log(userf)).catch((error) => {
            console.log(error.code);
        });;
    }
    const signUsingGoogle = () => {
        signInWithPopup(auth, provider).then((data) => console.log(data)).catch((error) => console.log(error.code))

    }
    const chackUserState = () => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                console.log("user logIn", user)

            } else {
                console.log("user logout")
            }
        });




    }
    const userLogOut = () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful.")
        }).catch((error) => {
            console.log(error.code)
        });
    }
    return (
        <>

            <div>Auth</div>
            <Button onClick={signUpUser}>signUp</Button>
            <Button onClick={signInUser}>signIn</Button>
            <Button onClick={signUsingGoogle}>signUsingGoogle</Button>
            <Button onClick={chackUserState}>chackUserState</Button>
            <Button onClick={userLogOut}>LogOut</Button>
        </>
    )
}

export default Auth