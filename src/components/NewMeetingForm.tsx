'use client';
import { Meeting } from '@/types/business';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  handleMeetingCreated: (meeting: Meeting) => void;
}

const NewMeetingForm = ({ handleMeetingCreated }: Props) => {

  const [name, setName] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleMeetingCreated({ uid: uuidv4(), name, numberOfParticipants: 0 });
    setName('');
  };

  return (
    <div className="shadow-md border border-black rounded p-4 w-full">
      <h3 className="text-xl text-center mb-2">
        Create new meeting
      </h3>

      <form className="flex justify-center items-center" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 font-medium text-green-600 dark:text-green-500 hover:underline"
          disabled={!name.length}
        >
          Create
        </button>
      </form>
    </div>

  );
};

export default NewMeetingForm;