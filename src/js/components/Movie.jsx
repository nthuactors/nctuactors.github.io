// https://www.youtube.com/embed/VqbR0BrS-08?rel=1&autoplay=1&loop=1&playlist=VqbR0BrS-08&showinfo=0&wmode=transparent&controls=0&enablejsapi=1&origin=http://nthuactors.strikingly.com
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
// import YouTube from 'react-youtube'
import ReactPlayer from 'react-player'
export default CSSModules(class extends Component {

    // _onReady (event) {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo()
    // }
    render () {
        return (
            <div className="MovieContainers">
                XD
                <ReactPlayer url='https://www.youtube.com/watch?v=VqbR0BrS-08' playing />
            </div>
        )
    }

}, require('./Movie.styl'))
