import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Function to sign up user using firebase methods
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  // Function to sign in user using firebase methods
   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

   // Function to sign out user using firebase methods & will clear from broswer data
  const logout = () => {
      return signOut(auth)
  }

  // this will setup our current user in above declardd user state everytime the state of firebase auth changes (sign in, signout etc)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};