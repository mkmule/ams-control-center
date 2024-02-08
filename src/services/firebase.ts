import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

const env = process.env.NODE_ENV;

if (!getApps().length) {
  if (env == 'development') {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || '').replace(/\\n/gm, '\n'),
      }),
      databaseURL: 'https://ams24-ef028-default-rtdb.firebaseio.com',
    });
  } else {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: 'https://ams24-ef028-default-rtdb.firebaseio.com',
    });
  }
}

export const db = admin.database();
