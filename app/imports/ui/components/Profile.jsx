import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { backgroundStyle, blueTextStyle } from '../layouts/style';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {
  render() {
    return (
      <Card style={ { ...backgroundStyle, ...blueTextStyle } }>
        <Image src={this.props.profile.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header style={ { ...backgroundStyle, ...blueTextStyle } }>{this.props.profile.firstName} {this.props.profile.lastName}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.profile.level}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.profile.bio}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Profile);
