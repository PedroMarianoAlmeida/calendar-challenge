import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Table } from 'reactstrap';

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
            <thead>
              <tr className='bg-primary text-white'>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>

            <tbody>
              <tr>
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
