import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="submitIntro">
                <div className="submittext">
                    <p className="bg_text">
                        我們想要找到努力在某個領域耕耘、實踐理想的  35 歲以下國立清華大學畢業校友，如果你腦中想起了那個他和她，請不要猶豫，給他們的努力一個被看見的機會。也歡迎推薦自己，請相信你的努力，也值得被更多人看見。我們想要找到努力實踐夢想之清華校友。
                    </p>
                    <p className="sm_text">
                        推薦者不限清大生，被推薦者需畢業於國立清華大學 (含碩博生)
                    </p>
                    <p className="sm_text">
                        推薦截止日期：02/28 截止
                    </p>

                </div>
                <div className="submitBtn">
                    <a href="https://goo.gl/forms/dlIPwGjUAIKLs6kB2" target="_blank">我要推薦</a>
                </div>
            </div>
        )
    }
}, require('./Go2submit.styl'))
