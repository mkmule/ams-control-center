'use client';
import { useState } from 'react';
import { setAttendees } from '@/services/attendees';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentNumberOfAttendees, setCurrentNumberOfAttendees] = useState<number | undefined>();
  const [numberOfAttendees, setNumberOfAttendees] = useState<string>('');

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const numberParsed = Number(numberOfAttendees);
    if (!Number.isInteger(numberParsed)) {
      console.error('Wrong input');
      return;
    }

    setIsLoading(true);
    setAttendees(numberParsed)
      .then((updatedNumberOfAttendees) => {
        setCurrentNumberOfAttendees(updatedNumberOfAttendees);
        setNumberOfAttendees('');
      })
      .catch(() => {
        console.log('ERROR');
      })
      .finally(() => {
        setIsLoading(false);
      })
    ;
  };

  return (
    <main className="flex flex-col items-center justify-center p-4">

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-xl my-2">Current number of attendees: <span
          className="text-3xl">{Number.isInteger(currentNumberOfAttendees) ? currentNumberOfAttendees : 'N/A'}</span>
        </h3>

        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numberOfAttendees"
            type="number"
            placeholder="Default: 0"
            value={numberOfAttendees}
            onChange={e => setNumberOfAttendees(e.target.value)} />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:pointer-events-none"
            type="button"
            onClick={handleUpdate}
            disabled={isLoading}
          >
            Update
          </button>
        </div>
      </form>
    </main>
  );
}
