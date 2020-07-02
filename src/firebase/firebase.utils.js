import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyDVRSDwUgf8_N7A9clK_ZFOXQ0Hn-czuYM",
    authDomain: "crown-clothing-510f9.firebaseapp.com",
    databaseURL: "https://crown-clothing-510f9.firebaseio.com",
    projectId: "crown-clothing-510f9",
    storageBucket: "crown-clothing-510f9.appspot.com",
    messagingSenderId: "821036807655",
    appId: "1:821036807655:web:b07e7f0a923dac2a767942",
    measurementId: "G-CFTGJYCDGM"
  };
  

export const createUserProfileDocument = async (userAuth, additionalData) =>  {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log("error creating user", error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;