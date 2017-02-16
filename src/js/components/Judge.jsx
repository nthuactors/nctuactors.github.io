import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Slider from 'react-slick'

export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.state = {
            JudgeList: [
                {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j1.jpg',
                    'name': '張鐵志',
                    'mention': '政治與文化評論家',
                    'mention2': ' '
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j2.jpg',
                    'name': '劉月梅',
                    'mention': '荒野保護協會理事長',
                    'mention2': ''
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j3.jpg',
                    'name': '史欽泰',
                    'mention': '前清大科管院院長',
                    'mention2': '前工研院院長'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/coming.png',
                    'name': '?',
                    'mention': '陸續邀請中',
                    'mention2': ''
                }
                //, {
                //     'img_link': 'https://nthuactors.github.io/src/js/components/img/p6.jpg',
                //     'name': 'Caroline',
                //     'mention': 'blalabla',
                //     'mention2': 'blalabla'
                // }
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
            autoplaySpeed: 300000,
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
