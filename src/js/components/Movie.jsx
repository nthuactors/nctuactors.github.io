import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="MovieContainers">
                <video autoPlay loop muted style={{
                    width: '100vw',
                    minHeight: 'calc(100vh-50px)'
                }}>
                    <source src="https://nthuactors.github.io/src/movie/MVI_2870.MP4" type="video/mp4" />
                </video>
            </div>
        )
    }

}, require('./Movie.styl'))
