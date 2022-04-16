import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD3CyuK6j5a1iHs6Di8XPm3CXzRoPynv7w",
    authDomain: "dental-care-818e6.firebaseapp.com",
    projectId: "dental-care-818e6",
    storageBucket: "dental-care-818e6.appspot.com",
    messagingSenderId: "447791058150",
    appId: "1:447791058150:web:5482bd46679de99bfc7f27"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;