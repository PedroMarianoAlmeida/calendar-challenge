//Next and React components and functions
import { useContext, useRef } from 'react';

//Third part components
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

//My components
import { EventContext } from './../../contexts/EventContext';

const charBreakPoint = 5;

const EventSummary = (props) => {
    const { setDisplayEventForm, setCurrentEvent } = useContext(EventContext);
    const trackToClick = useRef(null);
    //console.log('props summary: ',props.event);
    
    //Unique ID to link the Popover with the sumary box (this replace I got from https://stackoverflow.com/a/13020280/12828114)
    const identifier = (props.event.description + props.event.start + props.event.end + props.event.city ).replace(/[^A-Z0-9]/ig, "");
    
    const sizeCurrentDescription = props.event.description.length;
    const sumaryTextBox = sizeCurrentDescription > charBreakPoint ? `${props.event.description.substring(0, charBreakPoint)}...` : props.event.description; 

    const editEvent = (e) => {
        //Utilize Context
        trackToClick.current.click();
        setDisplayEventForm(true);
        setCurrentEvent(props.event);
        e.stopPropagation();
    }

    return (
        <>
            <button
                id={identifier} 
                type="button" 
                onClick={(e) => e.stopPropagation()}
                className='my-1 border-0 w-100 btn text-white'
                style={{ backgroundColor: props.event.color }}
                ref={trackToClick}
            >
                {sumaryTextBox}
            </button>

            <UncontrolledPopover trigger="click" placement="bottom" target={identifier}>
                <PopoverHeader className='text-center'>{props.event.description}</PopoverHeader>
                <PopoverBody>
                    <ul>
                        <li><u>Where:</u> {props.event.city}</li>
                        <li> <u>When:</u> {props.event.start} to {props.event.end}</li>
                    </ul>
                    <hr />
                    <Button 
                        className='w-100'
                        color="primary"
                        onClick={editEvent}
                    >
                        Edit event
                    </Button>
                    
                </PopoverBody>
            </UncontrolledPopover>
        </>
    );
}

export default EventSummary;