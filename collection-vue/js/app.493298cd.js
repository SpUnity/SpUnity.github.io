(function(t){function e(e){for(var n,i,o=e[0],u=e[1],c=e[2],f=0,d=[];f<o.length;f++)i=o[f],r[i]&&d.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var u=a[o];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0563":function(t,e,a){},1:function(t,e){},"14a4":function(t,e,a){},"18ea":function(t,e,a){},4962:function(t,e,a){"use strict";var n=a("18ea"),r=a.n(n);r.a},"560f":function(t,e,a){"use strict";var n=a("a157"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.showErrorPage?t._e():a("router-view"),t.showErrorPage?a("error-page"):t._e()],1)},s=[],i=(a("ac6a"),a("06db"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"error"},[a("h1",{staticClass:"error-text"},[t._v("Произошла ошибка. Простите нас:(")])])}],u={name:"error-page",data:function(){return{}}},c=u,l=(a("560f"),a("2877")),f=Object(l["a"])(c,i,o,!1,null,"fb13c788",null),d=f.exports,h={name:"app",components:{ErrorPage:d},data:function(){return{showErrorPage:!1,urlKeys:"https://spunity.github.io/collection/json/keys.json",urlData:"https://spunity.github.io/collection/json/data.json"}},methods:{getDataKeys:function(){var t=this;this.$http.get(this.urlKeys).then(function(e){t.$root.keys=e.body},function(){t.showErrorPage=!0})},getDataMovies:function(){var t=this;this.$http.get(this.urlData).then(function(e){t.$root.data=e.body},function(){t.showErrorPage=!0})}},created:function(){this.getDataKeys(),this.getDataMovies()}},p=h,m=(a("034f"),Object(l["a"])(p,r,s,!1,null,null,null)),v=m.exports,g=a("28dd"),b=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("search"),a("filter-movies"),a("result")],1)},_=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-movies",on:{click:t.sendDataToSearch}},[a("div",{staticClass:"header-filter"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.fillButtons("genre","country")}}},[t._v("Show filters")]),a("transition",{attrs:{name:"show-matches"}},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.isMatches,expression:"isMatches"}],staticClass:"btn show-all btn-danger",attrs:{type:"button"},on:{click:t.showResults}},[t._v("Show "+t._s(t.amountMatches)+" "+t._s(t.textForAmountMatches)+" ")])])],1),a("transition",{attrs:{name:"filter"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilters.status,expression:"showFilters.status"}],staticClass:"block-filters alert alert-secondary",on:{click:t.filterData}},t._l(t.arrFilters,function(e,n){return a("div",{key:n,staticClass:"one-filter"},[a("div",{staticClass:"block-all-on"},[a("button",{key:n,staticClass:"btn",class:{"btn-secondary":e.status,"btn-danger":!e.status},attrs:{type:"button"},on:{click:function(a){return t.allButtonsOn(e)}}},[t._v(t._s(e.name)+": "+t._s(e.addText)+" ")])]),a("div",{staticClass:"btn-group block-separate-buttons",on:{click:function(a){return t.checkAllButtonsOn(e)}}},t._l(e.buttons,function(e,n){return a("button",{key:n,staticClass:"btn",class:{"btn-secondary":!e.status,"btn-danger":e.status},attrs:{type:"button"},on:{click:function(t){e.status=!e.status}}},[t._v(" "+t._s(e.text)+" ")])}),0)])}),0)])],1)},k=[],x=a("5d73"),C=a.n(x),D={name:"filter-movies",data:function(){return{data:this.$root.data,keys:this.$root.keys,arrFilters:{year:{name:"Год",addText:"all on",status:!1,buttons:[{id:1,text:"До 2000 года",status:!1},{id:2,text:"Начиная с 2000 года",status:!1}]},genre:{name:"Жанр",addText:"all on",status:!1,buttons:[]},country:{name:"Страна",addText:"all on",status:!1,buttons:[]}},showFilters:{status:!1,count:0},filteredData:[],urlKeys:"https://spunity.github.io/collection/json/keys.json",urlData:"https://spunity.github.io/collection/json/data.json",amountMatches:0}},computed:{isMatches:function(){return!!this.showFilters.status&&this.filteredData.length>0},textForAmountMatches:function(){return this.amountMatches>1?"Matches":"Match"}},methods:{fillButtons:function(){if(this.showFilters.status=!this.showFilters.status,this.showFilters.count<1){this.showFilters.count++;for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];for(var n=0;n<e.length;n++){var r=this.arrFilters[e[n]]["buttons"];for(var s in this.keys[e[n]]){var i={};i.id=s,i.text=this.keys[e[n]][s],i.status=!1,r.push(i)}}}},allButtonsOn:function(t){t.status=!t.status,t.addText=t.status?"all off":"all on";var e=!0,a=!1,n=void 0;try{for(var r,s=C()(t.buttons);!(e=(r=s.next()).done);e=!0){var i=r.value;i.status=t.status}}catch(o){a=!0,n=o}finally{try{e||null==s.return||s.return()}finally{if(a)throw n}}},checkAllButtonsOn:function(t){var e=t.buttons.filter(function(t){return!t.status});e.length&&e.length!==t.buttons.length||(t.status=!t.status,t.addText=t.status?"all off":"all on")},filterData:function(){var t=this;this.filteredData=this.data.filter(function(e){var a=!1,n=!1,r=!1,s=t.arrFilters.year.buttons,i=t.arrFilters.genre.buttons,o=t.arrFilters.country.buttons;return a=e.year<2e3&&s[0].status||e.year>=2e3&&s[1].status,e.genreId.forEach(function(t){i[t-1].status&&(n=!0)}),e.countryId.forEach(function(t){o[t-1].status&&(r=!0)}),a&&n&&r}),this.amountMatches=this.filteredData.length,this.filteredData.length||this.showResults()},showResults:function(){this.$root.buffer.$emit("filter_result",this.filteredData)},sendDataToSearch:function(){var t=this.filteredData;this.showFilters.status||(t=this.data),this.$root.buffer.$emit("filter_search",t)}},created:function(){}},I=D,$=(a("8fbf"),Object(l["a"])(I,w,k,!1,null,"d359f452",null)),M=$.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("form",{staticClass:"form-search",on:{submit:function(e){return e.preventDefault(),t.searchMovie(e)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label label",attrs:{for:"search_input"}},[t._v("Найдено "),a("strong",[t._v(t._s(t.amountMovies))]),t._v(" фильмов")]),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userText,expression:"userText"}],staticClass:"form-control",attrs:{id:"search_input",type:"search","aria-describedby":"emailHelp",placeholder:"Введите название фильма или имя режиссера"},domProps:{value:t.userText},on:{input:function(e){e.target.composing||(t.userText=e.target.value)}}})]),t._m(0)])])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-2"},[a("button",{staticClass:"btn btn-primary ",attrs:{type:"submit"}},[t._v("Найти")])])}],O=(a("7f7f"),{name:"search",data:function(){return{userText:"",data:this.$root.data,movies:[]}},methods:{searchMovie:function(){var t=this;if(""===this.userText)return this.movies=[],void this.$root.buffer.$emit("search_result",this.movies);this.movies=this.data.filter(function(e){var a=t.userText.toLowerCase(),n=e.name.toLowerCase(),r=e.director.toLowerCase();return n.indexOf(a)>-1||r.indexOf(a)>-1}),this.$root.buffer.$emit("search_result",this.movies)},setData:function(t){this.data=t}},computed:{amountMovies:function(){return this.movies.length}},created:function(){this.$root.buffer.$on("filter_search",this.setData)}}),T=O,E=(a("b4ef"),Object(l["a"])(T,j,F,!1,null,"03782614",null)),P=E.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result"},[a("ul",{staticClass:"list-unstyled list"},t._l(t.arrMovies,function(e,n){return a("li",{key:n,staticClass:"alert alert-dark list-item"},[a("span",{staticClass:"name"},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")]),a("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[a("router-link",{staticClass:"link",attrs:{to:{name:"movie",params:{id:e.id}}}},[t._v("Подробнее")])],1)])}),0)])},B=[],A={name:"result",data:function(){return{arrMovies:[]}},created:function(){this.$root.buffer.$on("filter_result",this.appendDataFromFilter),this.$root.buffer.$on("search_result",this.appendDataFromSearch)},methods:{appendDataFromFilter:function(t){this.arrMovies=t},appendDataFromSearch:function(t){this.arrMovies=t}}},K=A,R=(a("cfca"),Object(l["a"])(K,S,B,!1,null,"50beaa38",null)),L=R.exports,N={name:"home",components:{Search:P,FilterMovies:M,Result:L},data:function(){return{}}},J=N,H=(a("4962"),Object(l["a"])(J,y,_,!1,null,"73acc19a",null)),q=H.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movie-page"},[a("img",{staticClass:"banner",attrs:{src:t.dataMovie.linkImage,alt:"Banner"}}),a("div",{staticClass:"container-content"},t._l(t.arrTitlesForPage,function(e,n){return a("div",{key:n,staticClass:"string-content"},[a("p",{staticClass:"content title"},[t._v(" "+t._s(e)+" ")]),a("p",{staticClass:"content value"},[t._v(" "+t._s(t.arrDataForPage[n])+" ")])])}),0)])},G=[],Q={name:"movie-page",data:function(){return{data:this.$root.data,keys:this.$root.keys,dataMovie:{},arrDataForPage:[],arrTitlesForPage:["Название","Год","Жанр","Режиссер","Страна","Продолжительность"]}},methods:{transformData:function(){var t=this,e=this.dataMovie;for(var a in e)if("name"===a||"year"===a||"director"===a||"duration"===a)t.arrDataForPage.push(e[a]);else if("genreId"===a||"countryId"===a){var n=t.readId(a);t.arrDataForPage.push(n)}},readId:function(t){var e=this.dataMovie[t],a=this.keys,n=t.indexOf("genre")>-1,r="";return n?(e.forEach(function(t){r+=a["genre"][t]+", "}),r.slice(0,r.length-2)):(e.forEach(function(t){r+=a["country"][t]+", "}),r.slice(0,r.length-2))},setDataMovie:function(t){this.dataMovie=this.data[t]},getData:function(t,e){this.data=t,this.keys=e}},created:function(){var t=+this.$route.params.id,e=t-1;this.setDataMovie(e),this.transformData()}},U=Q,V=(a("84e0"),Object(l["a"])(U,z,G,!1,null,"1984add4",null)),W=V.exports,X=new b["a"]({routes:[{path:"",component:q},{path:"/:id",name:"movie",component:W}]}),Y={genre:{1:"боевик",2:"детектив",3:"драма",4:"мюзикл",5:"триллер",6:"ужасы",7:"фантастика",8:"фильм-нуар"},country:{1:"Дания",2:"Нидерланды",3:"США",4:"Швеция"}},Z=Y,tt=[{id:1,name:"Психо",year:1960,genreId:[5,6],director:"Альфред Хичкок",countryId:[3],duration:"109мин./01:49",linkImage:"https://spunity.github.io/collection/images/psycho.jpg"},{id:2,name:"В случае убийства набирайте «М»",year:1954,genreId:[8,6],director:"Альфред Хичкок",countryId:[3],duration:"105мин./01:45",linkImage:"https://spunity.github.io/collection/images/casekilling.jpg"},{id:3,name:"Окно во двор",year:1954,genreId:[5,2],director:"Альфред Хичкок",countryId:[3],duration:"112мин./01:52",linkImage:"https://spunity.github.io/collection/images/window.jpg"},{id:4,name:"Танцующая в темноте",year:2e3,genreId:[4,3],director:"Ларс фон Триер",countryId:[3,1,4],duration:"135мин./02:15",linkImage:"https://spunity.github.io/collection/images/dancer.jpg"},{id:5,name:"Догвилль",year:2003,genreId:[5,3],director:"Ларс фон Триер",countryId:[1,2,4],duration:"178мин./02:58",linkImage:"https://spunity.github.io/collection/images/dogville.jpg"},{id:6,name:"Скала",year:1996,genreId:[5,1],director:"Майкл Бэй",countryId:[3],duration:"136мин./02:16",linkImage:"https://spunity.github.io/collection/images/rock.jpg"},{id:7,name:"Перл-Харбор",year:2001,genreId:[1,3],director:"Майкл Бэй",countryId:[3],duration:"183мин./03:03",linkImage:"https://spunity.github.io/collection/images/pearlharbor.jpg"},{id:8,name:"Армагеддон",year:1998,genreId:[7,1],director:"Майкл Бэй",countryId:[3],duration:"144мин./02:24",linkImage:"https://spunity.github.io/collection/images/armageddon.jpg"},{id:9,name:"Трансформеры",year:2007,genreId:[7,1],director:"Майкл Бэй",countryId:[3],duration:"143мин./02:23",linkImage:"https://spunity.github.io/collection/images/transformer.jpg"}],et=tt;n["a"].use(g["a"]),n["a"].use(b["a"]),n["a"].config.productionTip=!1,new n["a"]({data:{data:et,keys:Z,buffer:new n["a"]({})},render:function(t){return t(v)},router:X}).$mount("#app")},"64a9":function(t,e,a){},"84e0":function(t,e,a){"use strict";var n=a("d1a2"),r=a.n(n);r.a},"8fbf":function(t,e,a){"use strict";var n=a("14a4"),r=a.n(n);r.a},a157:function(t,e,a){},b290:function(t,e,a){},b4ef:function(t,e,a){"use strict";var n=a("0563"),r=a.n(n);r.a},cfca:function(t,e,a){"use strict";var n=a("b290"),r=a.n(n);r.a},d1a2:function(t,e,a){}});
//# sourceMappingURL=app.493298cd.js.map