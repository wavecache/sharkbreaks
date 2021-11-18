import React from 'react';
import { CardGroup, Container, Header } from 'semantic-ui-react';
import { blueTextStyle } from '../layouts/style';
import { surfBreakMockObjects } from '../../api/MockObjects';
import SurfBreak from '../components/SurfBreak';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SurfBreaks extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (
      <Container>
        <Header style={ blueTextStyle } as="h2" textAlign="center">Surf Breaks</Header>
        <CardGroup>
          {surfBreakMockObjects.map((surfBreak, index) => <SurfBreak key={index} surfBreak={surfBreak}/>)}
        </CardGroup>
      </Container>
    );
  }
}

export default SurfBreaks;
