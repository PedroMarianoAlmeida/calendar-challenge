import { createContext, useState, useEffect } from 'react';

export const EventContext = createContext();

const defaultEventColor = '#1b8998';
const currentEventEmpty = {id:'', description: '', start:'', end:'', city:'', day:'', color: defaultEventColor}

const EventProvider = (props) => {
    
    const [ currentEvent, setCurrentEvent ] = useState({id:'', description: '', start:'', end:'', city:'', day:'', color: defaultEventColor});  
    const [currentDay, setCurrentDay] = useState('');
    const [ eventsList, setEventsList ] = useState([]);
    const [displayEventForm, setDisplayEventForm] = useState(false);

    console.log(currentDay);

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
            setDisplayEventForm,
            currentDay, 
            setCurrentDay
          }}
        >
             {props.children}
        </EventContext.Provider>
      );
}
 
export default EventProvider;

