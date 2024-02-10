'use server';
import { adminDatabase } from '@/services/firebase/firebase-admin';
import { Meeting } from '@/types/business';

export const addMeeting = async (meeting: Meeting) => {
  const ref = adminDatabase.ref(`meetings/${meeting.uid}`);
  await ref.set(meeting);

  return meeting;
};
export const deleteMeeting = async (meeting: Meeting) => {
  const ref = adminDatabase.ref(`meetings/${meeting.uid}`);
  await ref.remove();

  return meeting;
};

export const setMeeting = async (meeting: Meeting) => {
  const ref = adminDatabase.ref(`meetings/${meeting.uid}`);
  await ref.set(meeting);

  return meeting;
};
