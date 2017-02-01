import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'

@Radium
export default class extends Component {
    render () {
        return (
            <StyleRoot>
                <div>XD</div>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}
