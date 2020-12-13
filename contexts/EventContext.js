import { createContext, useState, useEffect } from 'react';

export const EventContext = createContext();

const currentEventEmpty = {description: '', start:'', end:'', city:'', day:'', color:'#1b8998'}

const EventProvider = (props) => {
    
    const [ currentEvent, setCurrentEvent ] = useState({...currentEventEmpty});  
    const [ eventsList, setEventsList ] = useState([]);

    const clearCurrentEvent = () => setCurrentEvent({...currentEventEmpty});

    useEffect(() => {
      console.log(eventsList);
    }, [eventsList])

    return (
        <EventContext.Provider value={{currentEvent, setCurrentEvent, clearCurrentEvent, eventsList, setEventsList}}>
             {props.children}
        </EventContext.Provider>
      );
}
 
export default EventProvider;

