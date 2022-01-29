// // Listen for a submit 
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBJHYObm4jhSpuaTDyYNIYdCDMZ-AYb_74",
//     authDomain: "portfolio-mail-cf194.firebaseapp.com",
//     projectId: "portfolio-mail-cf194",
//     storageBucket: "portfolio-mail-cf194.appspot.com",
//     messagingSenderId: "475967089683",
//     appId: "1:475967089683:web:576f375a0552f6e76623e6",
//     measurementId: "G-E0EB1FP4KR"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

//   //  Reference contactInfo collections 
//   let contactInfo = firebase.database().ref("infos")

//   // Listen for a submit 
// document.querySelector('.contact-form').addEventListener('submit', submitForm)
// function submitForm(e) {
//     e.preventDefault();
    
//     // Get input values
//     let name = document.querySelector('.name').value;
//     let email = document.querySelector('.email').value;
//     let msg = document.querySelector('.msg').value;
//     console.log(name, email, msg);

//     saveContactInfo(name, email, msg)
// } 

//  // Save infos to firebase 
 
//  function saveContactInfo(name, email, msg) {
//    let newContactInfo = contactInfo.push()
//    newContactInfo.set({
//     name: name,
//     email: email,
//     msg: msg,  
//    })
//  }