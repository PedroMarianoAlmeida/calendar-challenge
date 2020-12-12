import { useState } from 'react';

import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

const NewEventForm = () => {


    return (
        <Form>
            <FormGroup>

                <div className='mb-4'>
                    <Label >Description <small>(max 30 chars)</small></Label>
                    <input type='text' placeholder="Eg.: First day in a new Job" className='form-control' />        
                </div>              

                <div className='mb-4'>
                    <Label>Start time</Label>
                    <Input
                        type="time"
                        placeholder="time placeholder"

                    />
                </div>

                <div className='mb-4'>
                    <Label>End time</Label>
                    <Input
                        type="time"
                        placeholder="time placeholder"
                    />
                </div>

                <div>
                    <Label>City</Label>
                    <input type='text' placeholder="Eg.: Quito, Rio de Janeiro, New York" className='form-control' />
                </div>
            </FormGroup>

        </Form>
    );
}

export default NewEventForm;