import _ from 'lodash';
import React, { Component } from 'react';
import {
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { blueTextStyle, fixedOverlayMenuStyle, fixedOverlayStyle, overlayMenuStyle, overlayStyle } from '../layouts/style';
import { paragraph } from '../../api/MockObjects';

const LeftImage = () => (
  <Image
    floated='left'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em 2em 2em -4em' }}
  />
);

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em -4em 2em 2em' }}
  />
);

export default class SurfBreakPage extends Component {
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

        <Container text style={{ marginTop: '2em', marginBottom: '2em' }}>
          <Header as='h1' style={ blueTextStyle }>{this.props.surfBreakPage.name}</Header>
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
            <Paragraph key={i} />
          ))}
        </Container>
      </div>
    );
  }
}

SurfBreakPage.propTypes = {
  surfBreakPage: PropTypes.shape({
    name: PropTypes.string,
    followersIds: PropTypes.array,
    image: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
