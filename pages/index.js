//Next and React components/functions
import Head from 'next/head'

//Third part components
import { Container, Table } from 'reactstrap';

//My components
import CalendarHead from './../components/calendar/CalendarHead';
import CalendarDay from './../components/calendar/CalendarDay';
import EventForm from './../components/NewEventForm/EventForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calendar Chalenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Table>
            <CalendarHead />

            <tbody>
              <tr className='text-center'>
                <td>29</td>
                <td>30</td>
                <CalendarDay day={14}/>
                <CalendarDay day={15}/>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>

            </tbody>

          </Table>

          <EventForm />

        </Container>
      </main>
    </div>
  )
}
