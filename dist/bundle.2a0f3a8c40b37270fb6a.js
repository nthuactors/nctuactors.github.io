webpackJsonp([1],{0:function(e,t,n){e.exports=n(330)},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i,c,s,f,d,m,p,h,y,v,b,g,_,E,j,w;Object.defineProperty(t,"__esModule",{value:!0}),a=n(335),l=r(a),o=n(336),u=r(o),i=n(337),c=r(i),s=n(338),f=r(s),d=n(339),m=r(d),p=n(340),h=r(p),y=n(341),v=r(y),b=n(342),g=r(b),_=n(343),E=r(_),j=n(344),w=r(j),t.default={App:l.default,Footer:u.default,Go2submit:c.default,Judge:f.default,Movie:m.default,Navbar:h.default,NominateList:v.default,PlainIntro:g.default,PlainSchedule:E.default,PlainStep:w.default}},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i,c,s;Object.defineProperty(t,"__esModule",{value:!0}),a=n(1),l=r(a),o=n(185),u=n(836),i=r(u),c=n(827),s=r(c),t.default=(0,o.createDevTools)(l.default.createElement(s.default,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q",defaultIsVisible:!1},l.default.createElement(i.default,null)))},188:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i,c,s,f,d,m,p,h,y,v,b,g,_,E,j,w,O,N;Object.defineProperty(t,"__esModule",{value:!0}),a=n(345),l=r(a),o=n(346),u=r(o),i=n(187),c=r(i),s=n(347),f=r(s),d=n(348),m=r(d),p=n(349),h=r(p),y=n(350),v=r(y),b=n(351),g=r(b),_=n(352),E=r(_),j=n(353),w=r(j),O=n(354),N=r(O),t.default={App:l.default,Footer:u.default,DevTools:c.default,Go2submit:f.default,Judge:m.default,Movie:h.default,Navbar:v.default,NominateList:g.default,PlainIntro:E.default,PlainSchedule:w.default,PlainStep:N.default}},189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){var e=[u.default,c.default],t=(0,l.compose)(l.applyMiddleware.apply(void 0,e),m.default.instrument(),window.devToolsExtensio?window.devToolsExtension():function(e){return e})(l.createStore),n=t(f.default);return n}var l,o,u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),l=n(186),o=n(844),u=r(o),i=n(843),c=r(i),s=n(356),f=r(s),d=n(187),m=r(d),t.default=a()},330:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(1),l=r(a),o=n(70),u=n(15),i=n(357),c=r(i),s=n(189),f=r(s),d=n(358);"undefined"!=typeof document&&window&&(window.chr=d.chr,window.ord=d.ord,window.mapArrayToObject=d.mapArrayToObject,window.mapObject=d.mapObject,window.fromStringToDate=d.fromStringToDate,window.onload=function(){return(0,o.render)(l.default.createElement(u.Provider,{store:f.default},l.default.createElement(c.default,null)),document.getElementById("app"))})},331:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o;Object.defineProperty(t,"__esModule",{value:!0}),a=n(320),l=n(334),o=r(l),t.default={get:(0,a.createAction)("GET_NOMINATE",o.default.Nominate.get)}},332:[869,331],333:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(){return new Promise(function(e,t){var n="1DKPZZLbZfOMt3RjzrvvIBT350CblIYPk1RItKThZXq4",r="https://spreadsheets.google.com/tq?key="+n+"&tqx=out:csv",a=new XMLHttpRequest;a.open("GET",r),a.send(),a.onload=function(t){e(a.responseText)}})}}},334:[869,333],335:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m,p,h,y,v,b,g;Object.defineProperty(t,"__esModule",{value:!0}),i=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(188),d=r(f),m=n(149),p=r(m),h=n(20),y=r(h),v=n(51),b=r(v),n(484),g=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=0;return s.default.createElement("div",null,s.default.createElement(d.default.Navbar,null),s.default.createElement("div",{style:{height:"60px",width:"100%",display:"block"}}),s.default.createElement("div",{style:{position:"relative",padding:"0 0 20px 0",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},className:(0,b.default)("section bg_section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement(d.default.Movie,null),s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("div",{className:"logo-section",style:{width:"100%",height:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},s.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/logo.png",style:{width:"70%",height:"100%"}}),s.default.createElement("h3",{style:{margin:"15px 0",fontSize:"1.75em",color:"white",opacity:"1"}},"築夢不能只有踏實，更需要你的看見"),s.default.createElement("a",{href:"https://goo.gl/forms/dlIPwGjUAIKLs6kB2",target:"_blank"},s.default.createElement("div",{style:{padding:"10px 20px",fontSize:"1.35em",border:"2px solid white",color:"white"}},"立即推薦")))),s.default.createElement("div",{className:"sectionContent",style:{display:"none"}})),s.default.createElement("div",{className:(0,b.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"計畫簡介")),s.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},className:"sectionContent"},s.default.createElement(d.default.PlainIntro,null))),s.default.createElement("div",{className:(0,b.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"推薦名單")),s.default.createElement("div",{className:"sectionContent"},s.default.createElement(d.default.NominateList,null))),s.default.createElement("div",{className:(0,b.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"計畫執行")),s.default.createElement("div",{className:"sectionContent"},s.default.createElement(d.default.PlainStep,null))),s.default.createElement("div",{className:(0,b.default)("sm_section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"}),s.default.createElement("div",{style:{height:"100%"},className:"sectionContent"},s.default.createElement(d.default.Go2submit,null))),s.default.createElement("div",{className:(0,b.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"評審團隊")),s.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},className:"sectionContent"},s.default.createElement(d.default.Judge,null))),s.default.createElement("div",{className:(0,b.default)("section",1&e?"darken":"lighten"),id:"section"+e++},s.default.createElement("div",{className:"sectionTitle"},s.default.createElement("h1",null,"計畫時程")),s.default.createElement("div",{className:"sectionContent"},s.default.createElement(d.default.PlainSchedule,null))),s.default.createElement("div",{className:(0,b.default)("sm_section",1&e?"darken":"lighten"),id:"section"+e++,style:{minHeight:"150px"}},s.default.createElement("div",{style:{display:"none"},className:"sectionTitle"},s.default.createElement("h1",null,"主辦單位")),s.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},className:"sectionContent"},s.default.createElement(d.default.Footer,null))))}}]),t}(c.Component),t.default=(0,y.default)((0,p.default)(u=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return s.default.createElement(m.StyleRoot,null,s.default.createElement(g,null),null)}}]),t}(c.Component))||u,n(474))},336:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=n(20),f=r(s),t.default=(0,f.default)(function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"Footer"},c.default.createElement("div",{className:"FooterMedia"},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/social.png"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"mailto:celia.chen@iss.nthu.edu.tw"},c.default.createElement("div",{className:"IconImg"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/web.png"})))))),c.default.createElement("div",{className:"FooterText"},c.default.createElement("p",null,"築夢不能只有踏實，更需要你的看見"),c.default.createElement("p",null,"Copyright © 2017 National Tsing Hua University ALL RIGHTS RESERVED.")))}}]),t}(i.Component),n(475))},337:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=n(20),f=r(s),t.default=(0,f.default)(function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"submitIntro"},c.default.createElement("div",{className:"submittext"},c.default.createElement("p",{className:"bg_text"},"我們想要找到努力在某個領域耕耘、實踐理想的  35 歲以下國立清華大學畢業校友，如果你腦中想起了那個他和她，請不要猶豫，給他們的努力一個被看見的機會。也歡迎推薦自己，請相信你的努力，也值得被更多人看見。我們想要找到努力實踐夢想之清華校友。"),c.default.createElement("p",{className:"sm_text"},"推薦者不限清大生，被推薦者需畢業於國立清華大學 (含碩博生)"),c.default.createElement("p",{className:"sm_text"},"推薦截止日期：02/28 截止")),c.default.createElement("div",{className:"submitBtn"},c.default.createElement("a",{href:"https://goo.gl/forms/dlIPwGjUAIKLs6kB2",target:"_blank"},"我要推薦")))}}]),t}(i.Component),n(476))},338:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=n(20),f=r(s),d=n(804),m=r(d),t.default=(0,f.default)(function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={JudgeList:[{img_link:"https://nthuactors.github.io/src/js/components/img/judge/j1.jpg",name:"張鐵志",mention:"政治與文化評論家",mention2:" "},{img_link:"https://nthuactors.github.io/src/js/components/img/judge/j2.jpg",name:"劉月梅",mention:"荒野保護協會理事長",mention2:""},{img_link:"https://nthuactors.github.io/src/js/components/img/judge/coming.png",name:"?",mention:"陸續邀請中",mention2:""}]},n}return o(t,e),u(t,[{key:"render",value:function(){var e={dots:!0,infinite:!0,arrows:!1,speed:500,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:111111,settings:{slidesToShow:3,slidesToScroll:1}}],autoplay:!0,autoplaySpeed:3e5,pauseOnHover:!0};return c.default.createElement("div",{className:"JudgeIntro"},c.default.createElement(m.default,e,this.state.JudgeList.map(function(e,t){return c.default.createElement("div",{className:"slide"},c.default.createElement("div",{className:"slideInner"},c.default.createElement("div",{className:"slideImg"},c.default.createElement("img",{src:e.img_link})),c.default.createElement("div",{className:"slideContent"},c.default.createElement("h1",null," ",e.name," "),c.default.createElement("h2",null," ",e.mention," "),c.default.createElement("h2",null," ",e.mention2," "))))})))}}]),t}(i.Component),n(477))},339:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=n(20),f=r(s),d=n(810),m=r(d),t.default=(0,f.default)(function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"_onReady",value:function(e){e.target.mute()}},{key:"render",value:function(){var e={playerVars:{autoplay:1,controls:0,autohide:1,loop:1,showinfo:0,modestbranding:0,playlist:"VqbR0BrS-08",disablekb:1}};return c.default.createElement("div",{className:"MovieContainers"},c.default.createElement("div",{className:"video-background"},c.default.createElement("div",{className:"video-foreground"},c.default.createElement(m.default,{videoId:"VqbR0BrS-08",opts:e,onReady:this._onReady}))))}}]),t}(i.Component),n(478))},340:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m,p,h,y,v,b,g;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),d=r(f),m=n(149),p=r(m),h=n(20),y=r(h),v=n(51),b=r(v),g=n(799),t.default=(0,y.default)((0,p.default)((s=c=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleMenu=n.toggleMenu.bind(n),n.handleClick=n.handleClick.bind(n),n.state={navExpand:!1},n}return o(t,e),u(t,[{key:"toggleMenu",value:function(){this.setState({navExpand:!this.state.navExpand})}},{key:"handleClick",value:function(e){this.setState({navExpand:!1});var t=this.state.navExpand?350:0;g.scroller.scrollTo(e,{delay:t,duration:500,smooth:!0,activeClass:"active",offset:-60})}},{key:"render",value:function(){var e=this,t={active:this.state.navExpand},n=["清華築夢者","計畫簡介","推薦名單","計畫執行","推薦表單","評審團隊","計畫時程","主辦單位"];return d.default.createElement("nav",{id:"nav",ref:"nav"},d.default.createElement("div",{className:(0,b.default)("menu-btn","nav-menu",t),onClick:this.toggleMenu}),d.default.createElement("div",{className:"logo"},d.default.createElement("h2",null,"尋清華築夢家")),d.default.createElement("div",{className:(0,b.default)("nav-list",t)},n.map(function(t,n){return d.default.createElement("a",{key:n,onClick:function(){e.handleClick("section"+n)}},t)})))}}]),t}(f.Component),c.propTypes={},i=s))||i,n(479))},341:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m,p,h,y;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=r(c),f=n(20),d=r(f),m=n(149),p=r(m),h=n(858),y=r(h),t.default=(0,d.default)((0,p.default)(i=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.changeFilter=n.changeFilter.bind(n),n.showMore=n.showMore.bind(n),n.state={filter:"first"},n}return o(t,e),u(t,[{key:"changeFilter",value:function(e){this.setState({filter:e})}},{key:"showMore",value:function(e){(0,y.default)({title:this.props.NominateList[e].name,text:this.props.NominateList[e].long+this.props.NominateList[e].introduction,imageUrl:this.props.NominateList[e].photo,html:!0,allowOutsideClick:!0})}},{key:"componentDidMount",value:function(){this.props.getNominate()}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"NominateContainer"},s.default.createElement("div",{className:"filterBox"},s.default.createElement("div",{onClick:function(){e.changeFilter("first")}},"推薦名單"),s.default.createElement("div",{onClick:function(){e.changeFilter("last")}},"最終名單")),s.default.createElement("div",{className:"peopleBox"},s.default.createElement("ul",null,this.props.NominateList.map(function(t,n){return t[e.state.filter]?s.default.createElement("li",{key:n},s.default.createElement("div",{className:"listContain",onClick:function(){e.showMore(n)}},s.default.createElement("div",{className:"textWrapper"},s.default.createElement("div",{style:{fontSize:"1em"}},s.default.createElement("div",null," ",t.name," "),s.default.createElement("div",{className:"subtext",dangerouslySetInnerHTML:{__html:t.brief}}))),s.default.createElement("div",{className:"imgWrapper",style:{backgroundImage:'url("'+t.photo+'"'}},s.default.createElement("img",{className:"Nimg",src:t.photo})))):null}))))}}]),t}(c.Component))||i,n(480))},342:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=n(20),f=r(s),d=n(182),m=r(d),t.default=(0,f.default)(function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"PlainIntro"},c.default.createElement("div",{className:"PlainText"},c.default.createElement("p",null,"清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。我們想要尋找35歲以下、用具體且持續行動做出改變的清大人，並藉由故事採訪描繪出新世代的面貌與精神，讓這群勇於改變的新世代「築夢者」，能被更多人看見，共同「創造連結」，不只讓這群人能觸及校園，更能引領社會，紮根土地，融合文化，一起走出永遠值得更好的未來。")),c.default.createElement("div",{className:"PlainIcon"},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/nature.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"環境生態")),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/technology.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"產業創新")),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/animal.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"人文藝術")),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/home.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"在地經營")),c.default.createElement("li",null,c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/agenda.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"教育紮根")))))}}]),t}(i.Component),n(481))},343:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=n(20),f=r(s),d=n(182),m=r(d),t.default=(0,f.default)(function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={Schedule_List:[{img_link:"https://nthuactors.github.io/src/js/components/img/hourglass.svg",brief:"",mention:"2/28",mention2:"提名截止"},{img_link:"https://nthuactors.github.io/src/js/components/img/list.svg",brief:"",mention:"3/01 ~ 3/17",mention2:"築夢家資料蒐集"},{img_link:"https://nthuactors.github.io/src/js/components/img/judge.svg",brief:"",mention:"3/17 ~ 4/09",mention2:"評審討論及決議"},{img_link:"https://nthuactors.github.io/src/js/components/img/favorites.svg",brief:"",mention:"4/10",mention2:"公布名單"}]},n}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"ScheduleIntro"},c.default.createElement("div",{className:"ScheduleText"},c.default.createElement("p",null,"清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。我們想要尋找35歲以下、用具體且持續行動做出改變的清大人，並藉由故事採訪描繪出新世代的面貌與精神，讓這群勇於改變的新世代「行動家」，能被更多人看見，共同「創造連結」，不只讓這群人能觸及校園，更能引領社會，紮根土地，融合文化，一起走出永遠值得更好的未來。")),c.default.createElement("div",{className:"ScheduleList"},c.default.createElement("ul",null,this.state.Schedule_List.map(function(e,t){return c.default.createElement("li",null,c.default.createElement("div",{className:"timeInfo"},c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:e.img_link,className:"svgItem"})),c.default.createElement("div",{className:"IconTime"},c.default.createElement("h1",{className:"time"},e.mention),c.default.createElement("h1",null,e.mention2)),c.default.createElement("div",{className:"IconBrief"},e.brief)),c.default.createElement("div",{className:"pointArrow"},c.default.createElement("img",{src:"https://nthuactors.github.io/src/js/components/img/right-arrow.png"})))}))))}}]),t}(i.Component),n(482))},344:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=n(20),f=r(s),d=n(182),m=r(d),t.default=(0,f.default)(function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"StepIntro"},c.default.createElement("div",{className:"StepText"},c.default.createElement("p",null,"清華精神：「厚德載物，自強不息」。我們希望透過此計畫，讓行動得以傳承，改變得以蔓延。我們想要尋找35歲以下、用具體且持續行動做出改變的清大人，並藉由故事採訪描繪出新世代的面貌與精神，讓這群勇於改變的新世代「行動家」，能被更多人看見，共同「創造連結」，不只讓這群人能觸及校園，更能引領社會，紮根土地，融合文化，一起走出永遠值得更好的未來。")),c.default.createElement("div",{className:"StepList"},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("div",{className:"IconContain"},c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/karaoke.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"訪談故事撰寫"))),c.default.createElement("li",null,c.default.createElement("div",{className:"IconContain"},c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/technology-1.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"短篇影音紀錄"))),c.default.createElement("li",null,c.default.createElement("div",{className:"IconContain"},c.default.createElement("div",{className:"IconImg"},c.default.createElement(m.default,{path:"https://nthuactors.github.io/src/js/components/img/book.svg",className:"svgItem",style:{}})),c.default.createElement("div",{className:"IconBrief"},"故事蒐集成冊"))))))}}]),t}(i.Component),n(483))},345:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.App)},346:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.Footer)},347:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.Go2submit)},348:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.Judge)},349:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.Movie)},350:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.Navbar)},351:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i,c,s;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=n(332),i=r(u),c=function(e){return{NominateList:e.Nominate.list}},s=function(e){return{getNominate:function(){return e(i.default.Nominate.get())}}},t.default=(0,a.connect)(c,s)(o.default.NominateList)},352:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{
default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.PlainIntro)},353:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.PlainSchedule)},354:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u,i;Object.defineProperty(t,"__esModule",{value:!0}),a=n(15),l=n(18),o=r(l),u=function(e){return{}},i=function(e){return{}},t.default=(0,a.connect)(u,i)(o.default.PlainStep)},355:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u;Object.defineProperty(t,"__esModule",{value:!0}),a=n(320),l=n(471),o=r(l),u={list:[]},t.default=(0,a.handleActions)({GET_NOMINATE:{next:function(e,t){var n,r=t.payload,a=o.default.toArray(r,{delimiter:",",quote:'"'});return a.shift(),n=a.map(function(e){return{name:e[0],introduction:e[1],photo:e[2],first:!!e[3],last:!!e[4],brief:e[5],long:e[6]}}),{list:n}},throw:function(e,t){return t.payload,e}}},u)},356:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a,l,o,u;Object.defineProperty(t,"__esModule",{value:!0}),a=n(186),l=n(294),o=n(355),u=r(o),t.default=(0,a.combineReducers)({routing:l.routerReducer,Nominate:u.default})},357:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,i,c,s,f,d,m,p,h,y,v;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,u=function(){function e(e,t){var n,r;for(n=0;n<t.length;n++)r=t[n],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),s=n(785),f=n(189),d=r(f),m=n(294),p=n(188),h=r(p),y=(0,m.syncHistoryWithStore)(s.browserHistory,d.default),v=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement(s.Router,{history:y},c.default.createElement(s.Route,{path:"*",component:h.default.App}))}}]),t}(i.Component),t.default=v},358:function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r,a,l,o,u;Object.defineProperty(t,"__esModule",{value:!0}),r=t.mapArrayToObject=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n={};return e.map(function(e){return n[e[t]]=e}),n},a=t.mapObject=function(e,t){var n,r,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=Object.keys(e),o=[],u=0;a&&(l=l.reverse());for(n in l)r=l[n],o.push(t(e[r],u++,r));return o},l=t.ord=function(e){return e.charCodeAt(0)},o=t.chr=function(e){return String.fromCharCode(e)},u=t.fromStringToDate=function(e){var t=e.split(/[^0-9]/);return t[1]-=1,new(Function.prototype.bind.apply(Date,[null].concat(n(t))))}},474:function(e,t){},475:474,476:474,477:474,478:474,479:474,480:474,481:474,482:474,483:474,484:474,869:function(e,t,n,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l,o;Object.defineProperty(t,"__esModule",{value:!0}),l=n(r),o=a(l),t.default={Nominate:o.default}}});