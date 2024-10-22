import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const People = new Mongo.Collection('people');

const updatePeople = async (people, value) => {
  console.log('PEOPLE', people);
  await People.updateAsync(people._id, { $set: value });
};

Meteor.methods({ updatePeople });
