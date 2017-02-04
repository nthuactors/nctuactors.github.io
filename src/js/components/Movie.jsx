import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import YouTube from 'react-youtube'
// import ReactPlayer from 'react-player'
export default CSSModules(class extends Component {
    render () {
        return (
            <div className="MovieContainers">
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/VqbR0BrS-08?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=VqbR0BrS-08" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }

}, require('./Movie.styl'))
