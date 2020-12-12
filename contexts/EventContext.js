import { createContext, useState } from 'react';

export const EventContext = createContext();

const EventProvider = (props) => {
    const [ currentEvent, setCurrentEvent ] = useState('test'/*{}*/);
    
    return (
        <EventContext.Provider value={{currentEvent, setCurrentEvent}}>
             {props.children}
        </EventContext.Provider>
      );
}
 
export default EventProvider;

