// Code DigitalClicker Component Here
import React from 'react'
class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state ={ timesClicked: 0}
    }

    button = () => {
        this.setState(prev => ({
            timesClicked: prev.timesClicked+1
        }))
    }

    render() {
        return (
            <button onClick={this.button}>{this.state.timesClicked}</button>
        )
    }
}
export default DigitalClicker