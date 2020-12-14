import CalendarDay from './CalendarDay';

const CalendarBody = () => {
    return (
        <tbody>
            <tr className='text-center'>
                <CalendarDay day={29} weekend outRange/>
                <CalendarDay day={30} outRange/>
                <CalendarDay day={1} />
                <CalendarDay day={2} />
                <CalendarDay day={3} />
                <CalendarDay day={4} />
                <CalendarDay day={5} weekend />
            </tr>

            <tr className='text-center'>
                <CalendarDay day={6} weekend />
                <CalendarDay day={7} />
                <CalendarDay day={8} />
                <CalendarDay day={9} />
                <CalendarDay day={10} />
                <CalendarDay day={11} />
                <CalendarDay day={12} weekend />
            </tr>

            <tr className='text-center'>
                <CalendarDay day={13} weekend />
                <CalendarDay day={14} />
                <CalendarDay day={15} />
                <CalendarDay day={16} />
                <CalendarDay day={17} />
                <CalendarDay day={18} />
                <CalendarDay day={19} weekend />
            </tr>

            <tr className='text-center'>
                <CalendarDay day={20} weekend />
                <CalendarDay day={21} />
                <CalendarDay day={22} />
                <CalendarDay day={23} />
                <CalendarDay day={24} />
                <CalendarDay day={25} />
                <CalendarDay day={26} weekend />
            </tr>

            <tr className='text-center'>
                <CalendarDay day={27} weekend />
                <CalendarDay day={28} />
                <CalendarDay day={29} />
                <CalendarDay day={30} />
                <CalendarDay day={31} />
                <CalendarDay day={1} outRange/>
                <CalendarDay day={2} outRange weekend />
            </tr>
        </tbody>
    );
}

export default CalendarBody;