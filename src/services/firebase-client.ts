'use client';
import { initializeApp } from 'firebase/app';
import { getDatabase } from '@firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_API_KEY,
  authDomain: 'ams24-ef028.firebaseapp.com',
  databaseURL: 'https://ams24-ef028-default-rtdb.firebaseio.com',
  projectId: 'ams24-ef028',
  storageBucket: 'ams24-ef028.appspot.com',
  messagingSenderId: '81918373927',
  appId: '1:81918373927:web:4aa32e4700cf0cb8e2de02',
  measurementId: 'G-ZEEXB99JRJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
