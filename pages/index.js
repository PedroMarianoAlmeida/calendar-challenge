//Next and React components/functions
import Head from 'next/head'

//Third part components
import { Container, Table } from 'reactstrap';

//My components
import CalendarHead from './../components/calendar/CalendarHead';
import CalendarDay from './../components/calendar/CalendarDay';

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
                <CalendarDay />
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>

            </tbody>

          </Table>
        </Container>
      </main>
    </div>
  )
}
