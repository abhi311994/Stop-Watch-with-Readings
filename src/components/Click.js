import React, { Component } from 'react'

export class Click extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			count: 0
		}
	}

	UpdateClick = () => {
		this.setState({count: this.state.count + 1})
	}
	
	render() {
		return (
			<div>
				<button onClick={this.UpdateClick}>Click {this.state.count} times</button>
			</div>
		)
	}
}

export default Click
