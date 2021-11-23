import React from 'react';
import { Button, CardGroup, Container, Header } from 'semantic-ui-react';
import { blueTextStyle } from '../layouts/style';
import { surfBreakMockObjects } from '../../api/MockObjects';
import SurfBreak from '../components/SurfBreak';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SurfBreaks extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (
      <Container>
        <Header style={ blueTextStyle } as="h2" textAlign="center">Surf Breaks</Header>
        <CardGroup centered>
          {surfBreakMockObjects.map((surfBreak, index) => <SurfBreak key={index} surfBreak={surfBreak}/>)}
        </CardGroup>
        <Link to={'/addSurfBreak'}>
          <Button>Add Your Favourite Break!</Button>
        </Link>
      </Container>
    );
  }
}

export default SurfBreaks;
