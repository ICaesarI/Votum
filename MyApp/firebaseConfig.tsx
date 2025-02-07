import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { DB_apiKey, DB_authDomain, DB_projectId, DB_storageBucket, DB_messagingSenderId, DB_appId, DB_measurementId } from '@env';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: DB_apiKey,
  authDomain: DB_authDomain,
  projectId: DB_projectId,
  storageBucket: DB_storageBucket,
  messagingSenderId: DB_messagingSenderId,
  appId: DB_appId,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
