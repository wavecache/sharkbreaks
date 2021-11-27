import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { landingHeader } from '../layouts/style';
import { getWeatherData } from '../../api/weatherData/weatherData';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  constructor(props) {
    super(props);
    getWeatherData('honolulu');
  }

  render() {
    return (
      <div style={{ backgroundImage: 'url(./images/Images/RockyPoint.jpg)',
        backgroundSize: 'cover',
        height: '700px',
        paddingTop: '300px',
        paddingRight: '400px',
      }}>
        <Grid id='landing-page' verticalAlign='center' textAlign='center' container>

          <Grid.Column width={7} floated = 'left'>
            <Header style={landingHeader} as='h1' inverted>Wave Cache</Header>
            <Header as='h3' inverted>
              Hello Surfing World! And welcome to Wave Cache, the place for you to cache all the gnarliest waves.
              We have compiled a list of our favorites, with some killer info and weather reports. All we need is
              for you to use all of it to make some friends, be safe and shred some waves!
            </Header>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default Landing;
