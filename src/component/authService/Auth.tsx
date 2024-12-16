import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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


export const LoginUser = async({email,password}:props)=>{
   try{
  const signInUser = await signInWithEmailAndPassword(auth, email, password)
  return signInUser 
   }
  catch(error) {
    console.error(error);
    throw error;
    };
}

