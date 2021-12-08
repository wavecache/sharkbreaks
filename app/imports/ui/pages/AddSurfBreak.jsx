import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { SurfBreakData } from '../../api/surfbreak/SurfBreakData';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  image: String,
  summary: String,
  description: String,
  address: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddSurfBreak extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { name, image, summary, description, address, xPos, yPos } = data;
    const followersIds = [];
    const creatorUsername = Meteor.user().username;
    const _surfBreakId = `${creatorUsername}${name}`;
    SurfBreakData.collection.insert({ name, creatorUsername, followersIds, image, summary, description, address, xPos, yPos, _surfBreakId },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered id='addSurfBreaks-page'>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Surf Break</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='name' id='add-break-name'/>
              <TextField name='image' id='add-break-image'/>
              <TextField name='summary' id='add-break-summary'/>
              <LongTextField name='description' id='add-break-description'/>
              <TextField name='address' id='add-break-address'/>
              <Segment>
                <TextField name='xPos' id='edit-break-address'/>
                <TextField name='yPos' id='edit-break-address'/>
              </Segment>
              <SubmitField value='Submit' id='add-break-submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddSurfBreak;
