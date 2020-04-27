if (self.CavalryLogger) { CavalryLogger.start_js(["13SiE"]); }

__d("StoriesConstants",[],(function(a,b,c,d,e,f){"use strict";a={CARD:{DEFAULT_SUSPENSE_CARD_INDEX:-1},NUMBER_OF_BUCKETS_TO_PREFETCH:2,NavList:{BANNER_HEIGHT:42,BOTTOM_MARGIN:25,CONNECTION_NAME:"useStoriesViewerBuckets_unified_stories_buckets",COUNT_PER_PAGINATION_FETCH:9},RATING_STICKER:{MAX_RATING:5,PADDING_SPACE_PORTION:.04,STAR_ICON_SIZE:32,STAR_INLINE_PORTION:.55},RELAY_FETCH_POLICY:{NETWORK_ONLY:"network-only",STORE_OR_NETWORK:"store-or-network"},TIMEOUT_FOR_SERVER_TO_FINISH_WORK:3e3,TRANSITION_DURATION_MS:300,ViewerSheetViewerList:{COUNT_PER_PAGINATION_FETCH:10,MAX_REACTIONS_PER_VIEWER:5}};e.exports=a}),null);
__d("MercuryTypingAnimation_DEPRECATED.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx("div",{className:b("joinClasses")("_4a0v _1x3z",this.props.className),children:h.jsxs("div",{className:"_4b0g",children:[h.jsx("div",{className:"_5pd7"}),h.jsx("div",{className:"_5pd7"}),h.jsx("div",{className:"_5pd7"})]})})};return c}(h.PureComponent);e.exports=a}),null);
__d("nodeIsInConnection",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){a=a.getLinkedRecords("edges");if(a==null){c&&c("Connection contains no edges field.");return!1}var d=!1;b=b.getDataID();if(b==null){c&&c("Search node has no ID.");return!1}for(var e=a,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;var i=h&&h.getLinkedRecord("node");if(i==null){c&&c("Edge at index "+a.indexOf(h)+" has no node.");continue}if(i.getDataID()===b){d=!0;break}}return d}e.exports=a}),null);
__d("XUIGrayText.react",["cx","React","XUIText.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.shade;a=babelHelpers.objectWithoutPropertiesLoose(a,["shade"]);c=(c==="light"?"_50f8":"")+(c==="medium"?" _c24":"")+(c==="dark"?" _50f9":"");return h.jsx(b("XUIText.react"),babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,c),children:this.props.children}))};return c}(h.Component);a.propTypes={shade:b("prop-types").oneOf(["light","medium","dark"])};a.defaultProps={shade:"light"};e.exports=a}),null);
__d("InlineBlock.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React"),i={baseline:null,bottom:"_6d",middle:"_6b",top:"_6e"};a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.alignv,d=a.height,e=a.fullWidth;a=babelHelpers.objectWithoutPropertiesLoose(a,["alignv","height","fullWidth"]);c=i[c];e="_6a"+(e?" _5u5j":"");var f=b("joinClasses")(e,c);if(d!=null){c=h.jsx("div",{className:b("joinClasses")("_6a",c),style:{height:d+"px"}});return h.jsxs("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,e),height:null,children:[c,h.jsx("div",{className:f,children:this.props.children})]}))}else return h.jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,f),children:this.props.children}))};return c}(h.Component);a.propTypes={alignv:b("prop-types").oneOf(["baseline","bottom","middle","top"]),height:b("prop-types").number,fullWidth:b("prop-types").bool};a.defaultProps={alignv:"baseline",fullWidth:!1};e.exports=a}),null);
__d("PerfFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("perf");e.exports=a}),null);
__d("PerfXSharedFields",[],(function(a,b,c,d,e,f){var g={addCommonValues:function(a){navigator&&navigator.hardwareConcurrency!==void 0&&(a.num_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory&&(a.ram_gb=navigator.deviceMemory);navigator&&navigator.connection&&(typeof navigator.connection.downlink==="number"&&(a.downlink_megabits=navigator.connection.downlink),typeof navigator.connection.effectiveType==="string"&&(a.effective_connection_type=navigator.connection.effectiveType),typeof navigator.connection.rtt==="number"&&(a.rtt_ms=navigator.connection.rtt));return a},getCommonData:function(){var a={};g.addCommonValues(a);return a}};e.exports=g}),null);
__d("QuickLogConfigHelper",["QuickLogConfig"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(){}var c=a.prototype;c.getEventDetails=function(a){return b("QuickLogConfig").qpl_events[a]};return a}();e.exports=new a()}),null);
__d("QuickPerformanceLogger",["requireCond","Arbiter","Bootloader","Env","FBLogger","cr:682175","cr:1367102","PerfFalcoEvent","PerfXSharedFields","QuickLogConfig","QuickLogConfigHelper","Random","Run","WebStorage","forEachObject","gkx","mapObject","performanceAbsoluteNow","performanceNavigationStart"],(function(a,b,c,d,e,f){"use strict";var g,h,i,j,k=(g||(g=b("performanceAbsoluteNow")))(),l="qpl";a=function(){function a(){var a=this;this.$1=new Map();this.$2={};this.$3=100;this.$5=1;this.$6=new Map();b("Run").onUnload(function(){a.$7(),a.$8(706,{respectUnloadPolicy:!0,timestamp:a.currentTimestamp()})});this.$9();this.initQplFlipperPlugin()}var c=a.prototype;c.$9=function(){var a=this,c=(h||(h=b("WebStorage"))).getSessionStorageForRead();if(!c){this.$10("_loadSavedState","sessionStorage is not available");return}var d=c.getItem(l);if(d==null)return;c.removeItem(l);c=JSON.parse(d);if(c==null){this.$10("_loadSavedState","Saved state failed to deserialize");return}if(c.markers==null||c.markers.length===0){this.$10("_loadSavedState","No saved markers found");return}c.markers.forEach(function(b){var c=b[0],d=b[1];b=b[2];a.$11(c,d,b);a.$10("_loadSavedState","Marker "+c+" (instanceKey: "+d+") resumed")})};c.$7=function(){var a=this,c=[];this.$1.forEach(function(a,b){a.forEach(function(a,d){a.resumeAfterNavigation===!0&&(delete a.resumeAfterNavigation,c.push([b,d,a]))})});if(c.length>0){var d={markers:c},e=(h||(h=b("WebStorage"))).getSessionStorage();e=h.setItemGuarded(e,l,JSON.stringify(d));e&&(c.forEach(function(b){var c=b[0];b=b[1];a.markerEnd(c,96,b)}),this.$10("_storeSavedState","Failed to store saved state: "+e.message),b("FBLogger")("qpl").catching(e).warn("Failed to store QPL state: "+JSON.stringify(d,null,2)));c.forEach(function(b){var c=b[0];b=b[1];a.$12(c,b)})}};c.$13=function(a,c){if(b("QuickLogConfig").killswitch)return null;a=this.$1.get(a);if(!a)return null;a=a.get(c);return!a?null:a};c.$11=function(a,b,c){var d=this.$1.get(a);d||(d=new Map(),this.$1.set(a,d));d.set(b,c)};c.$12=function(a,b){(a=this.$1.get(a))==null?void 0:a["delete"](b)};c.markerStoreBeforeNavigation=function(a,b){b=b===void 0?{}:b;b=b.instanceKey;b=b===void 0?0:b;a=this.$13(a,b);if(!a)return;a.resumeAfterNavigation=!0};c.markerStart=function(a,c,d,e){var f,g;c===void 0&&(c=0);d===void 0&&(d=this.currentTimestamp());e=e===void 0?{}:e;var h=e.cancelOnUnload;h=h===void 0?!1:h;e=e.trackedForLoss;e=e===void 0?!1:e;if(b("QuickLogConfig").killswitch)return;this.$13(a,c)&&b("FBLogger")("qpl").blameToPreviousDirectory().warn("Duplicate QPL markerId: "+a+" & instanceKey: "+c);var i;b("cr:682175")&&(i=b("cr:682175").maybeStartTraceForQPL(a,c,d));f=(f=i)==null?void 0:f.loomProviders;g=(g=i)==null?void 0:g.traceReferenceId;this.$6.forEach(function(b){return b.onMarkerStart(a,c,d)});var j=this.$14(a),k=j[0];j=j[1];(k||g!=null)&&this.$11(a,c,{passesSampling:k,timestamp:d,sampleRate:j,points:{},cancelOnUnload:h,trackedForLoss:e});k&&e===!0&&this.$15({marker_id:27787271,action_id:0,sample_rate:1,value:0,annotations_int:{tracked_marker_id:a}});g!=null&&this.annotateMarkerString(a,"loomRefId",g,c);f!=null&&this.annotateMarkerStringArray(a,"loomProviders",Array.from(f),c)};c.markerStartFromNavStart=function(a,c){c===void 0&&(c=0);var d=b("performanceNavigationStart")();this.markerStart(a,c,d);if(b("performanceNavigationStart").isPolyfilled){d=this.$13(a,c);d&&(d.timestampIsApproximate=!0)}};c.markerAnnotate=function(a,c,d){d=d===void 0?{}:d;d=d.instanceKey;var e=d===void 0?0:d;this.$6.forEach(function(d){return b("forEachObject")(c,function(c){b("forEachObject")(c,function(b,c){d.onAnnotation(a,e,c,b)})})});d=this.$13(a,e);if(!d)return;c.string&&(d.annotations=Object.assign({},d.annotations,c.string));if(c["int"]){var f=(i||(i=b("mapObject")))(c["int"],function(a){return parseInt(a,10)});d.annotationsInt=Object.assign({},d.annotationsInt,f)}c["double"]&&(d.annotationsDouble=Object.assign({},d.annotationsDouble,c["double"]));c.bool&&(d.annotationsBool=Object.assign({},d.annotationsBool,c.bool));c.string_array&&(d.annotationsStringArray=Object.assign({},d.annotationsStringArray,c.string_array));if(c.int_array){f=(i||(i=b("mapObject")))(c.int_array,function(a){return a.map(function(a){return parseInt(a,10)})});d.annotationsIntArray=Object.assign({},d.annotationsIntArray,f)}c.double_array&&(d.annotationsDoubleArray=Object.assign({},d.annotationsDoubleArray,c.double_array));c.bool_array&&(d.annotationsBoolArray=Object.assign({},d.annotationsBoolArray,c.bool_array))};c.annotateMarkerBool=function(a,b,c,d){d===void 0&&(d=0);this.markerAnnotate(a,{bool:(a={},a[b]=c,a)},{instanceKey:d})};c.annotateMarkerBoolArray=function(a,b,c,d){d===void 0&&(d=0);this.markerAnnotate(a,{bool_array:(a={},a[b]=c,a)},{instanceKey:d})};c.annotateMarkerString=function(a,b,c,d){d===void 0&&(d=0);this.markerAnnotate(a,{string:(a={},a[b]=c,a)},{instanceKey:d})};c.annotateMarkerStringArray=function(a,b,c,d){d===void 0&&(d=0);this.markerAnnotate(a,{string_array:(a={},a[b]=c,a)},{instanceKey:d})};c.annotateMarkerInt=function(a,b,c,d){d===void 0&&(d=0);this.markerAnnotate(a,{"int":(a={},a[b]=c,a)},{instanceKey:d})};c.annotateMarkerIntArray=function(a,b,c,d){d===void 0&&(d=0);this.markerAnnotate(a,{int_array:(a={},a[b]=c,a)},{instanceKey:d})};c.annotateMarkerDouble=function(a,b,c,d){d===void 0&&(d=0);this.markerAnnotate(a,{"double":(a={},a[b]=c,a)},{instanceKey:d})};c.annotateMarkerDoubleArray=function(a,b,c,d){d===void 0&&(d=0);this.markerAnnotate(a,{double_array:(a={},a[b]=c,a)},{instanceKey:d})};c.markerPoint=function(a,b,c,d,e){d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());this.$6.forEach(function(f){return f.onMarkerPoint(a,d,b,c,e)});var f=this.$13(a,d);if(!f)return;f.points[b]={data:c,timeSinceStart:Math.round(e-f.timestamp)}};c.markerEnd=function(a,c,d,e){d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());Date.now();this.$6.forEach(function(b){return b.onMarkerEnd(c,a,d,e)});var f=this.$13(a,d);if(!f)return;b("cr:682175")&&b("cr:682175").maybeEndTraceForQPL(a,d,e,babelHelpers["extends"]({qpl_action:c},f.annotations,f.annotationsBool,f.annotationsInt,f.annotationsDouble,f.annotationsBoolArray,f.annotationsStringArray,f.annotationsIntArray,f.annotationsDoubleArray));if(f.passesSampling){var g=Math.round(e-f.timestamp);if(f.timestampIsApproximate!==!0){var h=f.points;g={marker_id:a,action_id:c,instance_id:d,sample_rate:f.sampleRate,method:"random_sampling",value:g,annotations:f.annotations,annotations_bool:f.annotationsBool,annotations_int:f.annotationsInt,annotations_double:f.annotationsDouble,annotations_bool_array:f.annotationsBoolArray,annotations_string_array:f.annotationsStringArray,annotations_int_array:f.annotationsIntArray,annotations_double_array:f.annotationsDoubleArray,points:Object.keys(h).map(function(a){return{name:a,timeSinceStart:h[a].timeSinceStart,data:{string:h[a].data!=null?{__key:h[a].data}:null}}}),metadata:{application_analytics:{time_since_qpl_module_init:e-k}}};f.trackedForLoss===!0&&(g.tracked_for_loss=!0);this.$15(g)}this.$4===a&&b("Arbiter").inform("qpl_debugger_finished")}this.$12(a,d)};c.markerDrop=function(a,c){c===void 0&&(c=0);this.$12(a,c);if(b("cr:682175")){var d=this.currentTimestamp();b("cr:682175").maybeEndTraceForQPL(a,c,d,{qpl_action:216})}};c.markEvent=function(a,c,d,e){e=e===void 0?{}:e;var f=e.timestamp;f=f===void 0?this.currentTimestamp():f;e=e.annotations;if(b("QuickLogConfig").killswitch)return;var g=this.$14(a),h=g[0];g=g[1];if(!h)return;h=typeof e==="function"?e():e;this.$15({marker_id:a,action_id:0,instance_id:0,sample_rate:g,method:"random_sampling",value:0,da_type:c,da_level:d,annotations:h==null?void 0:h.string,annotations_int:h==null?void 0:h["int"],annotations_double:h==null?void 0:h["double"],annotations_bool:h==null?void 0:h.bool,annotations_string_array:h==null?void 0:h.string_array,annotations_int_array:h==null?void 0:h.int_array,annotations_double_array:h==null?void 0:h.double_array,annotations_bool_array:h==null?void 0:h.bool_array,metadata:{application_analytics:{time_since_qpl_module_init:f-k}}})};c.$8=function(a,b){var c=this;b=b===void 0?{}:b;var d=b.timestamp,e=b.respectUnloadPolicy;this.$1.forEach(function(b,f){b.forEach(function(b,g){(!e||b.cancelOnUnload===!0)&&c.markerEnd(f,a,g,d)})})};c.dropAllMarkers=function(){this.$1.clear()};c.setAlwaysOnSampleRate=function(a,b){this.$2[a]=b};c.currentTimestamp=function(){return(g||(g=b("performanceAbsoluteNow")))()};c.$14=function(a){var c;if((j||(j=b("Env"))).enable_qplinspector===!0||typeof window.__je2e_recordQPLMarker==="function"||this.$4===a)return[!0,1];c=(c=b("QuickLogConfigHelper").getEventDetails(a))!=null?c:{sampleRate:0};c=(a=(a=this.$2[a])!=null?a:c.sampleRate)!=null?a:this.$3;a=b("Random").coinflip(c);return[a,c]};c.$15=function(a){var c=this.$16(a);typeof window.__je2e_recordQPLMarker==="function"&&window.__je2e_recordQPLMarker(a);(j||(j=b("Env"))).enable_qplinspector===!0&&b("Bootloader").loadModules(["QPLInspector"],function(a){a.appendLog(c)},"QuickPerformanceLogger");b("gkx")("708253")?b("PerfFalcoEvent").logImmediately(function(){return c}):b("PerfFalcoEvent").log(function(){return c})};c.$16=function(a){var c=b("PerfXSharedFields").getCommonData();a.metadata=babelHelpers["extends"]({},a.metadata,{memory_stats:{total_mem:c.ram_gb?c.ram_gb*1073741824:null},network_stats:{downlink_megabits:c.downlink_megabits,network_subtype:c.effective_connection_type,rtt_ms:c.rtt_ms}});return a};c.$10=function(a,b,c){};c.enableDebug=function(a){this.$4=parseInt(a,10)};c.disableDebug=function(){this.$4=null};c.addListener=function(a){var b=this,c=this.$5++;this.$6.set(c,a);return{dispose:function(){b.$6["delete"](c)}}};c.initQplFlipperPlugin=function(){b("cr:1367102")!=null&&this.addListener(b("cr:1367102").qplFlipperPlugin.listener())};return a}();e.exports=new a()}),null);