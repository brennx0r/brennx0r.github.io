(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var a=n(6),r=n.n(a),o=n(0),i=n.n(o),c=n(134),l=n(142),u=n.n(l),s=n(138),d=n(137),p=n(133),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.site.siteMetadata.description,a=e.allMarkdownRemark.edges;return i.a.createElement(d.a,{location:this.props.location,title:t},i.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),i.a.createElement(s.a,null),a.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},i.a.createElement(c.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(i.a.Component);t.default=m;var f="2584137191"},133:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var a=n(140),r=n.n(a),o=n(141),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var l=c.rhythm,u=c.scale},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(132),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(135),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},135:function(e,t,n){var a;e.exports=(a=n(136))&&a.default||a},136:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(46),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},137:function(e,t,n){"use strict";n(28);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),c=n(134),l=n(133),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=this.props,a=n.location,r=n.title,o=n.children;return e="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),t=i.a.createElement("p",null,"Brenna Flood @ ",i.a.createElement("a",{href:"http://brennx0r.com"},"brennx0rblog.")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,o,t)},t}(i.a.Component);t.a=u},138:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),c=(n(145),n(146),n(139)),l=n.n(c),u=n(133),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},i.a.createElement("img",{src:l.a,alt:"Brenna Flood",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,"Brenna Flood"),", technical leader and co-organizer of the ",i.a.createElement("a",{href:"http://www.osfeels.com/",target:"new"},"Open Source and Feelings")," conference."," ",i.a.createElement("a",{href:"https://twitter.com/brennx0r"},"Follow her on Twitter"),".",i.a.createElement("br",null),i.a.createElement("br",null),"If you enjoy any of the content on this site, please consider dropping a few coins in the proverbial hat via ",i.a.createElement("a",{href:"https://www.patreon.com/brennx0r",target:"new"},"her Patreon account"),". Thank you! 🌈 💜 🙇‍♀️"))},t}(i.a.Component);t.a=s},139:function(e,t,n){e.exports=n.p+"static/profile-pic-fb5c4c20e873d5da810dd945514e5e09.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-235c2fb0cfe89a683cf1.js.map