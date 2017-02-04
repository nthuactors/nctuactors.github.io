import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Radium from 'radium'

@Radium
export default CSSModules(class extends Component {
    constructor (props) {
        super(props)
        this.changeFilter = this.changeFilter.bind(this)
        this.state = {
            filter: 'first'
        }
    }
    changeFilter (filter) {
        this.setState({
            filter
        })
    }
    componentDidMount () {
        this.props.getNominate()
    }
    render () {
        return (
            <div className="NominateContainer">
                <div className="filterBox">
                    <div onClick={() => { this.changeFilter('first') } }>初賽名單</div>
                    <div onClick={() => { this.changeFilter('last') } }>最後入圍</div>
                </div>
                <div className="peopleBox">
                    <ul>
                    {
                        this.props.NominateList.map((ele, id) => (
                                ele[this.state.filter]
                                ? <li key={id}>
                                    <div> {ele.name} </div>
                                    <div> {ele.intro} </div>
                                    <div className="imgWrapper">
                                        <img className="Nimg" src={ele.photo} />
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
