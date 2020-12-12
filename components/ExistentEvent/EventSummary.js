import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const EventSummary = (props) => {
    console.log('props summary: ',props);

    return (
        <>
            <Button id="event-summary" type="button" onClick={(e) => e.stopPropagation()}>
                {props.event.description}
            </Button>

            <UncontrolledPopover trigger="click" placement="bottom" target="event-summary">
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