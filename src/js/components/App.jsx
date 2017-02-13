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
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                className={classNames('section bg_section', sectionIndex & 1 ? 'darken' : 'lighten')} id={`section${sectionIndex++}`}>
                    <Containers.Movie/>
                    <div className="sectionTitle">
                        <div className="logo-section"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img src="https://nthuactors.github.io/src/js/components/img/logo.png"
                                style={{
                                    width: '70%',
                                    height: 'auto',
                                    minWidth: '200px'
                                }}
                            />
                        <h3 className="logoSubtext"
                            style={{
                                margin: '15px 0',
                                color: 'white',
                                opacity: '1'
                            }}
                        >築夢不能只有踏實，更需要你的看見</h3>
                    <a href="https://goo.gl/forms/dlIPwGjUAIKLs6kB2" target="_blank"><div
                        style={{
                            padding: '10px 20px',
                            fontSize: '1.35em',
                            border: '2px solid white',
                            color: 'white'
                        }}
                    >立即推薦</div></a>
                        </div>
                    </div>
                    <div className="sectionContent"
                        style={{
                            display: 'none'
                        }}
                    >
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
