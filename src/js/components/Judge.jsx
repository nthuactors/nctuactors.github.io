import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Slider from 'react-slick'

export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.state = {
            JudgeList: [
                {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/p1.jpg',
                    'name': 'Kathleen',
                    'mention': 'blalabla',
                    'mention2': 'blalabla'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/p2.jpeg',
                    'name': 'Laura',
                    'mention': 'blalabla',
                    'mention2': 'blalabla'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/p3.jpeg',
                    'name': 'James',
                    'mention': 'blalabla',
                    'mention2': 'blalabla'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/p4.jpeg',
                    'name': 'Jeanette',
                    'mention': 'blalabla',
                    'mention2': 'blalabla'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/p5.jpeg',
                    'name': 'Santiago',
                    'mention': 'blalabla',
                    'mention2': 'blalabla'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/p6.jpg',
                    'name': 'Caroline',
                    'mention': 'blalabla',
                    'mention2': 'blalabla'
                }
            ]
        }
    }
    render () {
        var settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 111111, settings: { slidesToShow: 3, slidesToScroll: 1 } }
            ],
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true
            // fade: true
        }

        return (
            <div className="JudgeIntro">
                <Slider {...settings}>
                    {
                        this.state.JudgeList.map((ele, id) => (
                            <div className="slide">
                                <div className="slideInner">
                                    <div className="slideImg">
                                        <img src={ele.img_link} />
                                    </div>
                                    <div className="slideContent">
                                        <h1> {ele.name} </h1>
                                        <h2> {ele.mention} </h2>
                                        <h2> {ele.mention2} </h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        )
    }
}, require('./Judge.styl'))
