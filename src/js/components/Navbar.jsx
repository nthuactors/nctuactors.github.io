import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
var Scroll = require('react-scroll')

@Radium
export default CSSModules(class extends Component {
    static propTypes = {
    }
    constructor (props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            navExpand: false
        }
    }
    toggleMenu () {
        this.setState({
            navExpand: !this.state.navExpand
        })
    }
    handleClick (scrollto) {
        this.setState({
            navExpand: false
        })
        let delay = this.state.navExpand ? 350 : 0
        Scroll.scroller.scrollTo(scrollto, {
            delay: delay,
            duration: 500,
            smooth: true,
            activeClass: 'active',
            offset: -60
        })
    }
    render () {
        const expand = {
            active: this.state.navExpand
        }
        const navItem = ['清華築夢者', '計畫簡介', '推薦名單', '計畫執行', '推薦表單', '評審團隊', '計畫時程', '主辦單位']
        return (
            <nav id="nav" ref="nav">
                <div className={classNames('menu-btn', 'nav-menu', expand)} onClick={this.toggleMenu}></div>
                <div className="logo">
                    <h2>尋清華築夢家</h2>
                </div>
                <div className={classNames('nav-list', expand)}>
                    {
                        navItem.map((ele, id) => (
                            <a key={id} onClick={ () => { this.handleClick(`section${id}`) } } >{ele}</a>
                        ))
                    }
                </div>
            </nav>
        )
    }
}, require('./Navbar.styl'))
