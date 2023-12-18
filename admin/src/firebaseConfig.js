
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDcvEW1O_rHtx2AXvI1tfwUZu6fbcTrMtI",
    authDomain: "netflix-cl-85184.firebaseapp.com",
    projectId: "netflix-cl-85184",
    storageBucket: "netflix-cl-85184.appspot.com",
    messagingSenderId: "215077371074",
    appId: "1:215077371074:web:7f50299caf64bafef84f5b",
    measurementId: "G-ND8NGPS7WH"
  };

export const app = initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;