import React from "react";
import firebase from "../utils/firebaseConfig"

const Main = () => {
    return (
        <main>
            <nav>
                <h1>React Firebase</h1>
                <h4>Hello {firebase.auth().currentUser.displayName}</h4>
            </nav>
            <button onClick={() => firebase.auth().signOut()}>Se déconnecter</button>
        
        </main>
    )
};

export default Main;