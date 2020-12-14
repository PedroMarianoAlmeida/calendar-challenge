//Next and React components/functions
import Head from 'next/head'

//Third part components
import { Container, Table } from 'reactstrap';

//My components
import CalendarHead from './../components/calendar/CalendarHead';
import CalendarBody from './../components/calendar/CalendarBody';
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
            <CalendarBody startDate='2020/11/29' endDate='2021/01/02' year='2020' month='12'/>
          </Table>

          <EventForm />

        </Container>
      </main>
    </div>
  )
}
