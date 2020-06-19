(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{397:function(e,t,o){"use strict";o.r(t);var r=o(9),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("The way you reference a UI element of your target web application for Puppeteer to interact with is through CSS selectors.")]),e._v(" "),o("p",[e._v("You can pick selectors using")]),e._v(" "),o("ul",[o("li",[e._v("your browser's inspector tool (as found e.g. in the "),o("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/dom",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome Dev Tools"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("an automated recording tool (e.g. the open-source "),o("a",{attrs:{href:"https://github.com/checkly/puppeteer-recorder",target:"_blank",rel:"noopener noreferrer"}},[e._v("Puppeteer Recorder"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("memory, if you are very familiar with the application's source code.")])]),e._v(" "),o("p",[e._v("Ultimately, the strategy you adopt in choosing CSS selectors will influence how much maintenance work will go into your Puppeteer scripts over the course of their lifetime. Ideally, you want to have robust selectors in place since the inception of the script to save yourself time and effort going forward.")]),e._v(" "),o("p",[e._v("The attributes of a good selector are:")]),e._v(" "),o("ul",[o("li",[e._v("uniqueness: the goal is to choose something that will identify the target element, and nothing else; IDs are the natural choice, when available")]),e._v(" "),o("li",[e._v("stability: choosing an attribute that is not likely to change over time as the page gets updated lowers the chances that you will need to manually update it;")]),e._v(" "),o("li",[e._v("conciseness: a short selector is easier to read, understand and possibly replace if it finally breaks.")])]),e._v(" "),o("h3",{attrs:{id:"examples-of-bad-selectors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-bad-selectors"}},[e._v("#")]),e._v(" Examples of bad selectors")]),e._v(" "),o("p",[e._v("Avoid this kind of selector "),o("em",[e._v("whenever possible:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v(".A8SBwf > .RNNXgb > .SDkEP > .a4bIc > .gLFyf")]),e._v(" "),o("ul",[o("li",[e._v("Not concise")]),e._v(" "),o("li",[e._v("Likely not stable: class names are auto-generated, they could change rapidly")])])]),e._v(" "),o("li",[o("code",[e._v(".g:nth-child(3) > .rc")]),e._v(" "),o("ul",[o("li",[e._v("Likely not stable: is the third child of .g always going to be present?")]),e._v(" "),o("li",[e._v("Likely not unique: is it always going to be the right element?")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);