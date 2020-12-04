import { useState, useEffect } from 'react'
import { db } from "lib/firebase";


const InfoProfile = ({ userId }) => {

const [user, setUser] = useState(" ");

    useEffect(() => {
        db
            .collection('users')
            .onSnapshot(snap => {
                const usersDB = snap.docs.map(doc => { 
                    if (doc.id == userId) 
                    return setUser(doc.data())
                });
                
            });
    }, []);
    
    console.log(user)
    return (
        <h1>¡Hola, {user.nombre}!</h1>
        
    )}

export default InfoProfile;