import _ from 'lodash';
import React, { Component } from 'react';
import {
  Button,
  Container, Grid, GridColumn,
  Header,
  Icon,
  Image,
  Menu,
  Visibility,
  Loader,
} from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { blueTextStyle, centerStyle, fixedOverlayMenuStyle, fixedOverlayStyle, overlayMenuStyle, overlayStyle } from '../layouts/style';
import SurfBreakConditions from '../components/SurfBreakPage/SurfBreakConditions';
import SurfBreakMembers from '../components/SurfBreakPage/SurfBreakMembers';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';

class SurfBreakPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuFixed: false,
      overlayFixed: false,
    };
  }

  addUserToLiked(user) {
    let newMembers = this.props.surfBreak.followersIds;
    if (this.props.surfBreak.followersIds.includes(user)) {
      newMembers = _.remove(this.props.surfBreak.followersIds, (userID) => userID === user);
      SurfBreakData.collection.update(this.props.surfBreak._id, { $set: { followersIds: newMembers } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
    } else {
      newMembers.push(user);
      SurfBreakData.collection.update(this.props.surfBreak._id, { $set: { followersIds: newMembers } }, (error) => (error ?
        swal('Error', error.message, 'error') :
        swal('Success', 'Item updated successfully', 'success')));
    }
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state;

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') });
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {

    const { overlayFixed, overlayRect } = this.state;

    return (
      <div>
        <Container id='surfBreakPage-page'>
          <Grid columns={2} >
            <GridColumn style={centerStyle}>
              <Image src={this.props.surfBreak.image} size='large' rounded={true}/>
            </GridColumn>
            <GridColumn style={centerStyle}>
              <SurfBreakConditions lat={this.props.surfBreak.xPos} lon={this.props.surfBreak.yPos}/>
            </GridColumn>
          </Grid>
        </Container>

        <Container text style={{ marginTop: '2em', marginBottom: '2em' }}>
          <Header as='h1' style={ blueTextStyle }>{this.props.surfBreak.name}</Header>
        </Container>

        <Container text>

          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />

          <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
            <Menu
              icon='labeled'
              style={ overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle }
              vertical
            >
              {/* eslint-disable-next-line no-undef */}
              <Menu.Item style={ { color: 'grey' } } onClick={() => window.location.replace(`https://maps.google.com?q=${this.props.surfBreak.xPos},${this.props.surfBreak.yPos}`)}>
                <Icon name='map'/>
                Google maps location
              </Menu.Item>

              <Menu.Item style={ { color: 'grey' } }>
                <Icon name='facebook' />
                Share
              </Menu.Item>

              <Menu.Item style={ { color: 'grey' } }>
                <Icon name='mail' />
                Email
              </Menu.Item>
            </Menu>
          </div>

          <p>{this.props.surfBreak.description}</p>

        </Container>
        <SurfBreakMembers members={this.props.surfBreak.followersIds}/>
        <Container>
          <Button style={blueTextStyle} onClick={() => this.addUserToLiked(Meteor.user().username)}>
            Like this break
          </Button>
        </Container>
      </div>
    );
  }
}

SurfBreakPage.propTypes = {
  surfBreak: PropTypes.shape({
    name: PropTypes.string,
    followersIds: PropTypes.array,
    image: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    xPos: PropTypes.string,
    yPos: PropTypes.string,
    _id: PropTypes.string,
  }),
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const breakId = match.params._id;
  const subscription = Meteor.subscribe(SurfBreakData.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const surfBreak = SurfBreakData.collection.findOne({ _id: breakId });

  return {
    surfBreak,
    ready,
  };
})(SurfBreakPage);
