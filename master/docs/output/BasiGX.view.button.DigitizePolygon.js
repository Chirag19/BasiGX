Ext.data.JsonP.BasiGX_view_button_DigitizePolygon({"tagname":"class","name":"BasiGX.view.button.DigitizePolygon","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"DigitizePolygon.js","href":"DigitizePolygon.html#BasiGX-view-button-DigitizePolygon"}],"aliases":{"widget":["basigx-button-digitize-polygon"]},"alternateClassNames":[],"extends":"BasiGX.view.button.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"collection","tagname":"cfg","owner":"BasiGX.view.button.DigitizePolygon","id":"cfg-collection","meta":{"private":true}},{"name":"layer","tagname":"cfg","owner":"BasiGX.view.button.DigitizePolygon","id":"cfg-layer","meta":{"private":true}},{"name":"map","tagname":"cfg","owner":"BasiGX.view.button.DigitizePolygon","id":"cfg-map","meta":{"private":true}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.DigitizePolygon","id":"property-bind","meta":{}},{"name":"listeners","tagname":"property","owner":"BasiGX.view.button.DigitizePolygon","id":"property-listeners","meta":{"private":true}},{"name":"name","tagname":"property","owner":"BasiGX.view.button.DigitizePolygon","id":"property-name","meta":{"private":true}},{"name":"toggleGroup","tagname":"property","owner":"BasiGX.view.button.DigitizePolygon","id":"property-toggleGroup","meta":{"private":true}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.DigitizePolygon","id":"property-viewModel","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.button.Base","id":"method-constructor","meta":{}},{"name":"getCollection","tagname":"method","owner":"BasiGX.view.button.DigitizePolygon","id":"method-getCollection","meta":{}},{"name":"getLayer","tagname":"method","owner":"BasiGX.view.button.DigitizePolygon","id":"method-getLayer","meta":{}},{"name":"getMap","tagname":"method","owner":"BasiGX.view.button.DigitizePolygon","id":"method-getMap","meta":{}},{"name":"setCollection","tagname":"method","owner":"BasiGX.view.button.DigitizePolygon","id":"method-setCollection","meta":{}},{"name":"setLayer","tagname":"method","owner":"BasiGX.view.button.DigitizePolygon","id":"method-setLayer","meta":{}},{"name":"setMap","tagname":"method","owner":"BasiGX.view.button.DigitizePolygon","id":"method-setMap","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.button.DigitizePolygon","component":false,"superclasses":["Ext.Button","BasiGX.view.button.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='docClass'>BasiGX.view.button.Base</a><div class='subclass '><strong>BasiGX.view.button.DigitizePolygon</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon' target='_blank'>DigitizePolygon.js</a></div></pre><div class='doc-contents'><p>Digitize Polygon Button</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-collection' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-cfg-collection' class='name expandable'>collection</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-layer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-cfg-layer' class='name expandable'>layer</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-cfg-map' class='name expandable'>map</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: &#39;{digitizePolygonText}&#39;}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-bind\" rel=\"BasiGX.view.button.Base-property-bind\" class=\"docClass\">BasiGX.view.button.Base.bind</a></p></div></div></div><div id='property-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-property-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-property-name' class='name expandable'>name</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;drawPolygonsBtn&#39;</code></p></div></div></div><div id='property-toggleGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-property-toggleGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-property-toggleGroup' class='name expandable'>toggleGroup</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;draw&#39;</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {tooltip: &#39;Digitize a new polygon&#39;, digitizePolygonText: &#39;Digitize polygon&#39;}}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-viewModel\" rel=\"BasiGX.view.button.Base-property-viewModel\" class=\"docClass\">BasiGX.view.button.Base.viewModel</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='defined-in docClass'>BasiGX.view.button.Base</a><br/><a href='source/Base.html#BasiGX-view-button-Base-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.button.Base-method-constructor' class='name expandable'>BasiGX.view.button.DigitizePolygon</a>( <span class='pre'></span> ) : <a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-method-getCollection' class='name expandable'>getCollection</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of collection. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.DigitizePolygon-cfg-collection\" rel=\"BasiGX.view.button.DigitizePolygon-cfg-collection\" class=\"docClass\">collection</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-method-getLayer' class='name expandable'>getLayer</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of layer. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.DigitizePolygon-cfg-layer\" rel=\"BasiGX.view.button.DigitizePolygon-cfg-layer\" class=\"docClass\">layer</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-method-getMap' class='name expandable'>getMap</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of map. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.DigitizePolygon-cfg-map\" rel=\"BasiGX.view.button.DigitizePolygon-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-collection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-method-setCollection' class='name expandable'>setCollection</a>( <span class='pre'>collection</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of collection. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.DigitizePolygon-cfg-collection\" rel=\"BasiGX.view.button.DigitizePolygon-cfg-collection\" class=\"docClass\">collection</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>collection</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-method-setLayer' class='name expandable'>setLayer</a>( <span class='pre'>layer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of layer. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.DigitizePolygon-cfg-layer\" rel=\"BasiGX.view.button.DigitizePolygon-cfg-layer\" class=\"docClass\">layer</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.DigitizePolygon'>BasiGX.view.button.DigitizePolygon</span><br/><a href='source/DigitizePolygon.html#BasiGX-view-button-DigitizePolygon-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.DigitizePolygon-method-setMap' class='name expandable'>setMap</a>( <span class='pre'>map</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of map. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.DigitizePolygon-cfg-map\" rel=\"BasiGX.view.button.DigitizePolygon-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});