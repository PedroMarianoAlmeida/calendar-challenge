//Next and React components and functions
import { useState, useContext } from 'react';

//Third part Components
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//My Components
import NewEventFormBody from '../NewEventForm/NewEventFormBody';
import NewEventFormSubmitButton from './../NewEventForm/NewEventFormSubmitButton';
import EventSummary from './../ExistentEvent/EventSummary';
import { EventContext } from './../../contexts/EventContext';

//Source: https://stackoverflow.com/a/36351753/12828114
const convertHourToDecimal = (timeHourFormat) => {
    let hoursMinutes = timeHourFormat.split(/[.:]/);
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
}

const CalendarDay = (props) => {
    const { eventsList } = useContext(EventContext);
    const eventsInThisDay = eventsList.filter(event => event.day === props.day);
    const eventsSorted = eventsInThisDay.sort( (a, b) => convertHourToDecimal(a.start) - convertHourToDecimal(b.start));
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return <>
        <td onClick={() => setModal(true)} className='border'>
            <strong>{props.day}</strong>
            {eventsSorted.map(event => <div key={JSON.stringify(event)}><EventSummary event={event}/></div>)}           
        </td>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Reminder day {props.day}</ModalHeader>
            <ModalBody>
                <NewEventFormBody day={props.day}/>
            </ModalBody>
            <ModalFooter>
                <NewEventFormSubmitButton toggle={toggle}/>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>

        <style jsx>{`                
            td:hover {
                cursor: crosshair;
            }
        `}</style>
    </>;
}

export default CalendarDay;