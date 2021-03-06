import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Redirect } from 'react-router-dom';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';

const bridge = new SimpleSchema2Bridge(SurfBreakData.schema);

/** Renders the Page for editing a single document. */
class EditSurfBreak extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { name, image, summary, description, address, xPos, yPos } = data;
    SurfBreakData.collection.update(this.props.surfBreakId, { $set: { summary, image, address, name, description, xPos, yPos } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {

    if (this.props.currentUser !== this.props.surfBreak.creatorUsername) {
      return (
        <Redirect to='/'/>
      );
    }

    return (
      <Grid container centered id='editSurfBreaks-page'>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Surf Break</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.surfBreak}>
            <Segment>
              <TextField name='name' id='edit-break-name'/>
              <TextField name='image' id='edit-break-image'/>
              <TextField name='summary' id='edit-break-summary'/>
              <LongTextField name='description' id='edit-break-description'/>
              <TextField name='address' id='edit-break-address'/>
              <Segment>
                <TextField name='xPos' id='edit-break-x-pos'/>
                <TextField name='yPos' id='edit-break-y-pos'/>
              </Segment>
              <SubmitField value='Submit' id='edit-break-submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
EditSurfBreak.propTypes = {
  surfBreak: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    creatorUsername: PropTypes.string,
    coordinates: PropTypes.object,
    _surfBreakId: PropTypes.string,
  }).isRequired,
  surfBreakId: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const surfBreakId = match.params._id;

  const currentUser = Meteor.user() ? Meteor.user().username : '';
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(SurfBreakData.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const surfBreak = SurfBreakData.collection.findOne(surfBreakId);

  return {
    surfBreakId,
    surfBreak,
    currentUser,
    ready,
  };
})(EditSurfBreak);
