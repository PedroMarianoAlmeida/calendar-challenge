//Next and React components and functions
import { useContext } from 'react';

//Third part components
import { Button } from 'reactstrap';

//My Components
import { EventContext } from './../../contexts/EventContext';

const DeleteAllEventsInSpecificDay = (props) => {
    const { eventsList, setEventsList } = useContext(EventContext);
    
    const deleteEvents = (e) => {
        const newEventList = eventsList.filter(event => event.day !== props.day);
        setEventsList(newEventList);
        e.stopPropagation();
    }
    
    return (
        <Button 
            outline 
            color="danger" 
            size="sm"
            onClick={deleteEvents}
        >
            Delete All
        </Button>
      );
}
 
export default DeleteAllEventsInSpecificDay;