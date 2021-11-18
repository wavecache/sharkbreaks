import React from 'react';
import { blueColor, whiteTextStyle } from '../layouts/style';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {

  render() {

    return (
      <footer style={ { backgroundColor: blueColor } }>
        <div style={whiteTextStyle} className="ui center aligned container">
          <hr color={blueColor}/>
              WaveCache <br />
              University of Hawaii<br />
              Honolulu, HI 96822 <br />
          <a
            href="https://github.com/wavecache/sharkbreaks"
            style={ { color: 'white' } }>
            Go to Github Home Page
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
