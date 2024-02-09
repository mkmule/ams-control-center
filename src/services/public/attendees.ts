import { clientDatabase } from '@/services/firebase/firebase-client';
import { onValue, ref } from '@firebase/database';

export const onAttendeesUpdated = (callback: (numberOfAttendees: number) => void) => {
  const attendeesCountRef = ref(clientDatabase, '/channels/test');
  return onValue(attendeesCountRef, (snapshot) => {
    callback(snapshot.val());
  });
};
