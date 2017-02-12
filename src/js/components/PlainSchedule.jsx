import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import ReactSVG from 'react-svg'

export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.state = {
            Schedule_List: [
                {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/hourglass.svg',
                    'brief': '請把握時間提名',
                    'mention': '2/28',
                    'mention2': '提名截止'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/list.svg',
                    'brief': '',
                    'mention': '3/01 ~ 3/17',
                    'mention2': '築夢家資料蒐集'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge.svg',
                    'brief': '',
                    'mention': '3/17 ~ 4/09',
                    'mention2': '評審討論及決議'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/favorites.svg',
                    'brief': '24 位清華築夢家',
                    'mention': '4/10',
                    'mention2': '公布名單'
                }
            ]
        }
    }
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
                        {
                            this.state.Schedule_List.map((ele, id) => (
                                <li>
                                    <div className="timeInfo">
                                        <div className="IconImg">
                                            <ReactSVG
                                                path={ele.img_link}
                                                className="svgItem"
                                            />
                                        </div>
                                        <div className="IconTime">
                                            <h1>{ele.mention}</h1>
                                            <h1>{ele.mention2}</h1>
                                        </div>
                                        <div className="IconBrief">
                                            {ele.brief}
                                        </div>
                                    </div>
                                    <div className="pointArrow">
                                        <img src="https://nthuactors.github.io/src/js/components/img/right-arrow.png" />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}, require('./PlainSchedule.styl'))
