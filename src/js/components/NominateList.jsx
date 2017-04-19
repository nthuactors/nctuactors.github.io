import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import swal from 'sweetalert'
import _ from 'lodash'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.changeFilter = this.changeFilter.bind(this)
        this.showMore = this.showMore.bind(this)
        this.state = {
            'words': '清大同儕和師長推薦的清大校友，個個年輕、優秀，也在自己的專業或喜愛的領域表現出色。有部分築夢厚實，部分看來離夢想還有一些路途要走﹔皆希望這群清大新一代榜樣，經由逐夢的過程，對未來的社會、世界產生重大的影響。他們所展現的生命故事，也是台灣這一代年輕人的縮影，燃燒著理想主義以及令人樂見的「後物質主義」世代精神！',
            filter: 'first',
            'finalPeople': [],
            JudgeList: [
                {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j1.jpg',
                    'name': '張鐵志',
                    'mention': '政治與文化評論家',
                    'mention2': '這是一個非常困難的評選，因為每個青年都有他的生命故事，都讓人看見理想主義的燃燒。從這些青年中，我們確實可以看到這一代年輕人的縮影，不論是國際參與或者回到社區與在地，又或者是商業創新結合社會理念形成社會企業，再或者是從事獨立電影、音樂與藝術，這正符合我在去年底出版的「燃燒的年代：青年世代、獨立文化與公共精神」所描述的世代精神，我也將這世代的價值稱為「後物質主義」。這個價值穿透之深，我們可以看到以理工科為主的清大學生，也有許多人把他們的熱情和專業投入在上述領域中。\n這是非常令人樂見的：他們從前人的努力們，看到新的可能性，而他們走過的路，又將為後面的學弟妹打開更多的門，讓台灣有更多元進步的可能'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j2.jpg',
                    'name': '劉月梅',
                    'mention': '荒野保護協會理事長',
                    'mention2': '參加評選的清大學子，個個年輕、優秀，也在自己的專業或喜愛的領域表現出色。面對每一位優秀的參選者，確實很難挑選出數個名額，若是名額沒有限制，真該每個都給予獎項。想想自己24-30歲時，只能顧及自己工作上的相關事務及家庭內的日常事務，而這群青年卻已經開始有了自己創新思維及社會服務工作，真是台灣社會之光，面對這一群參選者，讓我看見在台灣各個領域努力付出、不計較個人名利的青年，也看到台灣的軟實力及活力，台灣有這群年輕人真好，台灣的每個角落都有一群愛台灣而願意為台灣做事的伙伴，台灣會走出一條自己的康莊大道。'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j3.jpg',
                    'name': '史欽泰',
                    'mention': '前清大科管院院長',
                    'mention2': '在這次尋找清華築夢人的評審作業中 <br/>，很高興看到35歲以下的新一代清華學生及校友勇敢作夢並付之實現的一面。案例中看到清華大學學生的特質，受到清華大學自由的學風的培育，不僅有理工科的理性也具備人文素養，充滿了令人感動的故事。在這四十多位清華大學的年輕人，我被他們的夢想所感動。有的在學術、科學上的全心投入，有的對於環境變化帶來氣候變遷的影響，希望有所貢獻，有的看到創新的機會，為理想創業，夢想實踐帶來的價值。有追求個人天賦的藝術家、有發揮文字力量的作家、記者，希望由作品、筆尖留下深刻的印象。有關懐弱勢族群、高齡化等社會企業家。有的已經付之行動、參加了創業團隊，有的逰世界，體驗不同文化。雖然有的看來離夢想還有很長的路要走，我以鼓勵的態度來看待這些夢想家，希望他們代表著清華大學的新一代的榜樣，經由他們逐夢的過程，對未來的社會、世界産生重大的影響。'
                }
            ]
        }
    }
    changeFilter (filter) {
        this.setState({
            filter
        })
    }
    showMore (id) {
        swal({
            title: this.props.NominateList[id].name,
            text: (this.props.NominateList[id].long + this.props.NominateList[id].introduction),
            imageUrl: this.props.NominateList[id].photo,
            html: true,
            allowOutsideClick: true
        })
        // swal(this.props.NominateList[id].introduction)
    }
    componentDidMount () {
        this.props.getNominate()
        .then(() => {
            let temp
            temp = this.props.NominateList
            let tteemmp = this.props.NominateList
            console.log('qqqq: ', temp)
            console.log('-------------')
            console.log('new: ', _.orderBy(temp, ['name'], ['asc']))
            this.setState({finalPeople: tteemmp})
        })
    }
    render () {
        return (
            <div className="NominateContainer">
                <div className="filterBox">
                    <div onClick={() => { this.changeFilter('first') } }>同儕與師長推薦名單</div>
                        <div onClick={() => { this.changeFilter('last') } }>評審推薦名單</div>
                    <div onClick={() => { this.changeFilter('word') } }>評審的話</div>
                </div>
                {this.state.filter === 'last'
                    ? <div className="final_words">{this.state.words}</div>
                    : null
                }
                <div className="peopleBox">
                    <ul>
                    {this.state.filter === 'first'
                        ? this.props.NominateList.map((ele) => (
                                ele[this.state.filter]
                                ? <li key={ele.id} >
                                    <div className="listContain" onClick={() => { this.showMore(ele.id) } }>
                                        <div className="textWrapper">
                                            <div style={{
                                                fontSize: '1em'
                                            }}>
                                                <div> {ele.name} </div>
                                                <div className="subtext" dangerouslySetInnerHTML={{__html: ele.brief}} />
                                                {/* {ele.brief} */}
                                            </div>
                                        </div>
                                        <div className="imgWrapper"
                                            style={{
                                                backgroundImage: ('url("' + ele.photo + '")') // (() => (k === 1 ? ele.photo : ele.photo))()
                                            }}>
                                        </div>
                                    </div>
                                </li> : null
                            )
                        )
                    : this.state.filter === 'last'
                        ? this.state.finalPeople.map((ele) => (
                                ele[this.state.filter]
                                ? <li key={ele.id} >
                                    <div className="listContain" onClick={() => { this.showMore(ele.id) } }>
                                        <div className="textWrapper">
                                            <div style={{
                                                fontSize: '1em'
                                            }}>
                                                <div> {ele.name} </div>
                                                <div className="subtext" dangerouslySetInnerHTML={{__html: ele.brief}} />
                                                {/* {ele.brief} */}
                                            </div>
                                        </div>
                                        <div className="imgWrapper"
                                            style={{
                                                backgroundImage: ('url("' + ele.photo + '")') // (() => (k === 1 ? ele.photo : ele.photo))()
                                            }}>
                                        </div>
                                    </div>
                                </li> : null
                            )
                        )
                        : <div className='judgeWords'>
                            {
                                this.state.JudgeList.map((ele, id) => (
                                    <li key={id}>
                                        <div className="judgeIntro">
                                            <div className="judgeWrapper">
                                                <img src={ele.img_link}/>
                                            </div>
                                            <h3>{ele.name}</h3>
                                            <p>{ele.mention}</p>
                                        </div>
                                        <div className="judgeWord">
                                            <p dangerouslySetInnerHTML={{__html: ele.mention2}} />
                                        </div>
                                    </li>
                                ))
                            }
                        </div>
                    }
                    </ul>
                </div>
            </div>
        )
    }
}, require('./NominateList.styl'))
