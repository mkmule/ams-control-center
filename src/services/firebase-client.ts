'use client';
import { initializeApp } from 'firebase/app';
import { getDatabase } from '@firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_CLIENT_API_KEY,
  authDomain: 'ams24-ef028.firebaseapp.com',
  databaseURL: 'https://ams24-ef028-default-rtdb.firebaseio.com',
  projectId: 'ams24-ef028',
  storageBucket: 'ams24-ef028.appspot.com',
  messagingSenderId: '81918373927',
  appId: '1:81918373927:web:d3c068a70e6b162ee2de02',
  measurementId: 'G-BLZ0FX0KCH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
