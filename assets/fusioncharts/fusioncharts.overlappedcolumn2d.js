!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}((function(){(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[12],{1208:function(e,t,l){"use strict";var a=l(208);t.__esModule=!0,t["default"]=void 0;var n=a(l(1209));t.OverlapperColumn2D=n["default"];var i=a(l(1064)),o={name:"overlappedcolumn2d",type:"package",requiresFusionCharts:!0,extension:function(e){e.addDep(i["default"]),e.addDep(n["default"])}};t["default"]=o},1209:function(e,t,l){"use strict";var a=l(208);t.__esModule=!0,t["default"]=void 0;var n=a(l(1210))["default"];t["default"]=n},1210:function(e,t,l){"use strict";var a=l(208);t.__esModule=!0,t["default"]=void 0;var n=a(l(229)),i=a(l(547)),o=a(l(1211)),s=a(l(1207)),r=a(l(549)),u=function(e){function t(){var t;return(t=e.call(this)||this).eiMethods={},t.registerFactory("dataset",r["default"],["vCanvas"]),t}(0,n["default"])(t,e);var l=t.prototype;return l.getName=function(){return"OverlappedColumn2D"},t.getName=function(){return"OverlappedColumn2D"},l.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this),this.config.friendlyName="Multi-series Overlapped Column Chart",this.config.defaultDatasetType="column",this.config.enablemousetracking=!0},l.getDSdef=function(){return o["default"]},l.getDSGroupdef=function(){return s["default"]},t}(i["default"]);t["default"]=u},1211:function(e,t,l){"use strict";var a=l(208);t.__esModule=!0,t["default"]=void 0;var n=a(l(229)),i=l(215);function o(e,t){var l,a,n,i,o=e.y,s=e.height;for(l=0,a=t.length;l<a;l++)if(i=t[l].height,n=t[l].y,t[l].labelShown&&o+s>=n&&n+i>=o)return!0;return!1}var s=function(e){function t(){var t;return(t=e.call(this)||this)._labeldimensionMap={},t}return(0,n["default"])(t,e),t.prototype.drawLabel=function(e,t){var l,a,n,s,r,u,f,d,p,h,c,b,g,m=this.getFromEnv("chart"),v=this.getFromEnv("animationManager"),w=m.config,y=this.getFromEnv("xAxis"),S=this.getFromEnv("paper"),_=this.getState("visible"),x=m.getFromEnv("smartLabel"),k=m.config.dataLabelStyle,D=this.config,M=y.getTicksLen(),C=this.components,F=C.data,O=C.pool,E=w.rotatevalues?270:0,N={},L=this.getJSONIndex(),A=this.getSkippingInfo&&this.getSkippingInfo(),I=A&&A.skippingApplied,J=A&&A.labelDraw||[],T=J.length,V=(0,i.pluckNumber)(e,0),W=(0,i.pluckNumber)(t,I?T:M),G=T===Math.abs(W-(V+1)),z=function(){this.attr({"text-bound":[]}),this.hide()},R=function(){this.show()};for((g=this.getContainer("labelGroup")).css({fontFamily:k.fontFamily,fontSize:k.fontSize,fontWeight:k.fontWeight,fontStyle:k.fontStyle}),g.show(),x.useEllipsesOnOverflow(m.config.useEllipsesWhenOverflow),x.setStyle(k),r=V;r<W;r++)f=(d=(a=F[s=I&&G?J[r]:r])&&a.config)&&d.setValue,void 0!==a&&null!=f&&!0!==d.labelSkip?(u=a.graphics)&&(p=d.showValue,b=m.getDatasets().map((function(e){return e.getJSONIndex()<L&&e._labeldimensionMap[r]})).filter(Boolean),D.showValues&&d.showValue&&(l=o(N={x:d.props.label.attr.x,y:d.props.label.attr.y,width:d._state.labelWidth,height:d._state.labelHeight},b)),this._labeldimensionMap[r]=N,p&&null!==f&&!l?((n=d.props.label.attr).transform=S.getSuggestiveRotation(E,n.x,n.y),(h=u.label)||O&&O.label[0]&&(h=u.label=O.label[0],O.label.splice(0,1)),(h=v.setAnimation({el:u.label||"text",attr:n,component:this,label:"plotLabel",index:s,container:g,callback:_?R:z}))&&h.outlineText(D.showTextOutline,n.fill),this._labeldimensionMap[r].labelShown=!!_,u.label||(u.label=this.addGraphicalElement("plotLabel",h,!0))):(u.label&&v.setAnimation({el:u.label,component:this,doNotRemove:!0,callback:z,label:"plotLabel"}),this._labeldimensionMap[r].labelShown=!1)):(d&&delete d.labelSkip,(c=a&&a.graphics)&&c.label&&c.label.hide());D.labelDrawn=!0},t}(a(l(520))["default"]);t["default"]=s}}])}));
//# sourceMappingURL=http://localhost:3052/3.15.3/map/eval/fusioncharts.overlappedcolumn2d.js.map