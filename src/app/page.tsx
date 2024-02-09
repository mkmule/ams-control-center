'use client';
import { useEffect, useState } from 'react';
import { setAttendees } from '@/services/admin/attendees';
import { onAttendeesUpdated } from '@/services/public/attendees';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentNumberOfAttendees, setCurrentNumberOfAttendees] = useState<number>();
  const [numberOfAttendees, setNumberOfAttendees] = useState<string>('');

  useEffect(() => {
    const unsubscribeAttendeesRef = onAttendeesUpdated(setCurrentNumberOfAttendees);

    return () => {
      unsubscribeAttendeesRef();
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

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <form className="shadow-md border border-black rounded p-8" onSubmit={handleUpdate}>
        <h3 className="text-xl flex items-center mb-6">
          Current number of attendees:
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
    </div>
  );
}
