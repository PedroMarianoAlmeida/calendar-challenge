import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calendar Chalenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='bg-danger'>Calendar</div>
        <div><Button color="primary">primary</Button></div>
      </main>
    </div>
  )
}
