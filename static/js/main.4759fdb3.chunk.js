(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(24)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(16),n(1)),u=n.n(s),i=n(2),l=n(5),p=n(6),m=n(8),h=n(7),f=n(9),d=(n(20),n(22),function(e){var t=e.data;if(t.isError)return r.a.createElement("div",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438!");var n=t.repo.map(function(e){var t=e.name,n=e.language,a=e.description,c=e.date,o=e.url;return r.a.createElement("div",{key:t,className:"Trande-git"},r.a.createElement("p",null,r.a.createElement("span",null,"\u0418\u043c\u044f \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f:")," ",t),r.a.createElement("p",null,r.a.createElement("span",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u044f\u0437\u044b\u043a:")," ",n),r.a.createElement("p",null,r.a.createElement("span",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:")," ",a),r.a.createElement("p",null,r.a.createElement("span",null,"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0430:")," ",c),r.a.createElement("p",null,r.a.createElement("span",null,"\u0421\u0441\u044b\u043b\u043a\u0430:")," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o},o)))});return r.a.createElement(r.a.Fragment,null,n)}),v="https://github-trending-api.now.sh/repositories",E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={repo:[],isError:!1},n.countResult=function(e,t){var a=e.map(function(e,n){return e.date=t[n],e});n.setState({repo:a})},n.fetchCommitDate=function(){var e=Object(i.a)(u.a.mark(function e(t){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map(function(){var e=Object(i.a)(u.a.mark(function e(t){var n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/".concat(t.author,"/").concat(t.name,"/commits?page=1&per_page=1"));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r="";try{r="".concat(a[0].commit.committer.date.substr(0,10)," ").concat(a[0].commit.committer.date.substr(11,5))}catch(c){r=a.message}return e.abrupt("return",r);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(a);case 3:r=e.sent,n.countResult(t,r);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.fetchRepos=Object(i.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n.fetchCommitDate(a);case 7:case"end":return e.stop()}},e,this)})),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){try{this.fetchRepos()}catch(e){console.error(e),this.setState({isError:!0})}}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,{data:e})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.4759fdb3.chunk.js.map