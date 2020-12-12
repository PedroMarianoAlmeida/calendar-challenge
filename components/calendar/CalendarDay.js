import { useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import NewEventForm from './../NewEventForm';

const CalendarDay = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return <>
        <td onClick={() => setModal(true)} className='p-5 border'>{props.day}</td>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Reminder day {props.day}</ModalHeader>
            <ModalBody>
                <NewEventForm />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Add Event</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>

        <style jsx>{`                
            td:hover {
                cursor: cell;
            }
        `}</style>
    </>;
}

export default CalendarDay;