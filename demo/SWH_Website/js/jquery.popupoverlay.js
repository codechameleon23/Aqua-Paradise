!function(t){var e,o,i=t(window),n={},a=[],s=[],p=null,d="_open",l="_close",r=[],c=null,u=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),f={_init:function(e){var o=t(e),i=o.data("popupoptions");s[e.id]=!1,a[e.id]=0,o.data("popup-initialized")||(o.attr("data-popup-initialized","true"),f._initonce(e)),i.autoopen&&setTimeout(function(){f.show(e,0)},0)},_initonce:function(o){var i,n,a,s,l=t(o),r=t("body"),h=l.data("popupoptions");(p=parseInt(r.css("margin-right"),10),c=void 0!==document.body.style.webkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition||void 0!==document.body.style.OTransition||void 0!==document.body.style.transition,"tooltip"==h.type&&(h.background=!1,h.scrolllock=!1),h.backgroundactive&&(h.background=!1,h.blur=!1,h.scrolllock=!1),h.scrolllock)&&(void 0===e&&(s=(a=t('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")).children(),e=s.innerWidth()-s.height(99).innerWidth(),a.remove()));if(l.attr("id")||l.attr("id","j-popup-"+parseInt(1e8*Math.random(),10)),l.addClass("popup_content"),h.background&&!t("#"+o.id+"_background").length){r.append('<div id="'+o.id+'_background" class="popup_background"></div>');var b=t("#"+o.id+"_background");b.css({opacity:0,visibility:"hidden",backgroundColor:h.color,position:"fixed",top:0,right:0,bottom:0,left:0}),h.setzindex&&!h.autozindex&&b.css("z-index","100000"),h.transition&&b.css("transition",h.transition)}r.append(o),l.wrap('<div id="'+o.id+'_wrapper" class="popup_wrapper" />'),(i=t("#"+o.id+"_wrapper")).css({opacity:0,visibility:"hidden",position:"absolute"}),u&&i.css("cursor","pointer"),"overlay"==h.type&&i.css("overflow","auto"),l.css({opacity:0,visibility:"hidden",display:"inline-block"}),h.setzindex&&!h.autozindex&&i.css("z-index","100001"),h.outline||l.css("outline","none"),h.transition&&(l.css("transition",h.transition),i.css("transition",h.transition)),l.attr("aria-hidden",!0),"overlay"==h.type&&(l.css({textAlign:"left",position:"relative",verticalAlign:"middle"}),n={position:"fixed",width:"100%",height:"100%",top:0,left:0,textAlign:"center"},h.backgroundactive&&(n.position="absolute",n.height="0",n.overflow="visible"),i.css(n),i.append('<div class="popup_align" />'),t(".popup_align").css({display:"inline-block",verticalAlign:"middle",height:"100%"})),l.attr("role","dialog");var v=h.openelement?h.openelement:"."+o.id+d;t(v).each(function(e,o){t(o).attr("data-popup-ordinal",e),o.id||t(o).attr("id","open_"+parseInt(1e8*Math.random(),10))}),l.attr("aria-labelledby")||l.attr("aria-label")||l.attr("aria-labelledby",t(v).attr("id")),"hover"==h.action?(h.keepfocus=!1,t(v).on("mouseenter",function(e){f.show(o,t(this).data("popup-ordinal"))}),t(v).on("mouseleave",function(t){f.hide(o)})):t(document).on("click",v,function(e){e.preventDefault();var i=t(this).data("popup-ordinal");setTimeout(function(){f.show(o,i)},0)}),h.closebutton&&f.addclosebutton(o),h.detach?l.hide().detach():i.hide()},show:function(n,d){var u=t(n);if(!u.data("popup-visible")){u.data("popup-initialized")||f._init(n),u.attr("data-popup-initialized","true");var b=t("body"),v=u.data("popupoptions"),g=t("#"+n.id+"_wrapper"),m=t("#"+n.id+"_background");if(h(n,d,v.beforeopen),s[n.id]=d,setTimeout(function(){r.push(n.id)},0),v.autozindex){for(var y=document.getElementsByTagName("*"),_=y.length,k=0,w=0;w<_;w++){var z=t(y[w]).css("z-index");"auto"!==z&&k<(z=parseInt(z,10))&&(k=z)}a[n.id]=k,v.background&&a[n.id]>0&&t("#"+n.id+"_background").css({zIndex:a[n.id]+1}),a[n.id]>0&&g.css({zIndex:a[n.id]+2})}v.detach?(g.prepend(n),u.show()):g.show(),o=setTimeout(function(){g.css({visibility:"visible",opacity:1}),t("html").addClass("popup_visible").addClass("popup_visible_"+n.id),g.addClass("popup_wrapper_visible")},20),v.scrolllock&&(b.css("overflow","hidden"),b.height()>i.height()&&b.css("margin-right",p+e)),v.backgroundactive&&u.css({top:(i.height()-(u.get(0).offsetHeight+parseInt(u.css("margin-top"),10)+parseInt(u.css("margin-bottom"),10)))/2+"px"}),u.css({visibility:"visible",opacity:1}),v.background&&(m.css({visibility:"visible",opacity:v.opacity}),setTimeout(function(){m.css({opacity:v.opacity})},0)),u.data("popup-visible",!0),f.reposition(n,d),u.data("focusedelementbeforepopup",document.activeElement),v.keepfocus&&(u.attr("tabindex",-1),setTimeout(function(){"closebutton"===v.focuselement?t("#"+n.id+" ."+n.id+l+":first").focus():v.focuselement?t(v.focuselement).focus():u.focus()},v.focusdelay)),t(v.pagecontainer).attr("aria-hidden",!0),u.attr("aria-hidden",!1),h(n,d,v.onopen),c?g.one("transitionend",function(){h(n,d,v.opentransitionend)}):h(n,d,v.opentransitionend),"tooltip"==v.type&&t(window).on("resize."+n.id,function(){f.reposition(n,d)})}},hide:function(e,i){var n=t.inArray(e.id,r);if(-1!==n){o&&clearTimeout(o);var a=t("body"),d=t(e),l=d.data("popupoptions"),u=t("#"+e.id+"_wrapper"),f=t("#"+e.id+"_background");d.data("popup-visible",!1),1===r.length?t("html").removeClass("popup_visible").removeClass("popup_visible_"+e.id):t("html").hasClass("popup_visible_"+e.id)&&t("html").removeClass("popup_visible_"+e.id),r.splice(n,1),u.hasClass("popup_wrapper_visible")&&u.removeClass("popup_wrapper_visible"),l.keepfocus&&!i&&setTimeout(function(){t(d.data("focusedelementbeforepopup")).is(":visible")&&d.data("focusedelementbeforepopup").focus()},0),u.css({visibility:"hidden",opacity:0}),d.css({visibility:"hidden",opacity:0}),l.background&&f.css({visibility:"hidden",opacity:0}),t(l.pagecontainer).attr("aria-hidden",!1),d.attr("aria-hidden",!0),h(e,s[e.id],l.onclose),c&&"0s"!==d.css("transition-duration")?d.one("transitionend",function(t){d.data("popup-visible")||(l.detach?d.hide().detach():u.hide()),l.scrolllock&&setTimeout(function(){a.css({overflow:"","margin-right":p})},10),h(e,s[e.id],l.closetransitionend)}):(l.detach?d.hide().detach():u.hide(),l.scrolllock&&setTimeout(function(){a.css({overflow:"visible","margin-right":p})},10),h(e,s[e.id],l.closetransitionend)),"tooltip"==l.type&&t(window).off("resize."+e.id)}},toggle:function(e,o){t(e).data("popup-visible")?f.hide(e):setTimeout(function(){f.show(e,o)},0)},reposition:function(e,o){var n=t(e),a=n.data("popupoptions"),s=t("#"+e.id+"_wrapper");t("#"+e.id+"_background");if(o=o||0,"tooltip"==a.type){var p;s.css({position:"absolute"});var l=(p=a.tooltipanchor?t(a.tooltipanchor):a.openelement?t(a.openelement).filter('[data-popup-ordinal="'+o+'"]'):t("."+e.id+d+'[data-popup-ordinal="'+o+'"]')).offset();"right"==a.horizontal?s.css("left",l.left+p.outerWidth()+a.offsetleft):"leftedge"==a.horizontal?s.css("left",l.left+p.outerWidth()-p.outerWidth()+a.offsetleft):"left"==a.horizontal?s.css("right",i.width()-l.left-a.offsetleft):"rightedge"==a.horizontal?s.css("right",i.width()-l.left-p.outerWidth()-a.offsetleft):s.css("left",l.left+p.outerWidth()/2-n.outerWidth()/2-parseFloat(n.css("marginLeft"))+a.offsetleft),"bottom"==a.vertical?s.css("top",l.top+p.outerHeight()+a.offsettop):"bottomedge"==a.vertical?s.css("top",l.top+p.outerHeight()-n.outerHeight()+a.offsettop):"top"==a.vertical?s.css("bottom",i.height()-l.top-a.offsettop):"topedge"==a.vertical?s.css("bottom",i.height()-l.top-n.outerHeight()-a.offsettop):s.css("top",l.top+p.outerHeight()/2-n.outerHeight()/2-parseFloat(n.css("marginTop"))+a.offsettop)}else"overlay"==a.type&&(a.horizontal?s.css("text-align",a.horizontal):s.css("text-align","center"),a.vertical?n.css("vertical-align",a.vertical):n.css("vertical-align","middle"))},addclosebutton:function(e){var o;o=t(e).data("popupoptions").closebuttonmarkup?t(n.closebuttonmarkup).addClass(e.id+"_close"):'<button class="popup_close '+e.id+'_close" title="Close" aria-label="Close"><span aria-hidden="true">×</span></button>',t(e).data("popup-initialized")&&t(e).append(o)}},h=function(e,o,i){var n,a,s=t(e).data("popupoptions");void 0!==s&&(n=s.openelement?s.openelement:"."+e.id+d,a=t(n+'[data-popup-ordinal="'+o+'"]'),"function"==typeof i&&i.call(t(e),e,a))};t(document).on("keydown",function(e){if(r.length){var o=r[r.length-1],i=document.getElementById(o);t(i).data("popupoptions").escape&&27==e.keyCode&&f.hide(i)}}),t(document).on("click",function(e){if(r.length){var o=r[r.length-1],i=document.getElementById(o),n=t(i).data("popupoptions").closeelement?t(i).data("popupoptions").closeelement:"."+i.id+l;t(e.target).closest(n).length&&(e.preventDefault(),f.hide(i)),t(i).data("popupoptions")&&t(i).data("popupoptions").blur&&!t(e.target).closest("#"+o).length&&2!==e.which&&t(e.target).is(":visible")&&(t(i).data("popupoptions").background?(f.hide(i),e.preventDefault()):f.hide(i,!0))}}),t(document).on("keydown",function(e){if(r.length&&9==e.which){var o=r[r.length-1],i=document.getElementById(o),n=t(i).find("*").filter("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(":visible"),a=t(":focus"),s=n.length,p=n.index(a);0===s?(t(i).focus(),e.preventDefault()):e.shiftKey?0===p&&(n.get(s-1).focus(),e.preventDefault()):p==s-1&&(n.get(0).focus(),e.preventDefault())}}),t.fn.popup=function(e){return this.each(function(){var o=t(this);if("object"==typeof e){var i=t.extend({},t.fn.popup.defaults,o.data("popupoptions"),e);o.data("popupoptions",i),n=o.data("popupoptions"),f._init(this)}else"string"==typeof e?(o.data("popupoptions")||(o.data("popupoptions",t.fn.popup.defaults),n=o.data("popupoptions")),f[e].call(this,this)):(o.data("popupoptions")||(o.data("popupoptions",t.fn.popup.defaults),n=o.data("popupoptions")),f._init(this))})},t.fn.popup.defaults={type:"overlay",autoopen:!1,background:!0,backgroundactive:!1,color:"black",opacity:"0.5",horizontal:"center",vertical:"middle",offsettop:0,offsetleft:0,escape:!0,blur:!0,setzindex:!0,autozindex:!1,scrolllock:!1,closebutton:!1,closebuttonmarkup:null,keepfocus:!0,focuselement:null,focusdelay:50,outline:!1,pagecontainer:null,detach:!1,openelement:null,closeelement:null,transition:null,tooltipanchor:null,beforeopen:null,onclose:null,onopen:null,opentransitionend:null,closetransitionend:null}}(jQuery);