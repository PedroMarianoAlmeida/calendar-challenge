//React and Next components and Functions
import { useContext } from 'react';

//Third part components
import { Button } from 'reactstrap';

//My components
import { EventContext } from './../../contexts/EventContext';

const NewEventFormSubmitButton = (props) => {
    const { currentEvent } = useContext(EventContext);
    //console.log(currentEvent);

    const handleClick = () => {
        console.log(currentEvent);
        //props.toggle();
    }

    return ( 
        <Button 
            color="primary" 
            onClick={handleClick}
        >
            Add Event
        </Button>
     );
}
 
export default NewEventFormSubmitButton;