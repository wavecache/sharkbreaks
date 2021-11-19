import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { blueColor, blueTextStyle } from '../../layouts/style';

class SurfBreakConditions extends React.Component {

  render() {

    return (
      <Segment.Group compact size='massive' style={{ ...blueTextStyle, ...{ borderColor: blueColor } }} >
        <Segment>
          <h4 style={ { ...blueTextStyle, ...{ fontSize: '2rem' } } }>Surfing Conditions</h4>
        </Segment>
        <Segment.Group style={{ borderColor: blueColor }}>
          <Segment>
            <p>Temperature: {this.props.surfBreakConditions.temperature} °F</p>
          </Segment>
          <Segment>
            <p>Wind Speed: {this.props.surfBreakConditions.windSpeed} mph</p>
          </Segment>
          <Segment>
            <p>Wind Direction: {this.props.surfBreakConditions.windDir}</p>
          </Segment>
          <Segment>
            <p>Wave Height: {this.props.surfBreakConditions.waveHeight} feet</p>
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
