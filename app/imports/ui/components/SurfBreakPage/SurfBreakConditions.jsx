import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SurfBreakConditions extends React.Component {

  render() {

    return (
      <Segment.Group>
        <Segment>
          <p>Surfing Conditions</p>
        </Segment>
        <Segment.Group>
          <Segment>
            <p>Temperature: {this.props.surfBreakConditions.temperature} °F</p>
          </Segment>
          <Segment>
            <p>Wind Speed: {this.props.surfBreakConditions.windSpeed} mph</p>
          </Segment>
          <Segment>
            <p>Wind Direction: {this.props.surfBreakConditions.windDir}</p>
          </Segment>
        </Segment.Group>
      </Segment.Group>
    );
  }
}

SurfBreakConditions.propTypes = {
  surfBreakConditions: PropTypes.shape({
    temperature: PropTypes.number,
    windSpeed: PropTypes.number,
    windDir: PropTypes.string,
    waveHeight: PropTypes.number,
  }).isRequired,
  _id: PropTypes.string,
};

export default SurfBreakConditions;
