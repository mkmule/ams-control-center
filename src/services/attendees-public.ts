import { database } from '@/services/firebase-client';
import { ref } from '@firebase/database';

export const getAttendeesRef = () => {
  return ref(database, '/channels/test');
};
