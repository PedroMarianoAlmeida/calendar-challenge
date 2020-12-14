//React and Next components and Functions
import { useState, useEffect, useContext } from 'react';

//Third part components
import { Form, FormGroup, Label, Input, Tooltip } from 'reactstrap';

//My components and functions
import { EventContext } from './../../contexts/EventContext';
import convertHourToDecimal from './../../functions/convertHourToDecimal';

const maxLengthDescription = 30;

const NewEventFormBody = (props) => {  
    const { currentEvent, setCurrentEvent } = useContext(EventContext);   
    
    const [eventDescription, setEventDescription] = useState(currentEvent.description);
    const [ startTime, setStartTime ] = useState(currentEvent.start);
    const [ endTime, setEndTime ] = useState(currentEvent.end);
    const [ city, setCity ] = useState(currentEvent.city);
    const [ color, setColor ] = useState(currentEvent.color);
    const [ id, setId ] = useState(currentEvent.id); //It is needed to not lose the ID when change other data

    //Check the size of description
    const [descriptionLengthReached, setDescriptionLengthReached] = useState(false);
    useEffect(() => {
        const showWarning = eventDescription.length > maxLengthDescription;
        setDescriptionLengthReached(showWarning);
    },[eventDescription])

    //Check if end time is higher than start time
    const [descriptioEndLaterThanStart, setDescriptioEndLaterThanStart] = useState(false); 
    useEffect(() => {
        const showWarning = endTime !== '' && startTime !== '' && convertHourToDecimal(endTime) < convertHourToDecimal(startTime);
        setDescriptioEndLaterThanStart(showWarning);
    }, [startTime, endTime])

    //Update currentEvent contexts with the Form data    
    useEffect(() => {
        setCurrentEvent({
            id: id,
            description: eventDescription,
            start: startTime,
            end: endTime,
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
                        placeholder="Eg.: First day at new Job"
                        className='form-control'
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
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
                    <Label id="end-time-warning">End time</Label>
                    <Tooltip placement="right" isOpen={descriptioEndLaterThanStart} target="end-time-warning">
                        End time should be after the start time
                    </Tooltip>
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