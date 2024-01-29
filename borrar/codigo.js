import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, set, child, push, update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'

const firebaseConfig = {
    databaseURL: "https://javascript-test-1-7a3ba-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

setTimeout(() => {
    const user = {
        username: "Fernando",
        email: "fernando.paniagua@gmail.com"
    }
    const newKey = push(child(ref(database), 'users')).key;
    const data = {};
    data[newKey]=user;
    data[newKey+1]=user
    update(ref(database), data);
}, 5000);