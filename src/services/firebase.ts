import admin from 'firebase-admin';
import serviceAccount from '../../firebase-admin-account.json';
import { getApps } from 'firebase-admin/app';

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: 'https://ams24-ef028-default-rtdb.firebaseio.com',
  });
}

export const db = admin.database();
