const CalendarHead = () => {
    return (
        <thead>
            <tr className='bg-primary text-white w-100 text-center'>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            <style jsx>{`
                /*This is for every day-space stays with the same size*/
                th {
                    width: 14vw;
                }
            `}</style>
        </thead>
    );
}

export default CalendarHead;