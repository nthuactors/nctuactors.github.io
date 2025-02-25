import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="Footer">
                <div className="FooterMedia">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/nthuactors/" target="_blank">
                                <div className="IconImg">
                                    <img src="https://nthuactors.github.io/src/js/components/img/social.png"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:celia.chen@iss.nthu.edu.tw">
                                <div className="IconImg">
                                    <img src="https://nthuactors.github.io/src/js/components/img/web.png"/>
                                </div>
                            </a>
                        </li>
                        {/* <li>
                            <div className="IconImg">
                                <img src="https://nthuactors.github.io/src/js/components/img/social-1.png"/>
                            </div>
                        </li> */}
                    </ul>
                </div>
                <div className="FooterText">
                    <p>
                        築夢不能只有踏實，更需要你的看見
                    </p>
                    <p>
                        Copyright © 2017 National Tsing Hua University ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        )
    }
}, require('./Footer.styl'))
