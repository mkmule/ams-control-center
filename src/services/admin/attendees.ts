'use server';
import { adminDatabase } from '@/services/firebase/firebase-admin';
import { Meeting } from '@/types/business';

export const setAttendees = async (updatedNumberOfAttendees: number) => {
  const ref = adminDatabase.ref('channels/test');
  await ref.set(updatedNumberOfAttendees);

  return updatedNumberOfAttendees;
};

export const addMeeting = async (meeting: Meeting) => {
  const ref = adminDatabase.ref(`meetings/${meeting.uid}`);
  await ref.set(meeting);

  return meeting;
};
