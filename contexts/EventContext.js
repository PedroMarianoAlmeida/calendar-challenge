import { createContext, useState } from 'react';

export const EventContext = createContext();

const EventProvider = (props) => {
    
    const [ currentEvent, setCurrentEvent ] = useState({description: '', start:'', end:'', city:''});  

    return (
        <EventContext.Provider value={{currentEvent, setCurrentEvent}}>
             {props.children}
        </EventContext.Provider>
      );
}
 
export default EventProvider;

