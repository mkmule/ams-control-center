'use server';
import { db } from '@/services/firebase';

export const setAttendees = async (updatedNumberOfAttendees: number) => {
  const ref = db.ref('channels/test');
  await ref.set(updatedNumberOfAttendees);

  return updatedNumberOfAttendees;
};
