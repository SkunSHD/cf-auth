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
					Logout page
				</h1>
				<div>
					<Link href="/protected">Login</Link>
				</div>
			</main>
		</div>
	)
}
