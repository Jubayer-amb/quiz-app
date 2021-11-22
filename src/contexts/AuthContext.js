import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase';

const AuthContext = createContext();

const auth = getAuth(app);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // signup function
    const signup = async (email, password, username) => {
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, { displayName: username });

        const user = auth.currentUser;
        setCurrentUser({ ...user });
        setLoading(false);
    };

    const signin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('from signin function ', userCredential.user);
        } catch (error) {
            throw new Error(error);
        }
    };

    const signout = async () => {
        await signOut(auth);
    };

    const value = { currentUser, signup, signin, signout };

    return <AuthContext.Provider value={value}> {!loading && children} </AuthContext.Provider>;
};

export { useAuth, AuthProvider };
