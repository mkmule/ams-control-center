'use client';
import { useEffect, useState } from 'react';
import { addMeeting, setAttendees } from '@/services/admin/attendees';
import { onAttendeesUpdated, onMeetingsUpdated } from '@/services/public/attendees';
import MeetingsTable from '@/components/MeetingsTable';
import NewMeetingForm from '@/components/NewMeetingForm';
import { Meeting } from '@/types/business';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentNumberOfAttendees, setCurrentNumberOfAttendees] = useState<number>();
  const [numberOfAttendees, setNumberOfAttendees] = useState<string>('');
  const [activeMeetings, setActiveMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    const unsubscribeAttendeesRef = onAttendeesUpdated(setCurrentNumberOfAttendees);

    return () => {
      unsubscribeAttendeesRef();
    };
  }, []);

  useEffect(() => {
    const unsubscribeMeetingsRef = onMeetingsUpdated(setActiveMeetings);

    return () => {
      unsubscribeMeetingsRef();
    };
  }, []);

  const handleUpdate = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numberParsed = Number(numberOfAttendees);
    if (!Number.isInteger(numberParsed)) {
      console.error('Wrong input');
      return;
    }

    setIsLoading(true);
    setAttendees(numberParsed)
      .then(() => {
        setNumberOfAttendees('');
      })
      .catch((error) => {
        alert('Sorry, there was an error.');
        console.error('ams-control-center_handleUpdate', error);
      })
      .finally(() => {
        setIsLoading(false);
      })
    ;
  };

  const handleMeetingCreated = async (meeting: Meeting) => {
    await addMeeting(meeting);
  };

  return (
    <div className="container mx-auto p-4 max-w-[756px]">
      <form className="shadow-md border border-black rounded p-8" onSubmit={handleUpdate}>
        <h3 className="text-xl text-center mb-6">
          Current Number of Attendees
          <br />
          <span className="text-3xl ml-1">
            {Number.isInteger(currentNumberOfAttendees) ? currentNumberOfAttendees : 'N/A'}
          </span>
        </h3>

        <div className="mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Default: 0"
            value={numberOfAttendees}
            onChange={e => setNumberOfAttendees(e.target.value)} />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:pointer-events-none"
            type="submit"
            disabled={isLoading}
          >
            Update
          </button>
        </div>
      </form>

      <div className="my-4">
        <NewMeetingForm handleMeetingCreated={handleMeetingCreated} />
      </div>
      <MeetingsTable meetings={activeMeetings} />
    </div>
  );
}
