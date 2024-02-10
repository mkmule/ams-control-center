import { clientDatabase } from '@/services/firebase/firebase-client';
import { onValue, ref } from '@firebase/database';
import { Meeting } from '@/types/business';

export const onMeetingsUpdated = (callback: (meetings: Meeting[]) => void) => {
  const meetingsRef = ref(clientDatabase, '/meetings');

  return onValue(meetingsRef, (snapshot) => {
    const meetings = Object.values(snapshot.val() || {});
    callback(meetings as Meeting[]);
  });
};
