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
            <div>
                <div onClick={() => { this.changeFilter('first') } }>First</div>
                <div onClick={() => { this.changeFilter('last') } }>Last</div>
                <ul>
                {
                    this.props.NominateList.map((ele, id) => (
                            ele[this.state.filter]
                            ? <li key={id}>
                                <div>Name: {ele.name}</div>
                                <div>Name: {ele.intro}</div>
                                <img className="Nimg" src={ele.photo} />
                            </li> : null
                        )
                    )
                }
                </ul>
            </div>
        )
    }
}, require('./NominateList.styl'))
