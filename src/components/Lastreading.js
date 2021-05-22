import React, { Component } from 'react'

export class Lastreading extends Component {

    render() {
        const reading = this.props.readings;
        console.log(reading)
        return (
            <div>
                <p>Last Readings:</p>
                <h4>{reading.first}</h4>
                <h5>{reading.second}</h5>
                <h6>{reading.third}</h6>
            </div>
        )
    }
}

export default Lastreading
