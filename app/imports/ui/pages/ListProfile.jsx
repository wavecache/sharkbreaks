import React from 'react';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Profiles } from '../../api/Profiles/Profiles';
import Profile from '../components/Profile';
import { blueTextStyle } from '../layouts/style';
import { profiles } from '../../api/MockObjects';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListProfile extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container fluid>
        <Header as="h2" textAlign="center" style={blueTextStyle}>Your Profile</Header>
        <Card.Group>
          {profiles.map((profile, index) => <Profile key={index} profile={profile}/>)}
        </Card.Group>
        <Card.Group>
          { /* this.props.profiles.map((profile, index) => <Profile key={index} profile={profile}/>) */ }
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListProfile.propTypes = {
  profiles: PropTypes.array,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Profiles.userPublicationName);
  // Determine if the subscription is ready
  // Get the Stuff documents
  return {
    profile: Profiles.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListProfile);
