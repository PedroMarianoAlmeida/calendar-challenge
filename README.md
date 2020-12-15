# Calendar Project

This project is a web app that displays the calendar of December/20 and allows the user to register events on each day of the month.

If the event is until 7 days after the current day, the web app gets the weather forecast and add this data to the event.

Click [here](https://calendar-challenge.vercel.app/) to see the result.

# Tech Stack
- **Next.js**: Web app development, hosting and deployment
- **Bootstrap**: CSS classes
- **Reactstrap**: Pre-built components
- **Google Geocode API**: Gets latitude and longitude from the name of the city
- **OpenWeather API**: Get the wheather forecast from a place from the latitude and longitude
- **Cypress**: Tests

# Run Locally
1. Download this repo
1. Run ```npm install``` (to install all dependecies)
1. Run ```npm run dev``` to open locally
1. Run ```npx cypress open``` to run tests

# Notes
1. The API Keys are display in the getWhatherForecast function (inside NewEventFormSubmitButton.js) because is a requirement of the challenge to provide working API keys, but the correct way to leave API Keys is to set them as environment variables.

1. The catch block in the getWhatherForecast function (inside NewEventFormSubmitButton.js) is empty because in case of error happens in the Whether Forecast object, its data is not fulfilled and this case is predicted in the EventSummary component.

1. For state management I used useContext + useState.