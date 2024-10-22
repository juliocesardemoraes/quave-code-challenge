import React, { useEffect, useState } from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { Communities } from '../../communities/communities';
import { People } from '../../people/people';
import ItemList from './People';

export default function Events() {
  const isLoading = useSubscribe('communities');
  const isLoadingPeople = useSubscribe('people');
  const events = useFind(() => Communities.find());
  const [selectedEvent, setSelectedEvent] = useState('');
  const people = useFind(() => People.find());

  useEffect(() => {
    console.log('EVENTS', events);
  }, [events]);

  useEffect(() => {
    console.log('PEOPLE', people);
  }, [people]);

  useEffect(() => {
    console.log('selectedEvent', selectedEvent);
  }, [selectedEvent]);

  return (
    <>
      <form className="mb-2 max-w-sm">
        <label
          forhtml="countries"
          className="mb-2 block text-sm font-medium dark:text-white"
        >
          Select an option
        </label>
        <select
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          onChange={(e) => {
            if (e.target.value.name === '') return;
            const [id, name] = e.target.value.split('-');

            setSelectedEvent({ id: id, name: name });
          }}
        >
          <option value="">Select An event</option>
          {events.map((item) => {
            return (
              <option key={item._id} value={`${item._id}-${item.name}`}>
                {item.name}
              </option>
            );
          })}
        </select>
      </form>
      {selectedEvent?.name}
      {/*
       */}

      <div class="relative overflow-x-auto">
        <table class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Name
              </th>
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Check-in</th>
              <th className="px-6 py-4">Check-out</th>
            </tr>
          </thead>

          {people.map((people) => {
            if (selectedEvent.id === people.communityId) {
              return <ItemList people={people}></ItemList>;
            }
          })}
        </table>
      </div>
    </>
  );
}

/*
{
  "name": "Challenge",
  "_id": "Au3X5Q2LEtA9q2XjD"
}
{
  "firstName": "Rebekah",
  "lastName": "Tempest",
  "communityId": "Au3X5Q2LEtA9q2XjD",
  "_id": "4NshK8zQWqS3L22XR"
}
*/
