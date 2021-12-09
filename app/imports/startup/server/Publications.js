import { Meteor } from 'meteor/meteor';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';
import { Profiles } from '../../api/Profiles/Profiles';

Meteor.publish(SurfBreakData.userPublicationName, function () {
  return SurfBreakData.collection.find();
});

Meteor.publish(Profiles.userPublicationName, function () {
  return Profiles.collection.find();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
