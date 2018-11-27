import * as React from 'react'

export interface Person { name: string; age: number; gender: string; }

export default (props: Person) => {
	return (
		<div>
			<p>{props.name}</p>
			<p>{props.age}</p>
			<p>{props.gender}</p>
		</div>
	)
}