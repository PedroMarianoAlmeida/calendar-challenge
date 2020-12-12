import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Table } from 'reactstrap';

//My components
import CalendarHead from './../components/calendar/CalendarHead';

export default function Home() {
  return (
    <div className={styles.container}>
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
                <td>1</td>
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
