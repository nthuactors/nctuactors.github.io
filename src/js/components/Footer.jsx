import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="Footer">
                <div className="FooterLogo">
                    <ul>
                        <li>
                            <div className="IconImg">
                                <img src="./img/balance.png"/>
                            </div>
                        </li>
                        <li>
                            <div className="IconImg">
                                <img src="./img/group.png"/>
                            </div>
                        </li>
                        <li>
                            <div className="IconImg">
                                <img src="./img/business.png"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="FooterText">
                    <p>
                        清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。
                    </p>
                </div>
                <div className="FooterMedia">
                    <ul>
                        <li>
                            <div className="IconImg">
                                <img src="./img/balance.png"/>
                            </div>
                        </li>
                        <li>
                            <div className="IconImg">
                                <img src="./img/group.png"/>
                            </div>
                        </li>
                        <li>
                            <div className="IconImg">
                                <img src="./img/business.png"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}, require('./Footer.styl'))
