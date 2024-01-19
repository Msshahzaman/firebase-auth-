

import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword   } from "firebase/auth";
import { getFirestore,collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";



const firebaseConfig = {
  apiKey: "AIzaSyABle_VfRghiiybEIBsGUUuqzU5ZksLq2M",
  authDomain: "fir-auth-abd4d.firebaseapp.com",
  projectId: "fir-auth-abd4d",
  storageBucket: "fir-auth-abd4d.appspot.com",
  messagingSenderId: "57584761567",
  appId: "1:57584761567:web:d748051f6a26f2474d876a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);




export async function register(userinfo){



  try{
    const {email,password,age,fname} = userinfo

    await createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(db,"firebaseolx"), {
        fname,
        age,
        email,
      });
    
alert('succes register')


  } catch(e){

alert(e.message)
  }
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//     alert("register success")
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     alert(errorMessage)

//   });


}


export async function login(userinfo){

    try{
        const {email,password} = userinfo

      await  signInWithEmailAndPassword(auth, email, password)
      alert("login succes")
return true;
        
    }catch(e){
        alert(e.message)
        throw e;
    }

}

// .then((userCredential) => {
//   // Signed in 
//   const user = userCredential.user;
//   // ...
//   alert("login success")

// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;

//   alert(errorMessage)

export async function sellitem(userinfo){



    try{
      const {tital,desc,price} = userinfo
  
    //   await createUserWithEmailAndPassword(auth, email, password)
      await addDoc(collection(db,"firebaseolx"), {
          tital,
          desc,
          price,
        });
      
  alert('add succesfuly psred')
  
  
    } catch(e){
  
  alert(e.message)
    }
  //   .then((userCredential) => {
  //     // Signed up 
  //     const user = userCredential.user;
  //     // ...
  //     alert("register success")
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //     alert(errorMessage)
  
  //   });
  
  
  }







 



































































// const firebaseConfig = {
//   apiKey: "AIzaSyCPUud_b7i6J6L4g5dUQW1JAy_-eFkL5ks",
//   authDomain: "fir-authentication-3d0aa.firebaseapp.com",
//   projectId: "fir-authentication-3d0aa",
//   storageBucket: "fir-authentication-3d0aa.appspot.com",
//   messagingSenderId: "38734537214",
//   appId: "1:38734537214:web:95e3c724c45966d511a0af"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);






// export function register(UserInfo){

// const {email,password} = UserInfo


//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       // ...
//       console.log("Signup successfully")

//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//       console.log(errorMessage)

//     });

// }
//  export function login(UserInfo){

//     const {email,password} = UserInfo


//     signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//     alert("login successfully")

//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;

//   alert(errorMessage)

//   });


//  }



