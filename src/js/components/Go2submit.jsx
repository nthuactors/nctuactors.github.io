import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="submitIntro">
                <div className="submittext">
                    <p>
                        清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。
                    </p>
                </div>
                <div className="submitBtn">
                    <a href="#">前往表單</a>
                </div>
            </div>
        )
    }
}, require('./Go2submit.styl'))
