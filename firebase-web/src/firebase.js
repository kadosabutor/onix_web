// src/firebase.js
import { initializeApp } from "firebase/app";
// 1. Kiegészítés: Importáljuk a Firestore adatbázis modult
import { getFirestore } from "firebase/firestore";

// A te egyedi Firebase konfigurációd az 'okoskert-dev' projekthez
const firebaseConfig = {
  apiKey: "AIzaSyBNjWPmFNTppoAw7YW3w90NvByXtfKwPR4",
  authDomain: "okoskert-dev.firebaseapp.com",
  projectId: "okoskert-dev",
  storageBucket: "okoskert-dev.firebasestorage.app",
  messagingSenderId: "53888308853",
  appId: "1:53888308853:web:5ad9e8943e2780a768ca3c"
};

// Inicializáljuk az alap Firebase alkalmazást
const app = initializeApp(firebaseConfig);

// 2. Kiegészítés: Létrehozzuk és exportáljuk az adatbázis kapcsolatot (db),
// hogy a React komponenseink (pl. az App.jsx) tudják használni.
export const db = getFirestore(app);