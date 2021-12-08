import React from 'react';
import { Button, CardGroup, Container, Header, Input, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { blueTextStyle, buttonStyle, searchBarStyle } from '../layouts/style';
import SurfBreak from '../components/SurfBreak';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SurfBreaks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSurfBreaks: [] };
    this.initialValue = true;
  }

  filterSurfBreaks(surfBreaksSearch, allSurfBreaks) {
    if (surfBreaksSearch === '') {
      this.setState(() => ({ currentSurfBreaks: allSurfBreaks }));
      return;
    }
    this.setState(() => {
      const filteredBreaks = _.filter(allSurfBreaks, (surfBreak) => {
        const searchLength = surfBreaksSearch.length;
        return surfBreak.name.substr(0, searchLength) === surfBreaksSearch;
      });
      return { currentSurfBreaks: filteredBreaks };
    });
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    let renderSurfBreaks = [];
    if (this.state.currentSurfBreaks.length === 0 && this.initialValue) {
      this.initialValue = false;
      renderSurfBreaks = this.props.surfBreaks;
    } else {
      renderSurfBreaks = this.state.currentSurfBreaks;
    }
    return (
      <Container id='surfBreaks-page'>
        <Header style={ blueTextStyle } as="h2" textAlign="center">Surf Breaks</Header>
        <Input placeholder='' size='big' style={searchBarStyle} label='Filter' onChange={(surfBreaks) => this.filterSurfBreaks(surfBreaks.target.value, this.props.surfBreaks)}/>
        <CardGroup centered>
          {renderSurfBreaks.map((surfBreak, index) => <SurfBreak surfBreakCard={this} id={`surfBreak${index}`} key={index} surfBreak={surfBreak} currentUser={this.props.currentUser}/>)}
        </CardGroup>
        {this.props.currentUser === '' ? null : (
          <Link to={'/addSurfBreak'} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={buttonStyle}>Add Your Favourite Break!</Button>
          </Link>
        )}
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
SurfBreaks.propTypes = {
  surfBreaks: PropTypes.array.isRequired,
  currentUser: PropTypes.string,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(SurfBreakData.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const surfBreaks = SurfBreakData.collection.find({}).fetch();
  return {
    currentUser: Meteor.user() ? Meteor.user().username : '',
    surfBreaks,
    ready,
  };
})(SurfBreaks);
