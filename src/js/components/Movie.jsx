import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import YouTube from 'react-youtube'

export default CSSModules(class extends Component {
    _onReady (event) {
        event.target.mute()
    }
    render () {
        const opts = {
            playerVars: {
                autoplay: 1,
                controls: 0,
                autohide: 1,
                loop: 1,
                showinfo: 0,
                modestbranding: 0,
                playlist: 'VqbR0BrS-08',
                disablekb: 1,
                origin: 'https://nthuactors.github.io/dist/'
            }
        }

        return (
            <div className="MovieContainers">
                <div className="video-background">
                    <div className="video-foreground">
                        <YouTube
                            videoId="VqbR0BrS-08"
                            opts={opts}
                            onReady={this._onReady}
                            />
                    </div>
                </div>
            </div>
        )
    }

}, require('./Movie.styl'))
