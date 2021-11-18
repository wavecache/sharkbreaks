import React from 'react';
import { Card, Image, Icon, Table } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { blueTextStyle, surfBreakCardStyle } from '../layouts/style';

class SurfBreak extends React.Component {
  render() {
    return (
      <Card style={surfBreakCardStyle}>
        <Image src={this.props.surfBreak.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header style={blueTextStyle}>{this.props.surfBreak.name}</Card.Header>
          <Card.Meta>
            <span >{this.props.surfBreak.address}</span>
          </Card.Meta>
          <Card.Description style={surfBreakCardStyle}>
            {this.props.surfBreak.description}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Link >Go to Surf Break page</Link>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {this.props.surfBreak.followersIds.length} Friends are following this break
          </a>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
SurfBreak.propTypes = {
  surfBreak: PropTypes.shape({
    name: PropTypes.string,
    followersIds: PropTypes.array,
    image: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  _id: PropTypes.string,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(SurfBreak);
