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
    
    const identifier = "a" + props.event.id;
    
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
            <div
                id={identifier} 
                type="button" 
                onClick={(e) => e.stopPropagation()}
                className='my-1 border-0 w-100 btn text-white'
                style={{ backgroundColor: props.event.color }}
                ref={trackToClick}
            >
                <span><img src={`http://openweathermap.org/img/wn/${props.event.weather.icon}.png`}/></span>
                <span>{sumaryTextBox}</span>
            </div>

            <UncontrolledPopover trigger="click" placement="bottom" target={identifier}>
                <PopoverHeader className='text-center'>{props.event.description}</PopoverHeader>
                <PopoverBody>
                    <ul>
                        <li><u>Where:</u> {props.event.city}</li>
                        <li> <u>When:</u> {props.event.start} to {props.event.end}</li>
                        <li> <u>Weather:</u> {props.event.weather.description}</li>
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