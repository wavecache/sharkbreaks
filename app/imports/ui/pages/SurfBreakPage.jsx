import _ from 'lodash';
import React, { Component } from 'react';
import {
  Container, Grid, GridColumn,
  Header,
  Icon,
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { blueTextStyle, centerStyle, fixedOverlayMenuStyle, fixedOverlayStyle, overlayMenuStyle, overlayStyle } from '../layouts/style';
import { membersMockArray, paragraph, surfBreakConditionMockObject } from '../../api/MockObjects';
import SurfBreakConditions from '../components/SurfBreakPage/SurfBreakConditions';
import SurfBreakMembers from '../components/SurfBreakPage/SurfBreakMembers';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';

class SurfBreakPage extends Component {

  surfBreakPage = this.props.surfBreak;

  state = {
    menuFixed: false,
    overlayFixed: false,
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
    const { overlayFixed, overlayRect } = this.state;

    return (
      <div>
        <Container>
          <Grid columns={2} >
            <GridColumn style={centerStyle}>
              <Image src={this.surfBreakPage.image} size='large' rounded={true}/>
            </GridColumn>
            <GridColumn style={centerStyle}>
              <SurfBreakConditions surfBreakConditions={surfBreakConditionMockObject}/>
            </GridColumn>
          </Grid>
        </Container>

        <Container text style={{ marginTop: '2em', marginBottom: '2em' }}>
          <Header as='h1' style={ blueTextStyle }>{this.surfBreakPage.name}</Header>
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
              <Menu.Item style={ { color: 'grey' } }>
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

          {_.times(3, (i) => (
            <p>{this.surfBreakPage.description} {i}</p>
          ))}
        </Container>
        <SurfBreakMembers members={membersMockArray}/>
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
    _id: PropTypes.string,
  }).isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(SurfBreakData.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const surfBreak = SurfBreakData.collection.findOne(documentId);
  return {
    surfBreak,
    ready,
  };
})(SurfBreakPage);
