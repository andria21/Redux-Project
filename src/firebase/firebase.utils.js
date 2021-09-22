import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCvUAVd3leghOwPvZhbvFUfd4OLaF4mNkc",
    authDomain: "crwn-db-e791c.firebaseapp.com",
    projectId: "crwn-db-e791c",
    storageBucket: "crwn-db-e791c.appspot.com",
    messagingSenderId: "442348321044",
    appId: "1:442348321044:web:c30b107d0735888ef3ea01",
    measurementId: "G-GHK5RMJZ9R"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
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
        console.log(error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
