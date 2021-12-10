import React from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import _ from 'underscore';
import PropTypes from 'prop-types';
import { SurfBreakData } from '../../../api/surfbreak/SurfBreakData';
import { blueColor, blueTextStyle, subMenuStyle } from '../../layouts/style';

class SurfBreakMembers extends React.Component {

  addUserToLiked(user) {
    const surfBreak = SurfBreakData.collection.findOne(this.documentID);
    if (_.contains(surfBreak.followersIds, user) === true) {
      surfBreak.followersIds = _.reject(surfBreak.followersIds, function (userID) { return userID === user; });
    } else {
      surfBreak.followersIds.push(user);
    }
  }

  render() {

    return (
      <Container style={ { paddingTop: '2em' } } >
        <Segment.Group compact size='large' style={ subMenuStyle }>
          <Segment>
            <h4 style={{ ...blueTextStyle, ...{ fontSize: '2rem' } }}>Users Who Like This Break</h4>
          </Segment>
          <Segment.Group style={{ borderColor: blueColor }}>
            {
              this.props.members.map((member, index) => (
                <Segment key={index}>
                  <a href='somelink'>{member}</a>
                </Segment>
              ))
            }
          </Segment.Group>
          <Button style={blueTextStyle} Active onClick={this.addUserToLiked(Meteor.user().username)}>
            Like this break
          </Button>
        </Segment.Group>
      </Container>
    );
  }
}

SurfBreakMembers.propTypes = {
  members: PropTypes.array.isRequired,
};

export default SurfBreakMembers;
