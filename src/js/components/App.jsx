import React, { Component } from 'react'
import Containers from 'containers'
import Radium, { StyleRoot } from 'radium'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'

require('sweetalert/dist/sweetalert.css')

class Content extends Component {
    render () {
        let sectionIndex = 0
        return (
            <div>
                <Containers.Navbar/>
                <div style={{
                    height: '60px',
                    width: '100%',
                    display: 'block'
                }}></div>
                <div style={{
                    position: 'relative',
                    padding: '0 0 20px 0',
                    overflow: 'hidden'
                }}
                className={classNames('section bg_section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}>
                    <Containers.Movie/>
                    <div className="sectionTitle">
                    </div>
                    <div className="sectionContent">
                    </div>
                </div>
                <div className={classNames('section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}>
                    <div className="sectionTitle">
                        <h1>計畫簡介</h1>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    className="sectionContent">
                        <Containers.PlainIntro/>
                    </div>
                </div>
                <div className={classNames('section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}>
                    <div className="sectionTitle">
                        <h1>推薦名單</h1>
                    </div>
                    <div className="sectionContent">
                        <Containers.NominateList />
                    </div>
                </div>
                <div className={classNames('section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}>
                    <div className="sectionTitle">
                        <h1>計畫執行</h1>
                    </div>
                    <div className="sectionContent">
                        <Containers.PlainStep/>
                    </div>
                </div>
                <div className={classNames('sm_section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}>
                    <div className="sectionTitle">
                    </div>
                    <div style={{
                        height: '100%'
                    }} className="sectionContent">
                        <Containers.Go2submit/>
                    </div>
                </div>
                <div className={classNames('section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}>
                    <div className="sectionTitle">
                        <h1>評審團隊</h1>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }} className="sectionContent">
                        <Containers.Judge/>
                    </div>
                </div>
                <div className={classNames('section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}>
                    <div className="sectionTitle">
                        <h1>計畫時程</h1>
                    </div>
                    <div className="sectionContent">
                        <Containers.PlainSchedule/>
                    </div>
                </div>
                <div className={classNames('sm_section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}
                    style={{
                        minHeight: '150px'
                    }}>
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
