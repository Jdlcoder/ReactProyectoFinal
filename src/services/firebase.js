import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

//Definimos un archivo .env para no exponer datos sensibles
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID    
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


