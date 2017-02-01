import React, { Component } from 'react'
import Radium from 'radium'
import CSSModules from 'react-css-modules'
import elementClass from 'element-class'

@Radium
export default CSSModules(class extends Component {
    static propTypes = {
        // toggleMenu: PropTypes.func.isRequired
    }
    toggleMenu () {
        var btnElems = document.querySelector('.menu-btn')
        elementClass(btnElems).toggle('active')

        var listElems = document.querySelector('.nav-list')
        elementClass(listElems).toggle('active')
    }
    render () {
        return (
            <nav id="nav">
              <div className="menu-btn nav-menu" onClick={this.toggleMenu}></div>
              <div className="logo">
                <h2>清大大人物</h2>
              </div>
              <div className="nav-list">
                <a href="#">清大行動家</a>
                <a href="#">計畫簡介</a>
                <a href="#">推薦名單</a>
                <a href="#">計畫執行</a>
                <a href="#">推薦表單</a>
                <a href="#">評審團隊</a>
                <a href="#">計畫時程</a>
                <a href="#">主辦單位</a>
                <a href="#">加入聯署</a>
              </div>
            </nav>
        )
    }
}, require('./Navbar.styl'))
