import React from 'react';
import { Meteor } from 'meteor/meteor';

export default function ItemList({ people }) {
  const handleCheckIn = () => {
    Meteor.callAsync('updatePeople', {
      people: people,
      value: { checkIn: true },
    });
  };
  const handleCheckOut = () => {};
  return (
    <tbody key={people._id}>
      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
        <td
          scope="row"
          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
        >
          {`${people.firstName} ${people.lastName}`}
        </td>
        <td className="px-6 py-4">{people.companyName ?? 'N/A'}</td>
        <td className="px-6 py-4">{people.title ?? 'N/A'}</td>
        <td className="px-6 py-4">{people.checkIn ?? 'N/A'}</td>
        <td className="px-6 py-4">{people.checkOut ?? 'N/A'}</td>
        <td className="px-6 py-4">
          <button onClick={() => handleCheckIn(people)}>Check In</button>
        </td>
        <td className="px-6 py-4">
          <button onClick={() => handleCheckOut(people)}>Check Out</button>
        </td>
      </tr>
    </tbody>
  );
}

/*
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Check-in</th>
              <th className="px-6 py-4">Check-out</th>
*/

/*

See the full name (first and last name together), company name, title, check-in date, and check-out date in the `MM/DD/YYYY, HH:mm` format or as `N/A`.
{
  "firstName": "Rebekah",
  "lastName": "Tempest",
  "communityId": "Au3X5Q2LEtA9q2XjD",
  "_id": "4NshK8zQWqS3L22XR"
    title: 'Media Coordinator',
    companyName: 'Accenture',
}
*/
