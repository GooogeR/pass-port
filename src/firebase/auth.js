import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; 

const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in:', user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing in:', errorCode, errorMessage);
    throw error; 
  }
};

export { signIn };
