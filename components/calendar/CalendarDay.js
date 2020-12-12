//Next and React components and functions
import { useState, useContext } from 'react';

//Third part Components
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//My Components
import NewEventFormBody from '../NewEventForm/NewEventFormBody';
import NewEventFormSubmitButton from './../NewEventForm/NewEventFormSubmitButton';
import { EventContext } from './../../contexts/EventContext';

const CalendarDay = (props) => {
    const { eventsList } = useContext(EventContext);
    const eventsInThisDay = eventsList.filter(event => event.day === props.day);
    console.log( `events day ${props.day}: `, eventsInThisDay )
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return <>
        <td onClick={() => setModal(true)} className='p-5 border'>{props.day}</td>

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