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
import { blueTextStyle, centerStyle, fixedOverlayMenuStyle, fixedOverlayStyle, overlayMenuStyle, overlayStyle } from '../layouts/style';
<<<<<<< HEAD
import { membersMockArray } from '../../api/MockObjects';
=======
import { membersMockArray, paragraph, surfBreakConditionMockObject } from '../../api/MockObjects';
>>>>>>> parent of d4f46bd (Merge branch 'master' into issue-17-profile-page)
import SurfBreakConditions from '../components/SurfBreakPage/SurfBreakConditions';
import SurfBreakMembers from '../components/SurfBreakPage/SurfBreakMembers';

export default class SurfBreakPage extends Component {

  surfBreakPage = {
    name: 'PUA’ENA POINT',
    followersIds: ['sldknflskdnf', 'sdlkfnvosdfngo'],
    image: 'https://lushpalm.com/wp-content/uploads/2017/11/oahu-surf-spots-haleiwa.webp',
    description: paragraph,
    address: '59-337 Ke Nui Rd, Haleiwa, HI 96712',
    _id: 'sfgebfefgbrgnhfgndfbdfb',
  }

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
              <SurfBreakConditions lat='10' lon='10'/>
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

/* SurfBreakPage.propTypes = {
  surfBreakPage: PropTypes.shape({
    name: PropTypes.string,
    followersIds: PropTypes.array,
    image: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
}; */
