import { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewEventForm = () => {
    
    
    return (
    <Form>
        <FormGroup>
        <Label for="exampleEmail">Description</Label>
        <Input plaintext placeholder="Eg.: First day in a new Job" />
        </FormGroup>
    </Form>
    );
}

export default NewEventForm;