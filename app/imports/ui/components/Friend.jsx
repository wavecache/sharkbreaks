import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { backgroundStyle, blueTextStyle } from '../layouts/style';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Friend extends React.Component {
  render() {
    return (
      <Card style={ { ...backgroundStyle, ...blueTextStyle } }>
        <Image src={this.props.friend.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header style={ { ...backgroundStyle, ...blueTextStyle } }>{this.props.friend.firstName} {this.props.friend.lastName}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.friend.level}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.friend.bio}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Friend.propTypes = {
  friend: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Friend);
