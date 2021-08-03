import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Home page
        </h1>
        <div>
          <Link href="/protected">Protected</Link>
        </div>
      </main>
    </div>
  )
}
