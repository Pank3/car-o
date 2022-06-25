//firebase connection
//(firebase configuration)
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyCI6VMODwTqiEnZ4hz_DNSkyGWasNHWyIE",
  // authDomain: "caro-878c2.firebaseapp.com",
  // databaseURL: "https://caro-878c2-default-rtdb.firebaseio.com",
  // projectId: "caro-878c2",
  // storageBucket: "caro-878c2.appspot.com",
  // messagingSenderId: "58609857169",
  // appId: "1:58609857169:web:d9b70d94bedea06fd10530",
  // measurementId: "G-7YF1SEQT1S"

  
    apiKey: "AIzaSyBqhabpysBl6Asw1pGjVd0WwJnzm9nuV-c",
    authDomain: "fir-47899.firebaseapp.com",
    projectId: "fir-47899",
    storageBucket: "fir-47899.appspot.com",
    messagingSenderId: "467452866325",
    appId: "1:467452866325:web:5ba56389e244837a2c831c",
    measurementId: "G-B6HK7YRWZB"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
