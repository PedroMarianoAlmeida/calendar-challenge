//React and Next components and Functions
import { useContext, useState, useEffect } from 'react';

//Third part components
import { Button } from 'reactstrap';

//My components
import { EventContext } from './../../contexts/EventContext';

const NewEventFormSubmitButton = (props) => {
    const { currentEvent, setCurrentEvent, eventsList, setEventsList } = useContext(EventContext);
    const [ disableSubmit, setDisableSubmit ] = useState(true);

    useEffect(() => {
        const descriptionEmpty = Boolean(currentEvent.description === '');
        const descriptionLong = currentEvent.description.length > 30;
        const startEmpty = Boolean(currentEvent.start === '');
        const endEmpty = Boolean(currentEvent.end === '');
        const cityEmpty = Boolean(currentEvent.city === '');

        setDisableSubmit(descriptionLong || descriptionEmpty || startEmpty || endEmpty || cityEmpty);
    }, [currentEvent])

    const handleClick = () => {
        console.log(currentEvent);
        const newEventList = [...eventsList, currentEvent];
        setEventsList(newEventList);
        //Put this code line in the Context as "Clear Current Event"
        setCurrentEvent( {description: '', start:'', end:'', city:'', color:'blue'} );        
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