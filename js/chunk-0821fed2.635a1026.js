(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0821fed2"],{"3f2b":function(e,n,c){"use strict";c.r(n);c("b0c0");var t=c("7a23"),o=Object(t["C"])("data-v-eb2860aa");Object(t["s"])("data-v-eb2860aa");var a={id:"concerts"},r={id:"content"},s=Object(t["g"])("div",{class:"reveal"},null,-1),i={class:"text-block"},p=Object(t["g"])("h1",null,"Concerts",-1),m=Object(t["g"])("p",null,"The Hart House Chamber Strings hosts two concerts each year: one in December and one in March. All Chamber Strings concerts are open to the public and admission is free. We hope to see you there!",-1),l=Object(t["g"])("hr",null,null,-1),b=Object(t["g"])("h2",null,"Upcoming Concerts",-1),O={class:"concert-year"},j={class:"concert-note"},d={class:"concert-title"},u={class:"concert-note"},y={class:"concert-pieces"},g={key:0},h={key:1},f=Object(t["g"])("hr",null,null,-1),v=Object(t["g"])("h2",null,"Past Concerts",-1),C={class:"concert-year"},S={key:0},k={class:"concert-title"},x={key:0,class:"concert-note"},w={class:"concert-pieces"},T={key:0},M={key:1};Object(t["q"])();var H=o((function(e,n,c,o,H,A){var N=Object(t["w"])("BackgroundImage"),D=Object(t["w"])("NavBar"),B=Object(t["w"])("ContactInfo");return Object(t["p"])(),Object(t["d"])("div",a,[Object(t["g"])(N,{page:"concerts"}),Object(t["g"])(D),Object(t["g"])("div",r,[s,Object(t["g"])("div",i,[p,m,l,b,Object(t["g"])("h3",O,Object(t["y"])(A.nextConcerts.label),1),Object(t["g"])("p",j,Object(t["y"])(A.nextConcerts.note),1),(Object(t["p"])(!0),Object(t["d"])(t["a"],null,Object(t["v"])(A.nextConcerts.concerts,(function(e,n){return Object(t["p"])(),Object(t["d"])(t["a"],{key:n},[Object(t["g"])("p",d,[Object(t["g"])("b",null,[Object(t["g"])("u",null,Object(t["y"])(e.title),1)]),Object(t["f"])(" - "+Object(t["y"])(e.date),1)]),Object(t["g"])("p",u,Object(t["y"])(e.note),1),Object(t["g"])("ul",y,[(Object(t["p"])(!0),Object(t["d"])(t["a"],null,Object(t["v"])(e.pieces,(function(e,n){return Object(t["p"])(),Object(t["d"])("li",{key:n},[Object(t["f"])(Object(t["y"])(e.name),1),e.composer?(Object(t["p"])(),Object(t["d"])("span",g," by "+Object(t["y"])(e.composer),1)):Object(t["e"])("",!0),e.arranger?(Object(t["p"])(),Object(t["d"])("span",h," arranged by "+Object(t["y"])(e.arranger),1)):Object(t["e"])("",!0)])})),128))])],64)})),128)),f,v,(Object(t["p"])(!0),Object(t["d"])(t["a"],null,Object(t["v"])(A.pastConcerts,(function(e,n){return Object(t["p"])(),Object(t["d"])("div",{class:"past-concert",key:n},[Object(t["g"])("h3",C,Object(t["y"])(e.label),1),e.note?(Object(t["p"])(),Object(t["d"])("p",S,Object(t["y"])(e.note),1)):Object(t["e"])("",!0),(Object(t["p"])(!0),Object(t["d"])(t["a"],null,Object(t["v"])(e.concerts,(function(e,n){return Object(t["p"])(),Object(t["d"])(t["a"],{key:n},[Object(t["g"])("p",k,[Object(t["g"])("b",null,[Object(t["g"])("u",null,Object(t["y"])(e.name[0]),1)]),Object(t["f"])(" - "+Object(t["y"])(e.date[0]),1)]),e.note?(Object(t["p"])(),Object(t["d"])("p",x,Object(t["y"])(e.note[0]),1)):Object(t["e"])("",!0),Object(t["g"])("ul",w,[(Object(t["p"])(!0),Object(t["d"])(t["a"],null,Object(t["v"])(e.piece,(function(e,n){return Object(t["p"])(),Object(t["d"])("li",{key:n},[Object(t["f"])(Object(t["y"])(e.name[0]),1),e.composer?(Object(t["p"])(),Object(t["d"])("span",T," by "+Object(t["y"])(e.composer[0]),1)):Object(t["e"])("",!0),e.arranger?(Object(t["p"])(),Object(t["d"])("span",M," arranged by "+Object(t["y"])(e.arranger[0]),1)):Object(t["e"])("",!0)])})),128))])],64)})),128))])})),128)),Object(t["g"])(B)])])])})),A=c("b85c"),N=c("d555"),D=c("d000"),B=c("4af9"),G=c("2dbb"),I={name:"Concerts",components:{BackgroundImage:N["a"],NavBar:D["a"],ContactInfo:B["a"]},data:function(){return{xmlDoc:c("a77e").default,xml:{}}},created:function(){var e=this;Object(G["parseString"])(this.xmlDoc,(function(n,c){n?console.log("Failed to parse xml"):e.xml=c}))},computed:{nextConcerts:function(){var e=this.xml.concerts.next[0].year[0];return{label:e.label[0],note:e.note?e.note[0]:void 0,concerts:e.concert}},pastConcerts:function(){var e,n=this.xml.concerts.previous[0].year,c=[],t=Object(A["a"])(n);try{for(t.s();!(e=t.n()).done;){var o=e.value;c.push({label:o.label[0],note:o.note?o.note[0]:void 0,concerts:o.concert})}}catch(a){t.e(a)}finally{t.f()}return c}}};c("e595");I.render=H,I.__scopeId="data-v-eb2860aa";n["default"]=I},"71d4":function(e,n,c){},a77e:function(e,n,c){"use strict";c.r(n),n["default"]="<concerts>\n    <next>\n        <year>\n            <label>2020 - 2021</label>\n            <note>All concerts will be held at 7pm in the Great Hall at Hart House.</note>\n            \x3c!-- <concert>\n                <name></name>\n                <date></date>\n                <note></note>\n                <piece>\n                    <name></name>\n                    <composer></composer>\n                    <arranger></arranger>\n                </piece>\n            </concert> --\x3e\n        </year>\n    </next>\n    <previous>\n        <year>\n            <label>2019 - 2020</label>\n            <concert>\n                <name>Winter Concert</name>\n                <date>Saturday, November 30, 2019</date>\n                <piece>\n                    <name>String Symphony No. 3 in E</name>\n                    <composer>Mendelssohn</composer>\n                </piece>\n                <piece>\n                    <name>Alleluia (from Exultate, jubilate, KV 165)</name>\n                    <composer>Mozart</composer>\n                </piece>\n                <piece>\n                    <name>March Of The Toys (from Babes In Toyland)</name>\n                    <composer>Victor Herbert</composer>\n                </piece>\n                <piece>\n                    <name>Concerto for Strings in G+, RV 151</name>\n                    <composer>Vivaldi</composer>\n                </piece>\n                <piece>\n                    <name>Riu, Riu, Chiu (Traditional)</name>\n                    <arranger>David Marlatt</arranger>\n                </piece>\n                <piece>\n                    <name>Two Nordic Melodies (In Folk Style and Cow-call &amp; Peasant Dance)</name>\n                    <composer>Grieg</composer>\n                </piece>\n                <piece>\n                    <name>Nessun Dorma</name>\n                    <composer>Giacomo Puccini</composer>\n                </piece>\n                <piece>\n                    <name>The Wizard Of Oz</name>\n                    <composer>Harold Arlen</composer>\n                </piece>\n                <piece>\n                    <name>Sleigh Ride</name>\n                    <composer>Leroy Anderson</composer>\n                </piece>\n            </concert>\n            <concert>\n                <name>Spring Concert</name>\n                <date>Saturday, April 4, 2020</date>\n                <note>Our Spring Concert was cancelled due to university closure.</note>\n            </concert>\n        </year>\n        <year>\n            <label>2018 - 2019</label>\n            <concert>\n                <name>Winter Concert</name>\n                <date>Saturday, December 1, 2018</date>\n                <piece>\n                    <name>Suite in F for Strings (Lady Radnor's Suite)</name>\n                    <composer>Parry</composer>\n                </piece>\n                <piece>\n                    <name>Elegy for String Orchestra</name>\n                    <composer>Tchaikovsky</composer>\n                </piece>\n                <piece>\n                    <name>Bass Dance</name>\n                    <composer>Susato</composer>\n                </piece>\n                <piece>\n                    <name>October</name>\n                    <composer>Whitacre</composer>\n                </piece>\n                <piece>\n                    <name>Star Wars Heroes (arrangement) original score</name>\n                    <composer>Williams</composer>\n                </piece>\n                <piece>\n                    <name>Concerto Grosso in G Minor Op. 6, No. 8</name>\n                    <composer>Corelli</composer>\n                </piece>\n                <piece>\n                    <name>A Festival of Lights</name>\n                    <composer>Caputo</composer>\n                </piece>\n                <piece>\n                    <name>A Christmas Festival</name>\n                    <composer>Anderson</composer>\n                </piece>\n            </concert>\n            <concert>\n                <name>Spring Concert</name>\n                <date>Saturday, March 30, 2019</date>\n                <piece>\n                    <name>Symphony No. 1 in Bb Major</name>\n                    <composer>Boyce</composer>\n                </piece>\n                <piece>\n                    <name>Molly On The Shore (Irish Reel)</name>\n                    <composer>Grainger</composer>\n                </piece>\n                <piece>\n                    <name>LEHÁR</name>\n                </piece>\n                <piece>\n                    <name>Themes from “The Merry Widow”</name>\n                    <composer>Lehár</composer>\n                </piece>\n                <piece>\n                    <name>Directions North</name>\n                    <composer>Coakley</composer>\n                </piece>\n                <piece>\n                    <name>A Little Stream (Xiao He Tang Shui) (Traditional)</name>\n                </piece>\n                <piece>\n                    <name>Fantasía Española</name>\n                    <composer>Newbold</composer>\n                </piece>\n                <piece>\n                    <name>Czárdás</name>\n                    <composer>Monti</composer>\n                </piece>\n                <piece>\n                    <name>Holberg Suite, Op. 40</name>\n                    <composer>Grieg</composer>\n                </piece>\n            </concert>\n        </year>\n        \x3c!-- <year>\n            <label></label>\n            <note></note>\n            <concert>\n                <name></name>\n                <date></date>\n                <note></note>\n                <piece>\n                    <name></name>\n                    <composer></composer>\n                    <arranger></arranger>\n                </piece>\n                <piece>\n                    <name></name>\n                    <composer></composer>\n                    <arranger></arranger>\n                </piece>\n            </concert>\n        </year> --\x3e\n    </previous>\n</concerts>"},e595:function(e,n,c){"use strict";c("71d4")}}]);
//# sourceMappingURL=chunk-0821fed2.635a1026.js.map