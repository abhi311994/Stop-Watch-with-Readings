import React, { Component } from 'react';
import Lastreading from './Lastreading';

const LOCAL_STORAGE_STOPWATCH = 'stopwatch.app'
class Stopwatch extends Component{
    constructor(props){
        super(props)
        this.state = {
            startTime : 0,
            runningStatus : false,
            readings: {
                first: null,
                second: null,
                third: null
            }
        }
        this.startHandler = this.startHandler.bind(this)
        this.stopHandler = this.stopHandler.bind(this)
        this.saveHandler = this.saveHandler.bind(this)
    }

    componentDidMount = () => {
        try{
            const reading = JSON.parse(localStorage.getItem(LOCAL_STORAGE_STOPWATCH))
            if (reading) {
                this.setState({readings : reading})
            }
        }
        catch{
            return
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

    startHandler = () => {
        if(this.state.runningStatus){
            clearInterval(this.timer)
            this.setState({
                runningStatus: false
            })
        }else {
            this.timer = setInterval(() => {
                this.setState({
                    startTime: this.state.startTime + 1,
                    runningStatus: true
                })
            },1000);
        }
    }

    stopHandler = () =>{
        clearInterval(this.timer)
        this.setState({
            startTime: 0,
            runningStatus: false
        })
    }

    saveHandler = () => {
        if (this.state.startTime > 0){ 
            if (this.state.readings.first === null){
                this.setState({
                    readings:{ ...this.state.readings,
                        first : ("0"+Math.floor(this.state.startTime/60)).slice(-2)+'m '+("0"+this.state.startTime%60).slice(-2)+'s'
                    }
                })
            }else if( this.state.readings.second === null){
                this.setState({
                    readings:{ ...this.state.readings,
                        second : this.state.readings.first,
                        first : ("0"+Math.floor(this.state.startTime/60)).slice(-2)+'m '+("0"+this.state.startTime%60).slice(-2)+'s'
                    }
                })
            }else if(this.state.readings.third === null){
                this.setState({
                    readings:{ ...this.state.readings,
                        third : this.state.readings.second,
                        second : this.state.readings.first,
                        first : ("0"+Math.floor(this.state.startTime/60)).slice(-2)+'m '+("0"+this.state.startTime%60).slice(-2)+'s'
                    }
                })
            }else{
                this.setState({
                    readings:{ ...this.state.readings,
                        third : this.state.readings.second,
                        second : this.state.readings.first,
                        first : ("0"+Math.floor(this.state.startTime/60)).slice(-2)+'m '+("0"+this.state.startTime%60).slice(-2)+'s'
                    }
                })
            }
        }else{
            alert("Please run the stopwatch to save readings")
        }
    }

    componentDidUpdate(){
        if (this.state.readings){
            localStorage.setItem(LOCAL_STORAGE_STOPWATCH, JSON.stringify(this.state.readings))
        }
    }

    render() {
        return (
            <div>
                <h1>STOPWATCH</h1>
                <h2>{("0"+Math.floor(this.state.startTime/60)).slice(-2)}m {("0"+this.state.startTime%60).slice(-2)}s</h2>
                <button onClick={this.startHandler}>{this.state.runningStatus ? 'Pause' : 'Start'}</button>
                {(!this.state.runningStatus && this.state.startTime>0) && (<button onClick={this.stopHandler}>Stop</button>)}
                <button onClick={this.saveHandler}>Save Reading</button>
                <Lastreading readings={this.state.readings}/>
            </div>
        )
    }
}

export default Stopwatch