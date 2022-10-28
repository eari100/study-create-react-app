// const Clock = props => (
//     <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
// )

import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000)
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({date: new Date()}) // state 수정
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock