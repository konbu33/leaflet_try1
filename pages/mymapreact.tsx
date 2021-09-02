import Link from 'next/link'
import { useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'

export default function mymapreact() {

	const MyMapReactLeaflet = dynamic( 
		() => import('../components/myreactleaflet'), 
		{ ssr: false } 
	)

	// const MyMapReactLeaflet = useMemo( 
	// 	() => 
	// 		dynamic( 
	// 			() => import('../components/myreactleaflet'), 
	// 			{ ssr: false } 
	// 		),
	// 	[]
	// )

	return (
		<>
			<div><Link href="/"><a>Top Page</a></Link></div>
			<div>myMapReact</div>
			<MyMapReactLeaflet/>
		</>
	)
}
