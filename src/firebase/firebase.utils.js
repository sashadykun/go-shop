import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAItOUTA-li7liqWlSeatpm9j60S4XQh4",
    authDomain: "go-shop-ab031.firebaseapp.com",
    databaseURL: "https://go-shop-ab031.firebaseio.com",
    projectId: "go-shop-ab031",
    storageBucket: "go-shop-ab031.appspot.com",
    messagingSenderId: "728014792831",
    appId: "1:728014792831:web:0b1ee358234bcc9166774a"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log('snapShot', snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating usr', error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
