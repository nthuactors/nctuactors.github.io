import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import CSSModules from 'react-css-modules'

@Radium
export default CSSModules(class extends Component {
    render () {
        return (
            <StyleRoot>
                <Containers.Navbar/>
                <div style={{
                    height: '50px',
                    width: '100%',
                    display: 'block'
                }}></div>
                <div className="section lighten">
                    <div className="sectionTitle">
                        <h1>清大行動家</h1>
                        <p></p>
                    </div>
                    <div className="sectionContent"></div>
                </div>
                <div className="section darken">
                    <div className="sectionTitle">
                        <h1>計畫簡介</h1>
                        <p></p>
                    </div>
                    <div className="sectionContent"></div>
                </div>
                <div className="section lighten">
                    <div className="sectionTitle">
                        <h1>推薦名單</h1>
                    </div>
                    <div className="sectionContent"></div>
                </div>
                <div className="section darken">
                    <div className="sectionTitle">
                        <h1>計畫執行</h1>
                    </div>
                    <div className="sectionContent"></div>
                </div>
                <div className="section lighten">
                    <div className="sectionTitle">
                        <h1>推薦表單</h1>
                    </div>
                    <div className="sectionContent"></div>
                </div>
                <div className="section darken">
                    <div className="sectionTitle">
                        <h1>評審團隊</h1>
                    </div>
                    <div className="sectionContent"></div>
                </div>
                <div className="section lighten">
                    <div className="sectionTitle">
                        <h1>計畫時程</h1>
                    </div>
                    <div className="sectionContent"></div>
                </div>
                <div className="section darken">
                    <div className="sectionTitle">
                        <h1>主辦單位</h1>
                    </div>
                    <div className="sectionContent"></div>
                </div>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}, require('./App.styl'))
