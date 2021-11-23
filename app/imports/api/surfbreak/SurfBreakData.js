import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The SurfBreakData. It encapsulates state and variable values for stuff.
 */
class SurfBreakCollection {
  constructor() {
    // The name of this collection.
    this.name = 'SurfBreakCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      followersIds: Array.of(String),
      image: String,
      summary: String,
      description: String,
      address: String,
      _id: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the SurfBreakData.
 * @type {SurfBreakCollection}
 */
export const SurfBreakData = new SurfBreakCollection();
