import React from 'react';
import { Button, Comment, Form, Header, Container } from 'semantic-ui-react';
import { blueTextStyle } from '../layouts/style';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
export default class Forum extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return this.renderPage();
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Comment.Group threaded>
          <Header as='h3' style={blueTextStyle} dividing>
            Sharkbreaks Forum
          </Header>

          <Comment style={blueTextStyle}>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
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

          <Comment style={blueTextStyle}>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
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

            <Comment.Group style={blueTextStyle}>
              <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'/>
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

          <Comment style={blueTextStyle}>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>
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
            <Form.TextArea/>
            <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
          </Form>
        </Comment.Group>
      </Container>
    );
  }
}
