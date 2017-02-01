import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import CSSModules from 'react-css-modules'

@Radium
export default CSSModules(class extends Component {
    render () {
        return (
            <StyleRoot>
                <Containers.Navbar/>
                <div className="red">XD</div>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}, require('./App.styl'))
