import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wisp</title>
        <meta name="description" content="Turn your wallet into a decentralized bank" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        Body
      </div>
    </div>
  )
}

export default Home
