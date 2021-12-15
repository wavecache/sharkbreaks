import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { blueColor, blueTextStyle, subMenuStyle } from '../../layouts/style';

class SurfBreakMembers extends React.Component {

  /* addUserToLiked(user) {
     const newMembers = this.props.members;
    newMembers.push(user);
    SurfBreakData.collection.update(this.props.surfBreakId, { $set: { followersIds: newMembers } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  } */

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
        </Segment.Group>
      </Container>
    );
  }
}

SurfBreakMembers.propTypes = {
  members: PropTypes.array.isRequired,
};

export default SurfBreakMembers;
