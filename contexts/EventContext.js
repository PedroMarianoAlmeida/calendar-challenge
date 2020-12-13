import { createContext, useState, useEffect } from 'react';

export const EventContext = createContext();

const defaultEventColor = '#1b8998';
const currentEventEmpty = {description: '', start:'', end:'', city:'', day:'', color: defaultEventColor, newEvent: true}

const EventProvider = (props) => {
    
    const [ currentEvent, setCurrentEvent ] = useState({...currentEventEmpty});  
    const [ eventsList, setEventsList ] = useState([]);
    const [displayEventForm, setDisplayEventForm] = useState(false);

    const clearCurrentEvent = () => setCurrentEvent({...currentEventEmpty});

    useEffect(() => {
      console.log(eventsList);
    }, [eventsList])

    return (
        <EventContext.Provider 
          value={{
            currentEvent, 
            setCurrentEvent, 
            clearCurrentEvent, 
            eventsList, 
            setEventsList,
            displayEventForm, 
            setDisplayEventForm
          }}
        >
             {props.children}
        </EventContext.Provider>
      );
}
 
export default EventProvider;

