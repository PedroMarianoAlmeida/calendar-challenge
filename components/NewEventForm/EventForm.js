//Next and React components and functions
import { useContext } from 'react';


//Third part Components
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//My Components
import NewEventFormBody from './NewEventFormBody';
import NewEventFormSubmitButton from './NewEventFormSubmitButton';
import { EventContext } from './../../contexts/EventContext';

const EventForm = () => {
    const { eventsList, displayEventForm, setDisplayEventForm, currentDay, setCurrentDay } = useContext(EventContext);
    const toggle = () => setDisplayEventForm(!displayEventForm);
    
    return (
        <Modal isOpen={displayEventForm} toggle={toggle}>
            <ModalHeader toggle={toggle}>Reminder day {currentDay}</ModalHeader>
            <ModalBody>
                <NewEventFormBody day={currentDay} />
            </ModalBody>
            <ModalFooter>
                <NewEventFormSubmitButton toggle={toggle} />
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default EventForm;