import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

export default CSSModules(class extends Component {
    render () {
        return (
            <div className="ScheduleIntro">
                <div className="ScheduleText">
                    <p>
                        清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。我們想要尋找35歲以下、用具體且持續行動做出改變的清大人，並藉由故事採訪描繪出新世代的面貌與精神，讓這群勇於改變的新世代「行動家」，能被更多人看見，共同「創造連結」，不只讓這群人能觸及校園，更能引領社會，紮根土地，融合文化，一起走出永遠值得更好的未來。
                    </p>
                </div>
                <div className="ScheduleList">
                    <ul>
                        <li>
                            <div className="timeInfo">
                                <div className="IconImg">
                                    <img src="http://i.imgur.com/keURKK4.png"/>
                                </div>
                                <div className="IconBrief">
                                    提名截止
                                </div>
                            </div>
                            <div className="pointArrow">
                                <img src="./arrow.png" />
                            </div>
                        </li>
                        <li>
                            <div className="timeInfo">
                                <div className="IconImg">
                                    <img src="http://i.imgur.com/Q5AwnDc.png"/>
                                </div>
                                <div className="IconBrief">
                                    第一階段書審
                                </div>
                            </div>
                            <div className="pointArrow">
                                <img src="./arrow.png" />
                            </div>
                        </li>
                        <li>
                            <div className="timeInfo">
                                <div className="IconImg">
                                    <img src="http://i.imgur.com/pUp6Opi.png"/>
                                </div>
                                <div className="IconBrief">
                                    未來大人物
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}, require('./PlainSchedule.styl'))
