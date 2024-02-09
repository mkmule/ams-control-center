'use server';
import { adminDatabase } from '@/services/firebase/firebase-admin';

export const setAttendees = async (updatedNumberOfAttendees: number) => {
  const ref = adminDatabase.ref('channels/test');
  await ref.set(updatedNumberOfAttendees);

  return updatedNumberOfAttendees;
};
