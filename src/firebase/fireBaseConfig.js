import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDe73xn95WqjBLqkksVMxqMc3MALITlFtM",
    authDomain: "silicoderreact.firebaseapp.com",
    projectId: "silicoderreact",
    storageBucket: "silicoderreact.appspot.com",
    messagingSenderId: "669835619129",
    appId: "1:669835619129:web:2d859e2675937fa28cd6e8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);