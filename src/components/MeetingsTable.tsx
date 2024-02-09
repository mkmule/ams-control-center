'use client';
import { Meeting } from '@/types/business';
import { useMemo } from 'react';

interface Props {
  meetings: Meeting[];
}

const MeetingTableRow = ({ meeting: { uid, name, numberOfParticipants } }: { meeting: Meeting }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
      <td className="px-6 py-4 text-gray-700 dark:text-white">
        {name}
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {numberOfParticipants}
      </td>
      <td className="px-6 py-4 text-gray-900 dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <button
              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M1 1h16" />
              </svg>
            </button>
            <div>
              <input type="number" id="first_product"
                     className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="1" required />
            </div>
            <button
              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="mt-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Confirm
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <button
          type="button"
          className="mt-2 font-medium bg-red-500 hover:bg-red-700 text-white py-2 px-4 border border-red-700 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

const MeetingsTable = ({ meetings }: Props) => {
  const meetingsSorted = useMemo(() => {
    return meetings.sort((a, b) => a.name.localeCompare(b.name));
  }, [meetings]);

  return (
    <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      {meetingsSorted.length > 0 ?
        (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                # Participants
              </th>
              <th scope="col" className="px-6 py-3">
                Update # Participants
              </th>
              <th scope="col" className="px-6 py-3">
                Delete Meeting
              </th>
            </tr>
            </thead>
            <tbody>
            {meetingsSorted.map(meeting => <MeetingTableRow key={meeting.uid} meeting={meeting} />)}
            </tbody>
          </table>
        )
        :
        (<h2 className="text-sm p-4">No active meetings</h2>)
      }
    </div>
  );
};

export default MeetingsTable;
