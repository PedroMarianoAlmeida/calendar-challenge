//React and Next components and Functions
import { useContext, useState, useEffect } from 'react';

//Third part components
import { Button } from 'reactstrap';
import { v4 } from 'uuid';

//My components
import { EventContext } from './../../contexts/EventContext';
import convertHourToDecimal from '../../functions/convertHourToDecimal';

const getWhatherForecast = async(cityName, date) => {
    const toDay = new Date();
    const currentDate = toDay.getDate();
    const forecastIndex = date - currentDate;
    console.log(forecastIndex);
    try{
        const coordenatesResponse = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=AIzaSyAqE2wsmY5N38AycUU_j8lk8Bgqk7wcMs4`);
        const coordenateData = await coordenatesResponse.json();
        const coordenateDataTreated = coordenateData.results[0].geometry.location;

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordenateDataTreated.lat}&lon=${coordenateDataTreated.lng}&exclude=hourly,minutely&appid=f398ec29dd385ce8c20829de8b6e297a`)
        const weatherData = await weatherResponse.json();
        const watherDataTreated = weatherData.daily[forecastIndex].weather[0];
    }
    catch{}
    
}

const NewEventFormSubmitButton = (props) => {
    const { currentEvent, 
            eventsList, 
            setEventsList,
            clearCurrentEvent } = useContext(EventContext);
    const [ disableSubmit, setDisableSubmit ] = useState(true);

    useEffect(() => {
        const descriptionEmpty = Boolean(currentEvent.description === '');
        const descriptionLong = currentEvent.description.length > 30;
        const startEmpty = Boolean(currentEvent.start === '');
        const endEmpty = Boolean(currentEvent.end === '');
        const endLaterThanStart = convertHourToDecimal(currentEvent.end) < convertHourToDecimal(currentEvent.start);
        const cityEmpty = Boolean(currentEvent.city === '');

        setDisableSubmit(descriptionLong || descriptionEmpty || startEmpty || endEmpty || endLaterThanStart || cityEmpty);
    }, [currentEvent])

    const handleClick = async() => {
        //If it is an existent event, find and delete it (in sequence a new event object will be created in inserted on eventList)
        const currentEventList = [...eventsList];
        await getWhatherForecast(currentEvent.city, currentEvent.day);
        if(currentEvent.id !== ''){
            const eventIndex = eventsList.findIndex(event => event.id === currentEvent.id)
            currentEventList.splice(eventIndex, 1);          
        }

        currentEvent.id = v4();
        const newEventList = [...currentEventList, currentEvent];
        setEventsList(newEventList);

        clearCurrentEvent(); 
        props.toggle();
    }

    return ( 
        <Button 
            color="primary" 
            onClick={handleClick}
            disabled={disableSubmit}
        >
            Add Event
        </Button>
     );
}
 
export default NewEventFormSubmitButton;