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
            filter: 'first'
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
                    <div onClick={() => { this.changeFilter('last') } }>最終名單</div>
                </div>
                <div className="peopleBox">
                    <ul>
                    {
                        this.props.NominateList.map((ele, id) => (
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
                    }
                    </ul>
                </div>
            </div>
        )
    }
}, require('./NominateList.styl'))
