import React, { Component } from 'react'
import Radium from 'radium'

@Radium
export default class extends Component {
    componentDidMount () {
        console.log('here')
        this.props.getNominate()
    }
    render () {
        return (
            <div>
                here is Nominate
            </div>
        )
    }
}
