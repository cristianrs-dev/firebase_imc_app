import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyCLNDNZS2nf1NqmJMeexhNOjGa3kHbcBeM",
    authDomain: "autenticar-ebe6b.firebaseapp.com",
    projectId: "autenticar-ebe6b",
    storageBucket: "autenticar-ebe6b.appspot.com",
    messagingSenderId: "1090439310633",
    appId: "1:1090439310633:web:37fff2657d9e11a3459b38",
    measurementId: "G-RGDRBSVT47"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  async function getData() {
    try {
      // Obtem a referência para a coleção "people"
      const peopleCollection = collection(db, "people");
      
      // Obtem os documentos da coleção
      const querySnapshot = await getDocs(peopleCollection);
  
      // Itera sobre cada documento retornado
      querySnapshot.forEach((doc) => {
        console.log(`${doc.data().nome}`);
      });
    } catch (error) {
      console.error("Erro ao ler documentos: ", error);
    }
  }
  
  // Chama a função para ler documentos
  getData();

   async function addData(){
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
  