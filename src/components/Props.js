import React, { Component } from 'react'

export class Props extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>world of {this.props.name}</h3>
                {this.props.children}
            </div>
        )
    }
}

export default Props
