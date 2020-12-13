//Source: https://stackoverflow.com/a/36351753/12828114
const convertHourToDecimal = (timeHourFormat) => {
    let hoursMinutes = timeHourFormat.split(/[.:]/);
    let hours = parseInt(hoursMinutes[0], 10);
    let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
}
 
export default convertHourToDecimal;