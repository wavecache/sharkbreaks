import React from 'react';
import { Card, Container, Header } from 'semantic-ui-react';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
export default class ListProfile extends React.Component {

  contacts = [{
    firstName: 'Philip', lastName: 'Johnson', address: 'POST 307, University of Hawaii',
    image: 'https://philipmjohnson.github.io/images/philip2.jpeg',
    description: 'I am a Professor of Information and Computer Sciences at the University of Hawaii, Director ' +
      'of the Collaborative Software Development Laboratory, and the CEO of OpenPowerQuality.com.',
  },
  ];

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return this.renderPage();
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container fluid>
        <Header as="h2" textAlign="center">Your Profile</Header>
        <Card centered>
          {/* eslint-disable-next-line no-unused-vars */}
          {/* Create a friend component, just copy what you did if it was based on the stuff code */}
        </Card>
      </Container>
    );
  }
}
