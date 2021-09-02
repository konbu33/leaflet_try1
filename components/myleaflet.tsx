import { useEffect, useState } from 'react'
import L from 'leaflet'

export default function myleaflet() {

	const [ mapOpts, setMapOpts ]: [L.MapOptions, any] = useState({ 
		// center: [51.505, -0.09],
		center: [35.66572, 139.73100],
		zoom: 17,
	})

	useEffect( () => {

		async function renderMap() {

			const map = L.map(
				"map1",
				mapOpts	
			)

			const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
			});

			console.log('tileLayer: ', tileLayer)
			tileLayer.addTo(map);

			// L.marker([35.66572, 139.73100]).addTo(map); 
		}
		renderMap()
		
	})

	return (
		<div id='map1'></div> 
	)

}
