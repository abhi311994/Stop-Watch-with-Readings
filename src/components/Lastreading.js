import React, { Component } from 'react'

export class Lastreading extends Component {
    
    shouldComponentUpdate(prevProps,nextProps){
        if(prevProps.readings === this.props.readings){
            // console.log(prevProps)
            return false
        }else {
            // console.log(prevProps)
            return true
        }
    }

    render() {
        const reading = this.props.readings;
        console.log(reading)
        return (
            <div>
            {
                reading && reading.first != null  && (
                    <div>
                        <p>Last Readings:</p>
                        <h4>{reading.first}</h4>
                        <h5>{reading.second}</h5>
                        <h6>{reading.third}</h6>
                    </div>
                )
            }
            </div>
        )
    }
}

export default Lastreading
