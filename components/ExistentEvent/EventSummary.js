import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const charBreakPoint = 5;

const EventSummary = (props) => {
    
    console.log('props summary: ',props.event);
    
    //Unique ID to link the Popover with the sumary box
    const identifier = (props.event.description + props.event.start + props.event.end + props.event.city ).replace(/[^\w\s]/gi, '')
    
    const sizeCurrentDescription = props.event.description.length;
    const sumaryTextBox = sizeCurrentDescription > charBreakPoint ? `${props.event.description.substring(0, charBreakPoint)}...` : props.event.description; 

    return (
        <>
            <Button 
                id={identifier} 
                type="button" 
                onClick={(e) => e.stopPropagation()}
                className='my-1 border-0 w-100'
                style={{ backgroundColor: props.event.color }}
            >
                {sumaryTextBox}
            </Button>

            <UncontrolledPopover trigger="click" placement="bottom" target={identifier}>
                <PopoverHeader>{props.event.description}</PopoverHeader>
                <PopoverBody>
                    <div>
                        <u>Where:</u> {props.event.city}
                    </div>
                    <div>
                        <u>When:</u> {props.event.start} to {props.event.end}
                    </div>
                    
                </PopoverBody>
            </UncontrolledPopover>
        </>
    );
}

export default EventSummary;