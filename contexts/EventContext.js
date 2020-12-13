import { createContext, useState, useEffect } from 'react';

export const EventContext = createContext();

const EventProvider = (props) => {
    
    const [ currentEvent, setCurrentEvent ] = useState({description: '', start:'', end:'', city:'', day:'', color:'#1b8998'});  
    const [ eventsList, setEventsList ] = useState([]);

    useEffect(() => {
      console.log(eventsList);
    }, [eventsList])

    return (
        <EventContext.Provider value={{currentEvent, setCurrentEvent, eventsList, setEventsList}}>
             {props.children}
        </EventContext.Provider>
      );
}
 
export default EventProvider;

