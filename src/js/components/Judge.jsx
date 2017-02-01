import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Slider from 'react-slick'

export default CSSModules(class extends Component {
    render () {
        var settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 3 } },
                { breakpoint: 100000, settings: 'unslick' }
            ]
        }

        return (
            <div className="JudgeIntro">
                <Slider {...settings}>
                    <div className="slide"><h3>1</h3></div>
                    <div className="slide"><h3>2</h3></div>
                    <div className="slide"><h3>3</h3></div>
                    <div className="slide"><h3>4</h3></div>
                    <div className="slide"><h3>5</h3></div>
                    <div className="slide"><h3>6</h3></div>
                </Slider>
            </div>
        )
    }
}, require('./Judge.styl'))
