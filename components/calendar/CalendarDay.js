//Next and React components and functions
import { useContext } from 'react';

//My Components
import EventSummary from './../ExistentEvent/EventSummary';
import { EventContext } from './../../contexts/EventContext';
import convertHourToDecimal from './../../functions/convertHourToDecimal';

const CalendarDay = (props) => {
    const { eventsList, setDisplayEventForm, setCurrentDay } = useContext(EventContext);
    const eventsInThisDay = eventsList.filter(event => event.day === props.day);
    const eventsSorted = eventsInThisDay.sort( (a, b) => convertHourToDecimal(a.start) - convertHourToDecimal(b.start));
    
    const newEventForm = () => {
        setDisplayEventForm(true);
        setCurrentDay(props.day)
    }

    return <>
        <td onClick={newEventForm} className='border'>
            <strong>{props.day}</strong>
            {eventsSorted.map(event => <div key={JSON.stringify(event)}><EventSummary event={event}/></div>)}           
        </td>

        <style jsx>{`                
            td:hover {
                cursor: crosshair;
            }
        `}</style>
    </>;
}

export default CalendarDay;