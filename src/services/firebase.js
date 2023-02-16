import { initializeApp } from 'firebase/app';



import { getFirestore, collection, getDocs, addDoc ,query,where} from 'firebase/firestore';

   const firebaseConfig = {
    apiKey: "AIzaSyAMIN5nWK1UOi-V8xBddy3APmKJHRXtfP0",
    authDomain: "coderhouse-react-34880.firebaseapp.com",
    projectId: "coderhouse-react-34880",
    storageBucket: "coderhouse-react-34880.appspot.com",
    messagingSenderId: "429166379530",
    appId: "1:429166379530:web:808c97c68d2349c4abd5f3"
   };

   const app = initializeApp(firebaseConfig);

   export const db = getFirestore(app);

   export const items = collection(db, "listaProductos")

   export const getQueryItemsFilteredId = (productoId) => {
       try {
        const q =  query(collection(db, "listaProductos"), where("id",">",productoId))
        return q
       } catch (error) {
           return null
       }
        
   }


    // Crear una función para agregar un nuevo documento a la colección
    export const doCheckout = async (order) => {
    try {
        console.log("doCheckout - order",order)
    // Agregar el documento a la colección usando addDoc
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Documento agregado con ID: ", docRef.id);
    return docRef.id
    } catch (e) {
    console.error("Error al agregar el documento: ", e);
    return null
    }
}
//    getDocs(items).then((snapshot)=>{

//       console.log(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))); //Vemos a guardarlo en un estado despues ahora muestra el array

//    })


