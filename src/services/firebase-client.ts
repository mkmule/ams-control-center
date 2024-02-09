'use client';
import { initializeApp } from 'firebase/app';
import { getDatabase } from '@firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCW-wfTg59-YKbGZ5gW6hggy4ZVUgP-q14',
  authDomain: 'ams24-ef028.firebaseapp.com',
  databaseURL: 'https://ams24-ef028-default-rtdb.firebaseio.com',
  projectId: 'ams24-ef028',
  storageBucket: 'ams24-ef028.appspot.com',
  messagingSenderId: '81918373927',
  appId: '1:81918373927:web:006edbd441d9f488e2de02',
  measurementId: 'G-T4SVXYFYCC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
