// noinspection DuplicatedCode
import { Meteor } from 'meteor/meteor';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';

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
