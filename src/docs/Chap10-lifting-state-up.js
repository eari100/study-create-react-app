import React from 'react'

const BoilingVerdict = props => {
    return props.celsius >= 100 ? <p>The warter would boil.</p> : <p>The warter would not boil.</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ''}
    }

    handleChange(e) {
        this.setState({temperature: e.target.value})
    }

    render() {
        const temperature = this.state.temperature

        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

export default Calculator