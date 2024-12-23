import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../../fireBase";

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user.uid);
    return userCredential.user.uid; // Return user ID if needed
  } catch (error: any) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};


export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken(); // Retrieve the user's authentication token
    console.log("User signed in:", userCredential.user.uid);
    return token; // Return the token if needed
  } catch (error: any) {
    console.error("Error signing in user:", error.message);
    throw error;
  }
};

 const provider = new GoogleAuthProvider();

export const googleUser= async()=>{
  try{
const signInWithGoogle = await signInWithPopup(auth, provider)
const user = signInWithGoogle.user
const token = await user.getIdToken();
return { user, token };

}
catch(error) {
console.error(error)
  }
}

