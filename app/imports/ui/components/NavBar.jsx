import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Container } from 'semantic-ui-react';
import '../../../client/style.css';
import { menuStyle, subMenuStyle, subMenuItemStyle } from '../layouts/style';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
      <Container>
        <Menu style={menuStyle} attached="top" borderless inverted>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header inverted as='h1'>Surf Breaks</Header>
          </Menu.Item>
          <Menu.Item position="right">
            {this.props.currentUser === '' ? (
              <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
                <Dropdown.Menu>
                  <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                  <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
                <Dropdown.Menu>
                  <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Menu.Item>
        </Menu>
        <Menu style={subMenuStyle} borderless attached="top" fluid secondary>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header style={subMenuItemStyle} as='h3'>Find Your Break</Header>
          </Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header style={subMenuItemStyle} as='h3'>Surfing Conditions</Header>
          </Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header style={subMenuItemStyle} as='h3'>Forum</Header>
          </Menu.Item>
          {this.props.currentUser === '' ? null : (
            <Menu.Item as={NavLink} activeClassName="" exact to="/">
              <Header style={subMenuItemStyle} as='h3'>Friends List</Header>
            </Menu.Item>
          )}
          {this.props.currentUser === '' ? null : (
            <Menu.Item as={NavLink} activeClassName="" exact to="/">
              <Header style={subMenuItemStyle} as='h3'>Friends List</Header>
            </Menu.Item>
          )}
        </Menu>
      </Container>
    );
  }
}

// Declare the types of all properties.
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
