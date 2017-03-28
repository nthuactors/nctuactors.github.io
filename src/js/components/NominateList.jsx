import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'
import swal from 'sweetalert'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.changeFilter = this.changeFilter.bind(this)
        this.showMore = this.showMore.bind(this)
        this.state = {
            filter: 'first',
            JudgeList: [
                {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j1.jpg',
                    'name': '張鐵志',
                    'mention': '政治與文化評論家',
                    'mention2': '這樣的家庭問題，涉及的層面，既複雜，且嚴肅。用最簡單的一句話涵蓋，就是世代落差，導致世代隔閡，進而世代對立，最後不可收拾。但是若回歸到原始的起點，如果上一代願意多聆聽，下一代願意多理解，就不至於讓錯誤的步伐一直走到難以轉圜，最後造成雙方的遺憾。'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j2.jpg',
                    'name': '劉月梅',
                    'mention': '荒野保護協會理事長',
                    'mention2': '這樣的家庭問題，涉及的層面，既複雜，且嚴肅。用最簡單的一句話涵蓋，就是世代落差，導致世代隔閡，進而世代對立，最後不可收拾。但是若回歸到原始的起點，如果上一代願意多聆聽，下一代願意多理解，就不至於讓錯誤的步伐一直走到難以轉圜，最後造成雙方的遺憾。'
                }, {
                    'img_link': 'https://nthuactors.github.io/src/js/components/img/judge/j3.jpg',
                    'name': '史欽泰',
                    'mention': '前清大科管院院長',
                    'mention2': '這樣的家庭問題，涉及的層面，既複雜，且嚴肅。用最簡單的一句話涵蓋，就是世代落差，導致世代隔閡，進而世代對立，最後不可收拾。但是若回歸到原始的起點，如果上一代願意多聆聽，下一代願意多理解，就不至於讓錯誤的步伐一直走到難以轉圜，最後造成雙方的遺憾。'
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
    }
    render () {
        return (
            <div className="NominateContainer">
                <div className="filterBox">
                    <div onClick={() => { this.changeFilter('first') } }>推薦名單</div>
                    <div onClick={() => { this.changeFilter('last') } }>評審的話</div>
                </div>
                <div className="peopleBox">
                    <ul>
                    {this.state.filter === 'first'
                        ? this.props.NominateList.map((ele, id) => (
                                ele[this.state.filter]
                                ? <li key={id} >
                                    <div className="listContain" onClick={() => { this.showMore(id) } }>
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
                                <li>
                                    <div className="judgeIntro">
                                        <div className="judgeWrapper">
                                            <img src={ele.img_link}/>
                                        </div>
                                        <h3>{ele.name}</h3>
                                        <p>{ele.mention}</p>
                                    </div>
                                    <div className="judgeWord">
                                        <p> {ele.mention2} </p>
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
