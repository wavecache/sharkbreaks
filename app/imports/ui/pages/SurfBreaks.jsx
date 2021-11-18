import React from 'react';
import { CardGroup, Container, Header, Loader } from 'semantic-ui-react';
import Contact from '../components/Contact';
import { surfBreakMockObjects } from '../../api/MockObjects';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SurfBreaksList extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">List Contacts</Header>
        <CardGroup>
          {this.props.surfBreakMockObjects.map((contact, index) => <Contact key={index}> }
        </CardGroup>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
SurfBreaksList.propTypes = {
  contacts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Contacts.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready() && Meteor.subscribe(Notes.userPublicationName).ready();
  // Get the Stuff documents
  const contacts = Contacts.collection.find({}).fetch();
  const notes = Notes.collection.find({}).fetch();
  return {
    contacts,
    ready,
    notes,
  };
})(SurfBreaksList);