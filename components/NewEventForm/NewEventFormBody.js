//React and Next components and Functions
import { useState, useEffect, useContext } from 'react';

//Third part components
import { Form, FormGroup, Label, Input, Tooltip } from 'reactstrap';

//My components
import { EventContext } from './../../contexts/EventContext';

const NewEventFormBody = (props) => {  
    const { currentEvent, setCurrentEvent } = useContext(EventContext);
    
    const [eventDescription, setEventDescription] = useState(currentEvent.description);
    const [descriptionLengthReached, setDescriptionLengthReached] = useState(false);

    const handleEventDescriptionChange = (e) => {
        const showWarning = e.target.value.length > 30;
        setDescriptionLengthReached(showWarning);
        setEventDescription(e.target.value);
    }

    const [ startTime, setStartTime ] = useState(currentEvent.start);
    const [ endTime, setEndTime ] = useState(currentEvent.end);
    const [ city, setCity ] = useState(currentEvent.city);
    const [ color, setColor ] = useState(currentEvent.color);

    //Update currentEvent contexts with the Form data    
    useEffect(() => {
        setCurrentEvent({
            description: eventDescription,
            start: startTime,
            end: endTime, //It is needed to validated if endTime is later than startTime
            city: city,
            color: color,
            day: props.day
        })

    }, [eventDescription, startTime, endTime, city, color])

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
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <Label>End time</Label>
                    <Input
                        type="time"
                        placeholder="time placeholder"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                    <Label>City</Label>
                    <input 
                        type='text' 
                        placeholder="Eg.: Quito, Rio de Janeiro, New York" 
                        className='form-control' 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>

                <div>
                    <Label>Color</Label>
                    <input
                        type="color" 
                        value={color}
                        className="form-control"
                        onChange={(e) => setColor(e.target.value)}
                    />
                    
                </div>
            </FormGroup>

        </Form>
    );
}

export default NewEventFormBody;