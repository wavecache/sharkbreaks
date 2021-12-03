// noinspection DuplicatedCode
import { Meteor } from 'meteor/meteor';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';
import { Profiles } from '../../api/Profiles/Profiles';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addSurfBreak(data) {
  console.log('Adding Surf Break');
  SurfBreakData.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (SurfBreakData.collection.find().count() === 0) {
  // noinspection JSUnresolvedVariable
  if (Meteor.settings.defaultSurfBreaks) {
    console.log('Creating default data.');
    Meteor.settings.defaultSurfBreaks.map(data => addSurfBreak(data));
  }
}

function addProfile(profile) {
  console.log('Adding Profile');
  Profiles.collection.insert(profile);
}

// Initialize the StuffsCollection if empty.
if (Profiles.collection.find().count() === 0) {
  // noinspection JSUnresolvedVariable
  if (Meteor.settings.defaultProfiles) {
    console.log('Creating default profile.');
    Meteor.settings.defaultProfiles.map(profile => addProfile(profile));
  }
}
