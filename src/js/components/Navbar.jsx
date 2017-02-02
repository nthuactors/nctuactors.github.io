import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import { Link } from 'react-scroll'
import classNames from 'classnames'

@Radium
export default CSSModules(class extends Component {
    static propTypes = {
    }
    constructor (props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.state = {
            navExpand: false
        }
    }
    toggleMenu () {
        this.setState({
            navExpand: !this.state.navExpand
        })
    }
    render () {
        const expand = {
            active: this.state.navExpand
        }
        const navItem = ['清大行動家', '計畫簡介', '推薦名單', '計畫執行', '推薦表單', '評審團隊', '計畫時程', '主辦單位', '加入聯署']
        return (
            <nav id="nav" ref="nav">
                <div className={classNames('menu-btn', 'nav-menu', expand)} onClick={this.toggleMenu}></div>
                <div className="logo">
                    <h2>清大大人物</h2>
                </div>
                <div className={classNames('nav-list', expand)}>
                    {
                        navItem.map((ele, id) => (
                            <Link key={id} activeClass="active" spy={true} to={`section${id}`} offset={-60} smooth={true} duration={500} href="#">{ele}</Link>
                        ))
                    }
                </div>
            </nav>
        )
    }
}, require('./Navbar.styl'))
