import { useState } from 'react';

import { Form, FormGroup, Label, Input, Tooltip } from 'reactstrap';

const NewEventForm = () => {
    const [eventDescription, setEventDescription] = useState('');
    const [descriptionLengthReached, setDescriptionLengthReached] = useState(false);

    const handleEventDescriptionChange = (e) => {
        const showWarning = e.target.value.length > 30;
        setDescriptionLengthReached(showWarning);
        setEventDescription(e.target.value);
    }

    return (
        <Form>
            <FormGroup>

                <div className='mb-4'>
                    <Label >Description <small id='max-length-warning'>(max 30 chars)</small></Label>
                    <Tooltip placement="right" isOpen={descriptionLengthReached} target="max-length-warning">
                        The lenght is longer than the limit, please short the event name
                    </Tooltip>
                    <input
                        type='text'
                        placeholder="Eg.: First day in a new Job"
                        className='form-control'
                        value={eventDescription}
                        onChange={handleEventDescriptionChange}
                    />
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