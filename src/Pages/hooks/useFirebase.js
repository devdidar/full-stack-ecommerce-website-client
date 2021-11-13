import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init";
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin,setAdmin] = useState(false)
  const auth = getAuth();
  const createUser = (name, email, password, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password, location, history)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUserToDB(newUser);
        const destination = location?.state?.from || "/";
        history.push(destination);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  const logInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password, location, history)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.push(destination);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  useEffect(()=>{
fetch(`https://immense-brushlands-03739.herokuapp.com/users/${user.email}`)
.then(res=>res.json())
.then(data=>{
  setAdmin(data.admin)})
  },[user.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };
  const saveUserToDB = (newUser) => {
    fetch("https://immense-brushlands-03739.herokuapp.com/saveUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return {
    user,
    admin,
    isLoading,
    createUser,
    logInUser,
    logOut,
  };
};

export default useFirebase;
