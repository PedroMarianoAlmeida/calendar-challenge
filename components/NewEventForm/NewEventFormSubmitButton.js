//React and Next components and Functions
import { useContext } from 'react';

//Third part components
import { Button } from 'reactstrap';

//My components
import { EventContext } from './../../contexts/EventContext';

const NewEventFormSubmitButton = (props) => {
    const { currentEvent } = useContext(EventContext);
    console.log(currentEvent);

    return ( 
        <Button 
            color="primary" 
            onClick={props.toggle}
        >
            Add Event
        </Button>
     );
}
 
export default NewEventFormSubmitButton;