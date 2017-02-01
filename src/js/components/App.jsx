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
                <div className="section">
                    section 1
                </div>
                <div className="section">
                    section 2
                </div>
                <div className="section">
                    section 2
                </div>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}, require('./App.styl'))
