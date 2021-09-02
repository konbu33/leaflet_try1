import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import L from 'leaflet'

export default function mymapin() {

	useEffect( () => {
		var mymap = L.map('map2').setView([51.505, -0.09], 13);

		const tileLayer = L.tileLayer(
			'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			{
				attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
			}
		);
	}, [])

	return (
		<>
			<Head>
				{/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" /> */}
				{/* <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="></script> */}
			</Head>

			<div><Link href="/"><a>Top Page</a></Link></div>
			<div id="map2"></div>

		</>
	)
}
