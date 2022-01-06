webpackJsonp([28],{"5kJk":function(s,t){},"99vZ":function(s,t,a){var n=a("dDLH");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a("FIqI")("7b38a710",n,!0,{})},dDLH:function(s,t,a){(s.exports=a("UTlt")(!1)).push([s.i,"",""])},jgqP:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"content markdown-doc"},[a("h2",{attrs:{id:"mutationobserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutationobserver"}},[s._v("#")]),s._v(" MutationObserver")]),s._v(" "),a("p",[s._v("Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。")]),s._v(" "),a("h3",{attrs:{id:"te-dian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#te-dian"}},[s._v("#")]),s._v(" 特点")]),s._v(" "),a("ul",[a("li",[s._v("它等待所有脚本任务完成后，才会运行（即异步触发方式）。")]),s._v(" "),a("li",[s._v("它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。")]),s._v(" "),a("li",[s._v("它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动。")])]),s._v(" "),a("h3",{attrs:{id:"shi-yong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("// 兼容处理")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" MutationObserver = "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".MutationObserver || "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".WebKitMutationObserver || "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".MozMutationObserver\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 定义需要监听的dom结构")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" target = "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".querySelector("),a("span",{staticClass:"hljs-string"},[s._v("'demo'")]),s._v(")\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 定义监听的选项")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" options = {\n  "),a("span",{staticClass:"hljs-attr"},[s._v("attributes")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-comment"},[s._v("// 监听属性的变动")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("characterData")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-comment"},[s._v("// 监听节点内容或节点文本的变动")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("childList")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-comment"},[s._v("// 监听子节点的变动")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("subtree")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-comment"},[s._v("// 将该观察器应用于该节点的所有后代节点")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("attributeOldValue")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-comment"},[s._v("// 观察attributes变动时，是否需要记录变动前的属性值。")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("characterDataOldValue")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-comment"},[s._v("// 观察characterData变动时，是否需要记录变动前的值。")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("attributeFilter")]),s._v(": ["),a("span",{staticClass:"hljs-string"},[s._v("'class'")]),s._v(","),a("span",{staticClass:"hljs-string"},[s._v("'src'")]),s._v("] "),a("span",{staticClass:"hljs-comment"},[s._v("// 需要观察的特定属性")]),s._v("\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 定义回调方法")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" callback = "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("mutations, observer")]),s._v(") =>")]),s._v(" {\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// mutations: 变动数组")]),s._v("\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// observer: 观察器实例")]),s._v("\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 实例化")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" observer = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" MutationObserver(callback)\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 监听")]),s._v("\nobserver.observe(target, options)\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 获取未处理的队列")]),s._v("\nobserver.takeRecords()\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 取消监听")]),s._v("\nobserver.disconnect()\n")])])])}]};var e={data:function(){return{}},mounted:function(){},components:{Markdown:a("C7Lr")(null,n,!1,function(s){a("99vZ")},"data-v-27e8bbc0",null).exports}},l={render:function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"markdown"},[t("Markdown")],1)},staticRenderFns:[]};var v=a("C7Lr")(e,l,!1,function(s){a("5kJk")},"data-v-921c3554",null);t.default=v.exports}});