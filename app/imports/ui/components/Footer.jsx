import React from 'react';
import { blueColor, blueTextStyle } from '../layouts/style';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div style={blueTextStyle} className="ui center aligned container">
          <hr color={blueColor}/>
              WaveCache <br />
              University of Hawaii<br />
              Honolulu, HI 96822 <br />
          <a href="https://github.com/wavecache/sharkbreaks">Github Home Page</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
