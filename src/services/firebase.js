import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

//En produccion, estas credenciales deberían estar en un .env
const firebaseConfig = {
    apiKey: "AIzaSyAMIN5nWK1UOi-V8xBddy3APmKJHRXtfP0",
    authDomain: "coderhouse-react-34880.firebaseapp.com",
    projectId: "coderhouse-react-34880",
    storageBucket: "coderhouse-react-34880.appspot.com",
    messagingSenderId: "429166379530",
    appId: "1:429166379530:web:808c97c68d2349c4abd5f3"
};

//Definimos lo base para conectarnos
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//Exportamos la coleeciión que tiene la lista de productos en el carrito
export const items = collection(db, "listaProductos")

// Crear una función para agregar un nuevo documento a la colección
export const doCheckout = async (order) => {
    try {
        // Agregar el documento a la colección usando addDoc
        const docRef = await addDoc(collection(db, "orders"), order);
        return docRef.id;
    } catch (e) {
        return null;
    }
};


