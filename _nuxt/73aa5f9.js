(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(t,e,n){"use strict";var r=n(4),o=n(24),l=n(28),c=n(111),h=n(63),d=n(12),m=n(48).f,f=n(64).f,v=n(11).f,y=n(160).trim,w=r.Number,_=w,I=w.prototype,k="Number"==l(n(78)(I)),x="trim"in String.prototype,S=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=x?e.trim():y(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(k?d((function(){I.valueOf.call(n)})):"Number"!=l(n))?c(new _(S(e)),n,w):S(e)};for(var A,j=n(8)?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;j.length>C;C++)o(_,A=j[C])&&!o(w,A)&&v(w,A,f(_,A));w.prototype=I,I.constructor=w,n(13)(r,"Number",w)}},160:function(t,e,n){var r=n(6),o=n(27),l=n(12),c=n(161),h="["+c+"]",d=RegExp("^"+h+h+"*"),m=RegExp(h+h+"*$"),f=function(t,e,n){var o={},h=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=o[t]=h?e(v):c[t];n&&(o[n]=d),r(r.P+r.F*h,"String",o)},v=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},161:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},162:function(t,e,n){"use strict";n(23),n(10),n(163);var r={en:{"2020-04-01-introduction":{date:"2020-04-01",tags:["en","opinions"],img:"/images/articles/2020-04-01-introduction/is200.jpg",title:"Who are you and what am I doing here",summary:'This article has for goal to introduce who "Mr. Bidouille" is, and why you might want to bookmark this blog...',link:"/en/2020-04-01-introduction",hyvorId:2},"2020-05-01-is200-service-manual":{date:"2020-05-01",tags:["en","is200","service"],img:"/images/articles/2020-05-01-is200-service-manual/manual.jpg",title:"The Lexus IS200’s service manual",summary:"The service manual is an essential tool to service your car. But the problem is that it can be hard to find. But I finally got my hands on it....",link:"/en/2020-05-01-is200-service-manual",hyvorId:3},"2020-05-06-is200-timing-belt":{date:"2020-05-06",tags:["en","is200","service","timing belt"],img:"/images/articles/2020-05-06-is200-timing-belt/timing.jpg",title:"Changing the timing belt on the IS200",summary:"Complete guide on how to change the timing belt and the auxiliaries on the Lexus IS200 in your driveway on a budget...",link:"/en/2020-05-06-is200-timing-belt",hyvorId:4}},fr:{"2020-04-01-introduction":{date:"2020-04-01",tags:["fr","opinions"],img:"/images/articles/2020-04-01-introduction/is200.jpg",title:"Qui êtes-vous et qu'est-ce que je fais ici",summary:'Cet article a pour but de présenter qui est "Mr. Bidouille", et pourquoi vous voudriez garder un oeil sur ce blog...',link:"/fr/2020-04-01-introduction",hyvorId:2},"2020-05-01-is200-manuel-de-service":{date:"2020-05-01",tags:["fr","is200","service"],img:"/images/articles/2020-05-01-is200-service-manual/manual.jpg",title:"Manuel de service de la Lexus IS200",summary:"Le manuel de service est indispensable pour entretenir la voiture. Seulement voilà, il est compliqué à trouver. J’ai cependant finalement réussi à mettre la main dessus...",link:"/fr/2020-05-01-is200-manuel-de-service",hyvorId:3},"2020-05-06-is200-courroie-de-distribution":{date:"2020-05-06",tags:["fr","is200","service","distribution"],img:"/images/articles/2020-05-06-is200-timing-belt/timing.jpg",title:"Service de la courroie de distribution sur l'IS200",summary:"Guide complet pour changer la courroie de distribution et les auxiliaires sur la Lexus IS200 sur son parking à moindre coûts...",link:"/fr/2020-05-06-is200-courroie-de-distribution",hyvorId:4}},list:{en:[],fr:[]}};r.list.en=Object.values(r.en),r.list.fr=Object.values(r.fr),e.a=r},163:function(t,e,n){var r=n(6),o=n(112)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},164:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return h}));n(23),n(34),n(25),n(36),n(35),n(16),n(29),n(30),n(10),n(49),n(50),n(62);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,h=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){h=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(h)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function l(t,e){if(""===e)return t;var s=e.toLowerCase(),n=s.split(" "),o=[],l=[];return t.forEach((function(article){var t=[article.title.toLowerCase(),article.summary.toLowerCase(),article.date,article.tags.join(" ")].join(" ");if(t.includes(s))return o.push(article);var e,c=r(n);try{for(c.s();!(e=c.n()).done;){var h=e.value;if(!t.includes(h))return!1}}catch(t){c.e(t)}finally{c.f()}return l.push(article)})),o.concat(l)}function c(t){return t.sort((function(a,b){return b.date.localeCompare(a.date)}))}function h(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return t.splice.apply(t,[e,0].concat(r)),t}},165:function(t,e,n){"use strict";n(166)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},166:function(t,e,n){var r=n(6),o=n(12),l=n(27),c=/"/g,h=function(t,e,n,r){var o=String(l(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),h+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(h),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},167:function(t,e,n){"use strict";n(165),n(159);var r=n(65);var o=n(80);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(79),h={head:function(){return{title:"".concat(this.title," - Mr. Bidouille"),htmlAttrs:{lang:"en"},meta:[{hid:"description",name:"description",content:this.summary},{hid:"keywords",name:"keywords",content:[].concat(l(this.tags),["tech","cars","bidouille"]).join(",")}]}},props:{date:String,tags:{type:Array,default:function(){return[]}},img:String,title:String,summary:String,link:String,hyvorId:Number},beforeMount:function(){window.HYVOR_TALK_CONFIG={url:"https://mrbidouille.ch"+this.link,id:this.hyvorId}},mounted:function(){var script=document.createElement("script");script.src="https://talk.hyvor.com/web-api/embed",this.$refs.main.appendChild(script)},computed:{random:function(){return c.a.MATOMO_SEED}}},d=n(7),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{ref:"main",staticClass:"flex-grow text-gray-100"},[n("article",[n("section",[n("div",{staticClass:"bg-cover bg-center bg-no-repeat w-full h-50 md:h-76 lg:h-100",style:"background-image: url("+t.img+");"}),t._v(" "),n("h2",{staticClass:"text-center text-2xl lg:text-3xl font-bold mt-4 lg:mt-8 px-8",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("ul",{staticClass:"flashy-pills-list flex flex-wrap items-center justify-center"},t._l(t.tags,(function(e,i){return n("li",{key:i,staticClass:"flashy-pill uppercase text-sm font-bold border-solid border-gray-800 border-2 rounded-full px-4 py-1 m-1",domProps:{textContent:t._s(e)}})})),0),t._v(" "),n("p",{staticClass:"text-center text-gray-400 my-2 px-8"},[t._v("\n        Mr. Bidouille - "+t._s(t.date)+"\n      ")])]),t._v(" "),n("section",{staticClass:"marked px-6 md:px-16 lg:px-32 xl:px-0 xl:mx-auto xl:w-300"},[t._t("default"),t._v(" "),t._m(0)],2)]),t._v(" "),t._m(1),t._v(" "),n("img",{staticStyle:{width:"1px",height:"1px",border:"0"},attrs:{src:"https://analytics.naito.one/matomo.php?idsite=2&rec=1&action_name="+t.title+"&url=https://mrbidouille.ch"+t.link+"&rand="+t.random,alt:""}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"hyvor-talk-view"}},[e("div",{staticClass:"w-full italic text-center my-8"},[this._v("\n          Reading and writing comments requires JavaScript\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"back-to-top transition-opacity-200 opacity-1 pointer-events-auto fixed bottom-0 right-0 mb-12 mr-4 md:mr-8 p-6 rounded-full shadow-lg bg-gray-900 border-solid border-2 border-gray-800 flex items-center",attrs:{href:"#top"}},[e("i",{staticClass:"material-icons text-xl"},[this._v("arrow_upward")])])}],!1,null,null,null);e.a=component.exports},168:function(t,e,n){"use strict";n(51),n(62);var r=n(164),o={props:{src:String,alt:String,description:String},data:function(){return{finalSrc:Object(r.b)(this.src.replace(/\.(\w){3,4}$/g,".png").split("/").reverse(),1,"placeholder").reverse().join("/")}},mounted:function(){var t=this;setTimeout((function(){t.finalSrc=t.src}),0)}},l=n(7),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"w-full",attrs:{title:this.alt}},[e("a",{staticClass:"w-full h-full",attrs:{href:this.src}},[e("img",{staticClass:"w-full",attrs:{src:this.finalSrc,alt:this.alt}})]),this._v(" "),e("span",{domProps:{textContent:this._s(this.description)}})])}),[],!1,null,null,null);e.a=component.exports},172:function(t,e,n){"use strict";n.r(e);var r=n(167),o=n(168),l=n(162),c={components:{ArticleShell:r.a,ClickableImage:o.a},data:function(){return{article:l.a.en["2020-04-01-introduction"]}}},h=n(7),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article-shell",{attrs:{date:t.article.date,tags:t.article.tags,img:t.article.img,title:t.article.title,summary:t.article.summary,link:t.article.link,hyvorId:t.article.hyvorId}},[n("p",[t._v("\n    Or is it the other way around? I don't know anymore. But the development\n    of this blog is finally over and I can start writing stuff! And to start\n    things up, let me tell you a few things about myself, to try and make the\n    rest of the blog more relatable.\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v('\n    English is an easy language. Sort of. At least, it is easier than French,\n    because you don\'t have to wonder how to address someone when writing. You\n    can just say "you". In French, there is a casual and a non casual way to\n    say "you", and you always have to choose which one you want to use.\n  ')]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    Because yes, if you hadn't noticed by now, this blog is actually\n    bilingual. What it means is the interface is in English, because to me, it\n    is an international language, and the articles are written in the two\n    languages that I know, which are French and English.\n  ")]),t._v(" "),n("p",[t._v("\n    And when I say \"know\", don't get me wrong! I don't actually pretend to\n    know either of those languages! I'll probably make plenty of mistakes,\n    some funnier than others.\n  ")]),t._v(" "),n("p",[t._v("\n    Because yeah, I'm Swiss. That means my primary language is not English,\n    but I learned it in school (naah, mostly on the internet). So I might not\n    actually use the language like it was meant to be, and I might be\n    influenced by American English, Australian English, Japanese Enlgish\n    (wtf?)...\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    Well then to the point. I'm a 20 years old Swiss cheese that likes tech.\n    More recently, since I got my driving license 2 years ago (yeah man, got\n    it at 18, you know how it is). I know I just ended a sentence that wasn't\n    finished, but I need to make a little digression.\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    I speak (and will always speak) in a very chill manner, almost second\n    degree, with old and stupid references and will often parody specific ways\n    of talking. That's just how it is. You'll have to get used to it. I hope\n    you'll come to like reading me (I don't think you will).\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    Well, now that I got my way of speaking out of the way, we can get on our\n    way. (I tried to translate the stupid stuff\n    "),n("nuxt-link",{attrs:{to:"/fr/2020-04-01-introduction"}},[t._v("I said in French")]),t._v(",\n    but I'm afraid I can't come up with the same level of language shitery in\n    English). I've been getting into cars in the last 2 years. Half of it was\n    due to the Japanese anime Initial D and the other half, the simple fact\n    that I had a driving license and a car at my disposal.\n  ")],1),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    That car in question was an Audi A3 from 1997. I don't really know much of\n    it's features other than it was really slammed, because at the time, I\n    didn't know anything about cars (since then I looked it up, and I would\n    say it was a nice first car to have).\n  ")]),t._v(" "),n("clickable-image",{attrs:{src:"/images/articles/2020-04-01-introduction/audi.jpg",alt:"Picture of the Audi A3",description:"One of the rare pictures of the Audi A3. RIP (yeah she got scrapped)"}}),t._v(" "),n("p",[t._v("\n    I first got interested in performance driving. Then, (ironically just like\n    Takumi in Initial D) I realized that knowing what was happening under the\n    hood would be of great help to keep going forward in this domain.\n  ")]),t._v(" "),n("p",[t._v("\n    I quickly realized the Audi was a front wheel drive (duuh), and I\n    obviously wanted a rear wheel drive. Drifts looked quite cool, you know\n    what I'm saying. After ripping the Audi (a little), which was actually my\n    parents car (haha), I decided to by my very own car.\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    It took a few months, and I finally settled on a Lexus IS200 from 2000.\n  ")]),t._v(" "),n("p",[t._v("\n    This car is incredible. You can find so many of them second hand in\n    Switzerland in very good shape from 1'000 to 5'000 swiss francs, and she\n    checks all my criteria:\n  ")]),t._v(" "),n("ul",[n("li",[t._v("Rear wheel drive")]),t._v(" "),n("li",[t._v("Japanese")]),t._v(" "),n("li",[t._v("90' car (designed in 1998)")]),t._v(" "),n("li",[t._v("At least a 4 seater (she's a 5)")])]),t._v(" "),n("p",[t._v("\n    She's a fabulous car, and you will get to know her along side me on this\n    blog. I'm trying to know everything about her, but there's still much to\n    learn.\n  ")]),t._v(" "),n("clickable-image",{attrs:{src:"/images/articles/2020-04-01-introduction/is200.jpg",alt:"Picture of the Lexus IS200",description:"The Lexus close to its natural habitat: the Swiss Touge"}}),t._v(" "),n("p",[t._v("\n    I've had it for a few months now, and lots happened already. Now she just\n    really needs a good old complete maintenance. And I decided to do\n    everything on her myself, even though my knowledge is quite limited at the\n    moment. It will force me to learn. So I hope you'll forgive me when I'll\n    do weird shit, and when I'll use the wrong terminologies for things.\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    So yeah, there you have it. This blog will showcase my adventures\n    servicing my car, replacing pieces (of course I have a few mods planned.\n    I'll talk about it in a future article), how I get my hands on parts here\n    in Switzerland, etc.\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    But I'll also talk about a few projects related to car simulators, and\n    other mods and addons for cars that I want to create.\n  ")]),t._v(" "),n("p",[t._v("\n    I'll also be selling stuff. But wait! Not some stupid merch (for now),\n    I'll develop kits and other useful things for my car and maybe other cars\n    in the future. You'll hear more in the coming months. I'm currently in the\n    process of testing my first kit, which I hope will be useful to many\n    people. As a teaser, I'm working on the problem of the slow electric\n    throttle body of the IS200. I won't say more for now!\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    This is also my very first time blogging. I hope you will find it\n    interesting.\n  ")]),t._v(" "),n("p",[t._v("\n    Don't hesitate to use the comments below to give me feedback. You can\n    event comment without an account!\n  ")]),t._v(" "),n("p",[t._v("\n    Otherwise, you can find my email address at the bottom of the page, if you\n    want a private conversation.\n  ")]),t._v(" "),n("p",[t._v("\n    I'll also create a\n    "),n("a",{attrs:{href:"https://www.youtube.com/channel/UC2qxzQXsi8Yyl04uKxnKE6g"}},[t._v("Youtube channel")]),t._v("\n    very soon (update: it's done), but I won't be making full on videos. The\n    channel will contain short clips used in my articles.\n  ")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("On that note, I'll end this first article. I'll see you soon!")]),t._v(" "),n("p",[n("br")]),t._v(" "),n("p",[t._v("\n    Bidouille\n    "),n("span",{staticClass:"text-sm text-gray-300"},[t._v("(It's my username. If you have no idea what it means, check out\n      "),n("nuxt-link",{attrs:{to:"/about"}},[t._v('the "About" page')]),t._v(")")],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);