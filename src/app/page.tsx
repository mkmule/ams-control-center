'use client';
import { useEffect, useState } from 'react';
import { addMeeting, deleteMeeting, setMeeting } from '@/services/admin/attendees';
import { onMeetingsUpdated } from '@/services/public/attendees';
import MeetingsTable from '@/components/MeetingsTable';
import NewMeetingForm from '@/components/NewMeetingForm';
import { Meeting } from '@/types/business';

export default function Home() {
  const [activeMeetings, setActiveMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const unsubscribeMeetingsRef = onMeetingsUpdated(setActiveMeetings);

    return () => {
      unsubscribeMeetingsRef();
    };
  }, []);

  const handleCreateMeeting = async (meeting: Meeting) => {
    await addMeeting(meeting);
  };
  const handleDelete = async (meeting: Meeting) => {
    await deleteMeeting(meeting);
  };
  const handleUpdate = async (meeting: Meeting) => {
    await setMeeting(meeting);
  };

  return (
    <div className="container mx-auto p-4 max-w-[756px]">
      <div className="my-4">
        <NewMeetingForm onCreate={handleCreateMeeting} />
      </div>
      <MeetingsTable
        meetings={activeMeetings}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
