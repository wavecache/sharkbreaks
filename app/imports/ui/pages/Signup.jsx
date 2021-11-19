import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment, Checkbox } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';

const options = [
  { key: 'r', text: 'regular', value: 'regular' },
  { key: 'g', text: 'goofy', value: 'goofy' },
  { key: 'o', text: 'other', value: 'other' },
];

const options2 = [
  { key: 'b', text: 'beginner', value: 'beginner' },
  { key: 'n', text: 'novice', value: 'novice' },
  { key: 'c', text: 'competent', value: 'competent' },
  { key: 'p', text: 'proficient', value: 'proficient' },
  { key: 'x', text: 'expert', value: 'expert' },
];

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /* Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { firstname: '', lastname: '', email: '', about: '', skill: '', stance: '', password: '', error: '', redirectToReferer: false };
  }

  /* Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /* Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { firstname, lastname, email, about, skill, stance, password } = this.state;
    Accounts.createUser({ firstname, lastname, email, about, skill, stance, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /* Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/add' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
      <Container id="signup-page">
        <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Register your account
            </Header>
            <Form onSubmit={this.submit}>
              <Segment stacked>

                <Form.Group widths='equal'>
                  <Form.Input
                    label="First Name"
                    id="signup-form-firstname"
                    icon="hand peace outline icon"
                    iconPosition="left"
                    name="firstname"
                    type="firstname"
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Last Name"
                    id="signup-form-lastname"
                    icon="hand peace outline icon"
                    iconPosition="left"
                    name="lastname"
                    type="lastname"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />

                </Form.Group>

                <Form.Group widths='equal'>
                  <Form.Select
                    fluid
                    label='Skill'
                    id="signup-form-skill"
                    name="skill"
                    type="skill"
                    options={options2}
                    placeholder='Skill'
                  />

                  <Form.Select
                    fluid
                    label='Stance'
                    id="signup-form-stance"
                    name="stance"
                    type="stance"
                    options={options}
                    placeholder='Stance'
                  />

                </Form.Group>
                Stay informed about:
                <Form.Group>
                  <Form.Field>
                    <Checkbox label='North Shore'
                      id="signup-form-north"
                      name="north"/>
                    <Checkbox label='West Side'
                      id="signup-form-west"
                      name="west"/>
                    <Checkbox label='South Shore'
                      id="signup-form-south"
                      name="south"/>
                    <Checkbox label='East Side'
                      id="signup-form-east"
                      name="east"/>
                  </Form.Field>
                </Form.Group>

                <Form.Input
                  label="Email"
                  id="signup-form-email"
                  icon="user outline"
                  iconPosition="left"
                  name="email"
                  type="email"
                  placeholder="E-mail address"
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Password"
                  id="signup-form-password"
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
                <Form.Field>

                  <Form.TextArea label="About"
                    id="signup-form-about"
                    name="about"
                    type="about"
                    placeholder="Tell us more about you..." />

                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Form.Button id="signup-form-submit" content="Get Pitted!"/>
              </Segment>
            </Form>
            <Message>
              Already have an account? Login <Link to="/signin">here</Link>
            </Message>
            {this.state.error === '' ? (
              ''
            ) : (
              <Message
                error
                header="Registration was not successful"
                content={this.state.error}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

/* Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
