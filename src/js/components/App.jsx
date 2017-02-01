import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import CSSModules from 'react-css-modules'

class Content extends Component {
    render () {
        return (
            <div>
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
                    </div>
                    <div style={{
                        width: '75%',
                        minWidth: '600px',
                        minHeight: '500px',
                        '@media screen and (maxWidth: 1024px)': {
                            width: '100%'
                        }
                    }}
                    className="sectionContent">
                        <Containers.PlainIntro/>
                    </div>
                </div>
                <div className="section lighten">
                    <div className="sectionTitle">
                        <h1>推薦名單</h1>
                    </div>
                    <div className="sectionContent">
                        <Containers.NominateList />
                    </div>
                </div>
                <div className="section darken">
                    <div className="sectionTitle">
                        <h1>計畫執行</h1>
                    </div>
                    <div className="sectionContent">
                        <Containers.PlainStep/>
                    </div>
                </div>
                <div className="sm_section lighten">
                    <div className="sectionTitle">
                        <h1>推薦表單</h1>
                    </div>
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
                    <div className="sectionContent">
                        <Containers.PlainSchedule/>
                    </div>
                </div>
                <div className="sm_section darken">
                    <div style={{
                        display: 'none'
                    }}
                    className="sectionTitle">
                        <h1>主辦單位</h1>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                    className="sectionContent">
                        <Containers.Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

@Radium
export default CSSModules(class extends Component {
    render () {
        return (
            <StyleRoot>
                <Content/>
                { process.env.NODE_ENV !== 'production' ? <Containers.DevTools/> : null }
            </StyleRoot>
        )
    }
}, require('./App.styl'))
