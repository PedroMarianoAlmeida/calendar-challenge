//React and Next components and Functions
import { useContext, useState, useEffect } from 'react';

//Third part components
import { Button } from 'reactstrap';
import { v4 } from 'uuid';

//My components
import { EventContext } from './../../contexts/EventContext';
import convertHourToDecimal from '../../functions/convertHourToDecimal';

const NewEventFormSubmitButton = (props) => {
    const { currentEvent, 
            eventsList, 
            setEventsList,
            clearCurrentEvent } = useContext(EventContext);
    const [ disableSubmit, setDisableSubmit ] = useState(true);

    useEffect(() => {
        const descriptionEmpty = Boolean(currentEvent.description === '');
        const descriptionLong = currentEvent.description.length > 30;
        const startEmpty = Boolean(currentEvent.start === '');
        const endEmpty = Boolean(currentEvent.end === '');
        const endLaterThanStart = convertHourToDecimal(currentEvent.end) < convertHourToDecimal(currentEvent.start);
        const cityEmpty = Boolean(currentEvent.city === '');

        setDisableSubmit(descriptionLong || descriptionEmpty || startEmpty || endEmpty || endLaterThanStart || cityEmpty);
    }, [currentEvent])

    const handleClick = () => {
        console.log(currentEvent);
        if(currentEvent.id === ''){
            currentEvent.id = v4();
            const newEventList = [...eventsList, currentEvent];
            setEventsList(newEventList);
            
        }
        else{
            const eventToEdit = eventsList.filter(event => event.id === currentEvent.id)[0];
            console.log(eventToEdit, currentEvent);
            //Find the event and insert the new values
        }

        clearCurrentEvent(); 
        props.toggle();
    }

    return ( 
        <Button 
            color="primary" 
            onClick={handleClick}
            disabled={disableSubmit}
        >
            Add Event
        </Button>
     );
}
 
export default NewEventFormSubmitButton;