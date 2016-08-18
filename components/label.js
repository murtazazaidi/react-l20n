import React from 'react'
import L20n from '../react-l20n'

export default class Label extends React.Component
{
	render() {
		return (
			<div>
				<h1>{ L20n.get('hello') }</h1>
			</div>
		)
	}
};