if (self.CavalryLogger) { CavalryLogger.start_js(["56doC"]); }

__d("DeviceBasedLoginForm",["Event","tidyEvent"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(a){a.preventDefault(),c.submit()}))}};e.exports=a}),null);
__d("DeviceLoginUserCloseButtonNUX",["Arbiter","Event"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c,d){b("Event").listen(c,"click",function(){d.hide()}),b("Arbiter").subscribe("account_switcher/user_clicked",function(){d.hide()})}};e.exports=a}),null);
__d("RegistrationGenderPronounWarning",["fbt","CSS","DOM","Event","GenderConst","RegistrationClientConfig","UsernameFormatToken"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j="",k="";function l(){if(!h)return;var a=i.replace(b("UsernameFormatToken").FIRST,j).replace(b("UsernameFormatToken").LAST,k).trim();a.length?a=g._("Lainnya akan melihat kata ganti Anda sebagai \"dia.\" Misalnya, \"Ini ulang tahun {name}. Ucapkan selamat ulang tahun kepadanya!\"",[g._param("name",a)]):a=g._("Lainnya akan melihat kata ganti Anda sebagai \"dia.\" Misalnya, \"Ini ulang tahunnya. Ucapkan selamat ulang tahun kepadanya!\"");b("DOM").setContent(h,a)}a={registerSelector:function(a,c,d){h=c,i=d,l(),b("Event").listen(a,"change",function(){l(),b("CSS").conditionShow(c,a.value===""+b("GenderConst").NEUTER_SINGULAR)})},registerNameInput:function(a,c){b("Event").listen(c,"input",function(){a===b("RegistrationClientConfig").fields.FIRSTNAME?j=c.value:a===b("RegistrationClientConfig").fields.LASTNAME&&(k=c.value),l()})}};e.exports=a}),null);
__d("XReCaptchaLogActionsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/captcha/recaptcha_log_actions/",{})}),null);
__d("XRegistrationFormLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/reg/log/",{action:{type:"String"},reg_instance:{type:"String"},category:{type:"Enum",enumType:1},type:{type:"Enum",enumType:1},field:{type:"Enum",enumType:1},cp:{type:"String"},ri:{type:"String"}})}),null);
__d("RegistrationLogger",["AsyncSignal","RegistrationClientConfig","XRegistrationFormLoggingController"],(function(a,b,c,d,e,f){a={bumpInlineValidation:function(a,c,d,e){if(!b("RegistrationClientConfig").logging.enabled)return;c=b("XRegistrationFormLoggingController").getURIBuilder().setEnum("category",b("RegistrationClientConfig").logging.categories.INLINE).setEnum("type",c).setEnum("field",a).setString("reg_instance",d).setString("ri",e).getURI();new(b("AsyncSignal"))(c.toString(),{}).setHandler(this.handleResponse).send()},logFormFocus:function(a,c,d,e){a=b("XRegistrationFormLoggingController").getURIBuilder().setString("action",a).setString("ri",d).setString("reg_instance",c);d=e&&e.get("cp");d!=null&&a.setString("cp",d);new(b("AsyncSignal"))(a.getURI().toString(),{}).setHandler(this.handleResponse).send()},handleResponse:function(a){!a}};e.exports=a}),null);
__d("StepResult",[],(function(a,b,c,d,e,f){a=Object.freeze({NOT_STARTED:0,SUCCESS:1,FAILED:2,SKIPPED:3});e.exports=a}),null);
__d("RegistrationValidatorsResult",["RegistrationClientConfig","StepResult"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.isPasswordValid=!1,this.isEmailValid=!1,this.isEmailConfirmationValid=!1,this.isBirthdayValid=!1,this.firstInvalidValidator=null}var c=a.prototype;c.addValidation=function(a){if(a.getFieldName()===b("RegistrationClientConfig").fields.PASSWORD&&a.fieldIsValid())this.isPasswordValid=!0;else if(a.getFieldName()===b("RegistrationClientConfig").fields.EMAIL&&a.fieldIsValid())this.isEmailValid=!0;else if(a.getFieldName()===b("RegistrationClientConfig").fields.EMAIL_CONFIRMATION){var c=a.stepLoggingTypes.indexOf(b("RegistrationClientConfig").logging.types.CONTACTPOINT_INVALID);c!=-1&&a.stepResults[c]===b("StepResult").SUCCESS&&(this.isEmailConfirmationValid=!0)}else a.getFieldName()===b("RegistrationClientConfig").fields.BIRTHDAY_WRAPPER&&a.fieldIsValid()&&(this.isBirthdayValid=!0);!this.hasInvalidValidator()&&!a.fieldIsValid()&&(this.firstInvalidValidator=a)};c.hasInvalidValidator=function(){return this.firstInvalidValidator!==null};c.getFirstInvalidValidator=function(){return this.firstInvalidValidator};c.isEmailFieldValid=function(){return this.isEmailValid};c.isEmailConfirmationFieldValid=function(){return this.isEmailConfirmationValid};c.isPasswordFieldValid=function(){return this.isPasswordValid};c.isBirthdayFieldValid=function(){return this.isBirthdayValid};return a}();e.exports=a}),null);
__d("XRecoverInitiateAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/recover/initiate/",{ctx:{type:"String"},c:{type:"String"},r:{type:"String"},ldata:{type:"String"},cid:{type:"Int"},btp:{type:"String"},device_id:{type:"String"},cuid:{type:"String"},recover_method:{type:"String"},reg_instance:{type:"String"},sr:{type:"Bool",defaultValue:!1},sbc:{type:"Bool",defaultValue:!1},rpm:{type:"String"},search_query:{type:"String"},multiple_results:{type:"Bool",defaultValue:!1},fl:{type:"String"},ars:{type:"String"},s:{type:"Int"},social_plugin:{type:"String"},cl:{type:"Bool",defaultValue:!1},wsr:{type:"Bool",defaultValue:!1},ref:{type:"String"},reg_info:{type:"String"},ipw:{type:"Bool",defaultValue:!1},selected_cuid:{type:"String"},redirect_to_full_page_on_captcha:{type:"Bool",defaultValue:!1},openid_provider_name:{type:"String"},cpp:{type:"String"},email:{type:"String"},openid_provider_id:{type:"String"}})}),null);
__d("XRegistrationAttemptLoginController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/registration/maybelogin/",{reg_email__:{type:"String"},reg_email_confirmation__:{type:"String"},reg_passwd__:{type:"String"}})}),null);
__d("RegistrationMultipleInputValidator",["invariant","DataStore","DOM","Event","Focus","RegistrationClientConfig","RegistrationFieldValidator","getActiveElement"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,h){var i;switch(f){case b("RegistrationClientConfig").validators.types.SELECTORS:i="select";break;case b("RegistrationClientConfig").validators.types.RADIO:i='input[type="radio"]';break;default:g(0,310,f)}var j=[],k=b("DOM").scry(d,i);j.push.apply(j,k);j.length===h||g(0,311,j.length,h);return a.call(this,c,d,e,f,j)||this}var d=c.prototype;d.setupListenersForField=function(){this.inputs!=null||g(0,312),this.inputs.forEach(function(a){var c=this;b("Event").listen(a,"focus",this.dismissPersistent.bind(this));b("Event").listen(a,"focus",this.maybeShowFlyout.bind(this));this.fieldType===b("RegistrationClientConfig").validators.types.RADIO?b("Event").listen(a,"click",function(){c.emit("fieldblur")}):b("Event").listen(a,"blur",function(){setTimeout(function(){this.isFocused()||this.emit("fieldblur")}.bind(c),0)})},this),this.addListener("fieldblur",this.dismissFlyout,this),this.addListener("fieldblur",this.validateField.bind(this,0,[]))};d.getField=function(){return this.inputs};d.getFieldName=function(){return b("DataStore").get(this.field,"name")};d.getFlyoutContext=function(){return this.inputs[0]};d.isFocused=function(){var a=b("getActiveElement")();for(var c=0;c<this.inputs.length;c++)if(this.inputs[c]===a)return!0;return!1};d.focusField=function(){b("Focus").set(this.inputs[0])};return c}(b("RegistrationFieldValidator"));e.exports=a}),null);
__d("XRegistrationValidateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/registration/validation/{type}/",{type:{type:"Enum",required:!0,enumType:1},contactpoint:{type:"String"}})}),null);
__d("RegistrationInlineValidations",["invariant","Promise","regeneratorRuntime","AsyncRequest","DataStore","PasswordMeterFieldValidator","RegistrationClientConfig","RegistrationController","RegistrationFieldValidator","RegistrationMultipleInputValidator","XRegistrationValidateController","qex"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return new(b("Promise"))(function(b,c){!a.value||/^\s*$/.exec(a.value)?c():b()})}function i(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:if(b("RegistrationController").confirmContactpointShown){c.next=2;break}return c.abrupt("return");case 2:c.next=4;return b("regeneratorRuntime").awrap(h(a));case 4:case"end":return c.stop()}},null,this)}function j(a){return new(b("Promise"))(function(c,d){if(b("RegistrationController").inAgeFlow&&a[0].name.contains("birthday")){c();return}var e={},f={};for(var h=0;h<a.length;h++){var i=a[h];if(i.nodeName==="SELECT"){if(!i.value||i.value==="0"){d();return}}else i.nodeName==="INPUT"&&i.type==="radio"?(e[i.name]=!0,i.checked&&(f[i.name]=!0)):g(0,2838,i)}Object.keys(e).length===Object.keys(f).length?c():d()})}function k(a){return new(b("Promise"))(function(c,d){if(b("RegistrationController").inAgeFlow){c();return}var e=a.find(function(a){return a.id==="month"}).value-1,f=a.find(function(a){return a.id==="day"}).value,g=a.find(function(a){return a.id==="year"}).value;if(g==0||e==-1||f==0){c();return}var h=new Date(new Date().setHours(0,0,0,0));h.setFullYear(h.getFullYear()-5);g=new Date(g,e,f,0,0,0,0);g>h?d():c()})}function l(a){var c,d,e,f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:if(b("RegistrationController").inAgeFlow){g.next=2;break}return g.abrupt("return");case 2:c=1905;d=5;e=a.value;f=new Date().getFullYear()-c;if(!(e===""||isNaN(e)||e<d||e>f)){g.next=8;break}throw new Error();case 8:case"end":return g.stop()}},null,this)}function m(a){return new(b("Promise"))(function(c,d){function e(a){a=a.getPayload();a.valid===!0?c():d()}function f(a){c()}if(!b("RegistrationController").hasClickedSubmit){c();return}var g=b("XRegistrationValidateController").getURIBuilder().setEnum("type",b("RegistrationClientConfig").logging.types.CONTACTPOINT_INVALID).setString("contactpoint",a.value).getURI();new(b("AsyncRequest"))().setURI(g).setMethod("GET").setReadOnly(!0).setHandler(e).setErrorHandler(f).send()})}function n(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:if(b("RegistrationController").confirmContactpointShown){c.next=2;break}return c.abrupt("return");case 2:c.next=4;return b("regeneratorRuntime").awrap(m(a));case 4:case"end":return c.stop()}},null,this)}function o(a){a=a.toLocaleLowerCase().replace(/ /g,"");var b=a.indexOf("@");if(b!==-1&&a.includes("gmail.com",b+1)){b=a.split("@");a=b.length===2?b[0].replace(/\./g,"").concat("@").concat(b[1]):a}return a}function p(a,c){return new(b("Promise"))(function(d,e){var f=b("RegistrationController").getField(c);o(f.value)===o(a.value)?d():e()})}function q(a,c){return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:if(b("RegistrationController").confirmContactpointShown){d.next=2;break}return d.abrupt("return");case 2:d.next=4;return b("regeneratorRuntime").awrap(p(a,c));case 4:case"end":return d.stop()}},null,this)}function r(a){var c=b("RegistrationClientConfig").logging.types.IS_EMPTY,d=b("RegistrationClientConfig").messages.INCORRECT_NAME;a.addValidationStep(c,d,h)}function s(a,c){var d=b("RegistrationClientConfig").logging.types.IS_EMPTY,e=b("RegistrationClientConfig").messages.INCORRECT_CONTACTPOINT;c&&a.addHintFlyout(b("RegistrationClientConfig").hint_messages.CONTACTPOINT);a.addValidationStep(d,e,h);d=b("RegistrationClientConfig").logging.types.CONTACTPOINT_INVALID;e=b("RegistrationClientConfig").messages.INVALID_NUMBER_OR_EMAIL;a.addValidationStep(d,e,m)}function t(a){var c,d=(c=b("RegistrationClientConfig")).logging.types.IS_EMPTY,e=c.messages.INCORRECT_EMAIL_CONF;a.addValidationStep(d,e,i);d=c.logging.types.CONTACTPOINT_INVALID;e=c.messages.INVALID_EMAIL;a.addValidationStep(d,e,n);d=c.logging.types.CONTACTPOINT_MATCH;e=c.messages.EMAIL_RETYPE_DIFFERENT;c=c.fields.EMAIL;a.addValidationStep(d,e,q,null,c)}function u(a){var c=b("RegistrationClientConfig").logging.types.IS_EMPTY,d=b("RegistrationClientConfig").messages.PASSWORD_BLANK;a.addValidationStep(c,d,h)}function v(a){var c=b("RegistrationClientConfig").logging.types.IS_EMPTY,d=b("RegistrationClientConfig").messages.INCOMPLETE_BIRTHDAY;a.addValidationStep(c,d,j);b("qex")._("1084140")&&(c=b("RegistrationClientConfig").logging.types.SUPER_YOUNG_BIRTHDAY,d=b("RegistrationClientConfig").messages.SUPER_YOUNG_BIRTHDAY,a.addValidationStep(c,d,k))}function w(a){if(b("qex")._("1090883")){var c=b("RegistrationClientConfig").logging.types.BIRTHDAY_INVALID,d=b("RegistrationClientConfig").messages.INVALID_AGE;a.addValidationStep(c,d,l)}}function x(a){var c=b("RegistrationClientConfig").logging.types.IS_EMPTY,d=b("RegistrationClientConfig").messages.NO_GENDER;a.addValidationStep(c,d,j)}function y(a){var c=b("RegistrationClientConfig").logging.types.IS_EMPTY,d=b("RegistrationClientConfig").messages.NO_PRONOUN;a.addValidationStep(c,d,function(a){var c=document.getElementsByName("sex"),d=!1;c=Array.from(c);for(var e=0;e<c.length;e++){var f=c[e];f instanceof HTMLInputElement&&f.value=="-1"&&f.checked&&(d=!0)}return!d?new(b("Promise"))(function(a,b){a()}):j(a)})}function a(a,c,d,e,f,h){f=null;var i=b("DataStore").get(c,"type");switch(i){case b("RegistrationClientConfig").validators.types.TEXT:f=new(b("RegistrationFieldValidator"))(a,c,d,null,null,e);break;case b("RegistrationClientConfig").validators.types.SELECTORS:var j=b("DataStore").get(c,"name"),k=null;j===b("RegistrationClientConfig").fields.BIRTHDAY_WRAPPER?k=3:j===b("RegistrationClientConfig").fields.GENDER_WRAPPER?k=1:j==="preferred_pronoun"?k=1:k=g(!1,"Unexpected name %s for SELECTORS",j);f=new(b("RegistrationMultipleInputValidator"))(a,c,d,i,k);break;case b("RegistrationClientConfig").validators.types.RADIO:j=(h==null?void 0:h.showCustomGender)?3:2;f=new(b("RegistrationMultipleInputValidator"))(a,c,d,i,j);break;case b("RegistrationClientConfig").validators.types.PASSWORD:(h==null?void 0:h.showPasswordMeter)?f=new(b("PasswordMeterFieldValidator"))(a,c,d,i,null,e,h&&h.passwordMeterID?h.passwordMeterID:"",h==null?void 0:h.minPasswordMeterStrength,h==null?void 0:h.passwordMeterHidden):f=new(b("RegistrationFieldValidator"))(a,c,d,null,null,e);break;default:g(0,2839)}switch(f.getFieldName()){case b("RegistrationClientConfig").fields.FIRSTNAME:case b("RegistrationClientConfig").fields.LASTNAME:r(f);break;case b("RegistrationClientConfig").fields.EMAIL:s(f,h==null?void 0:h.showHintFlyout);break;case b("RegistrationClientConfig").fields.EMAIL_CONFIRMATION:t(f);break;case b("RegistrationClientConfig").fields.PASSWORD:u(f);break;case b("RegistrationClientConfig").fields.BIRTHDAY_WRAPPER:v(f);break;case b("RegistrationClientConfig").fields.BIRTHDAY_AGE:w(f);break;case b("RegistrationClientConfig").fields.GENDER_WRAPPER:x(f);break;case"preferred_pronoun":y(f);break;default:g(0,2840)}}e.exports={register:a}}),null);
__d("RecaptchaV2Constants",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({RESIZE_IFRAME:null,CAPTCHA_SOLVED:null,GET_ORIGIN:null});e.exports={RecaptchaV2IFrameMessageTypes:a}}),null);
__d("RecaptchaV2IFrameHandler",["RecaptchaV2Constants"],(function(a,b,c,d,e,f){"use strict";var g=b("RecaptchaV2Constants").RecaptchaV2IFrameMessageTypes,h=0,i={init:function(a,b,c){c===void 0&&(c=!1);a=document.getElementById(a);b=document.getElementById(b);if(a===null||!(b instanceof HTMLInputElement))return;i.initWithElement(a,b,c)},initWithElement:function(a,b,c){c===void 0&&(c=!1);window.addEventListener("message",d);function d(d){var h=d.origin.match(/\w+\.\w{2,3}$/);if(h===null||h[0]!=="fbsbx.com")return;h=f(d.data);if(h==null)return;var i={height:a.scrollHeight};switch(h.type){case g.RESIZE_IFRAME:i=h.size;break;case g.CAPTCHA_SOLVED:b.value=h.token;c&&b.form&&b.form.submit();break;case g.GET_ORIGIN:d.source.postMessage({},d.origin);break;default:return}e(i)}function e(b){a.style.height=b.height+h+"px"}function f(a){if(a==null||typeof a!=="object")return null;else if(a.type===g.RESIZE_IFRAME){var b=a.size;if(typeof b==="object"&&b!==null&&Object.prototype.hasOwnProperty.call(b,"height")&&typeof b.height==="number")return{type:g.RESIZE_IFRAME,size:{height:b.height}}}else if(a.type===g.CAPTCHA_SOLVED&&typeof a.token==="string")return{type:g.CAPTCHA_SOLVED,token:a.token};else if(a.type===g.GET_ORIGIN)return{type:g.GET_ORIGIN};return null}}};e.exports=i}),null);