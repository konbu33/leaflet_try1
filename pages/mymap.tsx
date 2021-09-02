import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Myleaflet from '../components/myleaflet'

export default function mymap() {

	const Component = dynamic(
		() => import('../components/myleaflet'),
		{ ssr: false } 
	)

	return (
		<>
			<Head>
				{/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" /> */}
			</Head>

			<div><Link href="/"><a>Top Page</a></Link></div>
			<Component/>
			{/* <Myleaflet/> */}
		</>
	)
}
