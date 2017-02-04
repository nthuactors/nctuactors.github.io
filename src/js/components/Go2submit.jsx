import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="submitIntro">
                <div className="submittext">
                    <p>
                        我們想要找到努力實踐夢想之清華校友。
                    </p>
                    <p>
                        如果你認識、或你自己就是這樣的行動者，歡迎提名或報名！
                    </p>
                </div>
                <div className="submitBtn">
                    <a href="#">我要推薦</a>
                </div>
            </div>
        )
    }
}, require('./Go2submit.styl'))
