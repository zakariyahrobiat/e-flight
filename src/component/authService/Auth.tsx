import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../../fireBase";

interface props{
    email:string,
    password:string
}

export const registerUser= async({email, password}:props)=>{
    
    try{
const createUser = await createUserWithEmailAndPassword(auth, email, password)
const userId = createUser.user.uid
console.log(userId);

return userId
  
}
  catch(error) {
    console.error(error);
    throw error;
  };
}


export const loginUser = async({email,password}:props)=>{
   try{
    
  const signInUser = await signInWithEmailAndPassword(auth, email, password)
  const token = await signInUser.user.getIdToken()
  if(token){
    console.log("Token retrieved:", token);
  return token 
  }
   }
  catch(error) {
    console.error("Failed to retrieve token");
    throw error;
    };
}


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
