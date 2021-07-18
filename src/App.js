import React, {useState, useEffect} from "react";
import firebase from "./utils/firebaseConfig";
import Main from "./components/Main";
import { StyledFirebaseAuth } from "react-firebaseui";
import "./App.css"
import { UidContext } from "./UidContext"

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [uid, setUid] = useState(null);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccesssignInSuccessWithAuthResult: () => false,
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      setUid(user.uid);
    })
  }, [])

  return (
    <UidContext.Provider value={uid} >
      <div className="app" style={{ textAlign: "center" }}>
        {isSignedIn ? (
          <Main />
        ) : (
          <div className="login-page">
            <h1>React Firebase</h1>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()} />
          </div>
        )}
      </div>
    </UidContext.Provider>)
}
  
  export default App
