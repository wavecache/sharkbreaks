import React from 'react';
import { Container, Card, Header } from 'semantic-ui-react';
import Friend from '../components/Friend';
import { contacts } from '../../api/MockObjects';
import { blueTextStyle } from '../layouts/style';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
export default class ListFriends extends React.Component {

  render() {
    return this.renderPage();
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center" style={blueTextStyle}>Friends</Header>
        <Card.Group>
        </Card.Group>
      </Container>
    );
  }
}
