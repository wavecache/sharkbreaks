import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Comment, Form, Header, Loader, Container } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Stuffs } from '../../api/stuff/Stuff';
import { blueTextStyle } from '../layouts/style';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Forum extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Comment.Group threaded>
          <Header as='h3' style={ blueTextStyle } dividing>
          Sharkbreaks Forum
          </Header>

          <Comment style={ blueTextStyle } >
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <span>Today at 5:42PM</span>
              </Comment.Metadata>
              <Comment.Text>Ho surf was mean brah!</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment style={ blueTextStyle }>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <span>Yesterday at 12:30AM</span>
              </Comment.Metadata>
              <Comment.Text>
                <p>Eh no be one kook dawg</p>
              </Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group style={ blueTextStyle }>
              <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <span>Just now</span>
                  </Comment.Metadata>
                  <Comment.Text>My bad braddah :)</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment style={ blueTextStyle }>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <span>5 days ago</span>
              </Comment.Metadata>
              <Comment.Text>Rubbah duck</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
Forum.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const stuffs = Stuffs.collection.find({}).fetch();
  return {
    stuffs,
    ready,
  };
})(Forum);
