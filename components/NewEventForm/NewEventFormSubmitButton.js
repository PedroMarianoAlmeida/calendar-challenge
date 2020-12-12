import { Button } from 'reactstrap';

const NewEventFormSubmitButton = (props) => {
    return ( 
        <Button 
            color="primary" 
            onClick={props.toggle}
        >
            Add Event
        </Button>
     );
}
 
export default NewEventFormSubmitButton;