import React from 'react';
import { Button, CardGroup, Container, Header, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { blueTextStyle } from '../layouts/style';
import SurfBreak from '../components/SurfBreak';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SurfBreaks extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
      <Container>
        <Header style={ blueTextStyle } as="h2" textAlign="center">Surf Breaks</Header>
        <CardGroup centered>
          {this.props.surfBreaks.map((surfBreak, index) => <SurfBreak key={index} surfBreak={surfBreak}/>)}
        </CardGroup>
        {this.props.currentUser === '' ? null : (
          <Link to={'/addSurfBreak'}>
            <Button>Add Your Favourite Break!</Button>
          </Link>
        )}
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
SurfBreaks.propTypes = {
  surfBreaks: PropTypes.array.isRequired,
  currentUser: PropTypes.string,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(SurfBreakData.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const surfBreaks = SurfBreakData.collection.find({}).fetch();
  return {
    currentUser: Meteor.user() ? Meteor.user().username : '',
    surfBreaks,
    ready,
  };
})(SurfBreaks);
