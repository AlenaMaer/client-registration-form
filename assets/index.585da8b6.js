import{c as k,u as V,r as m,o as s,a as u,b as e,w as B,d as y,T as c,e as h,f as l,v as b,g as d,F as f,h as p,i as x,j as g,k as S,t as a,l as _,m as U}from"./vendor.516050a4.js";const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function D(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=D(n);fetch(n.href,i)}};C();var N=(v,t)=>{const D=v.__vccOpts||v;for(const[r,n]of t)D[r]=n;return D};const T=k.regex(/^7[0-9]{10}$/),q={setup(){return{v$:V()}},data(){return{step:1,msgRequired:"\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",formData:{lname:"",fname:"",patronymic:"",dateBirth:"",phone:"",gender:"",clientGroup:[],doctor:"",sms:"",postCode:"",country:"",region:"",city:"",street:"",houseNum:"",docType:"",docSeries:"",docNum:"",docIssued:"",issueDate:""}}},methods:{nextStep(){this.step++},prevStep(){this.step--},regClient(){this.step=4},async regClient(){!await this.v$.$validate()||(this.step=4)}},validations(){return{formData:{lname:{required:m},fname:{required:m},dateBirth:{required:m},phone:{required:k.withMessage("\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",m),phoneMask:k.withMessage("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 7 \u0438 \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u043E\u0439 11 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",T)},clientGroup:{required:m},city:{required:m},docType:{required:m},issueDate:{required:m}}}}},G={class:"container"},M={class:"form-block"},w=e("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430",-1),R={key:"1section"},I=e("label",{for:"lname"},"\u0424\u0430\u043C\u0438\u043B\u0438\u044F *",-1),L=e("label",{for:"fname"},"\u0418\u043C\u044F *",-1),F=e("label",{for:"patronymic"},"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",-1),O=e("label",{for:"dateBirth"},"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F *",-1),A=e("label",{for:"phone"},[_("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 *"),e("br"),_(),e("span",null," 11 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u043D\u0430\u0447\u0438\u043D\u0430\u044F \u0441 7")],-1),P=e("label",{for:"gender"},"\u041F\u043E\u043B",-1),z=e("label",{for:"male"},"\u041C\u0443\u0436\u0441\u043A\u043E\u0439",-1),E=e("br",null,null,-1),j=e("label",{for:"female"},"\u0416\u0435\u043D\u0441\u043A\u0438\u0439",-1),K=e("label",{for:"clientGroup"},[_("\u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 *"),e("br"),_(),e("span",null,"\u0414\u043B\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Ctrl")],-1),H=e("option",null,"VIP",-1),J=e("option",null,"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u044B\u0435",-1),Q=e("option",null,"\u041E\u041C\u0421",-1),W=[H,J,Q],X=e("label",{for:"doctor"},"\u041B\u0435\u0447\u0430\u0449\u0438\u0439 \u0432\u0440\u0430\u0447",-1),Y=e("option",{value:"ivanov"},"\u0418\u0432\u0430\u043D\u043E\u0432",-1),Z=e("option",{value:"zaharov"},"\u0417\u0430\u0445\u0430\u0440\u043E\u0432",-1),$=e("option",{value:"chernysheva"},"\u0427\u0435\u0440\u043D\u044B\u0448\u0435\u0432\u0430",-1),ee=[Y,Z,$],oe=e("label",{for:"sms"},"\u041D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u043C\u0441",-1),te=["disabled"],ne={key:"2section"},re=e("h2",null,"\u0410\u0434\u0440\u0435\u0441",-1),le=e("label",{for:"postCode"},"\u0418\u043D\u0434\u0435\u043A\u0441",-1),ie=e("label",{for:"country"},"\u0421\u0442\u0440\u0430\u043D\u0430",-1),se=e("label",{for:"region"},"\u041E\u0431\u043B\u0430\u0441\u0442\u044C",-1),ue=e("label",{for:"city"},"\u0413\u043E\u0440\u043E\u0434 *",-1),de=e("label",{for:"street"},"\u0423\u043B\u0438\u0446\u0430",-1),ae=e("label",{for:"houseNum"},"\u0414\u043E\u043C",-1),me=["disabled"],fe={key:"3section"},pe=e("h2",null,"\u041F\u0430\u0441\u043F\u043E\u0440\u0442",-1),ve=e("label",{for:"docType"},"\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 *",-1),De=e("option",{value:"passport"},"\u041F\u0430\u0441\u043F\u043E\u0440\u0442",-1),ye=e("option",{value:"birthSertificate"},"\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",-1),ce=e("option",{value:"driverLicence"},"\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",-1),he=[De,ye,ce],be=e("label",{for:"docSeries"},"\u0421\u0435\u0440\u0438\u044F",-1),_e=e("label",{for:"docNum"},"\u041D\u043E\u043C\u0435\u0440",-1),ge=e("label",{for:"docIssued"},"\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D",-1),ke=e("label",{for:"issueDate"},"\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438 *",-1),xe=["disabled"],Ve={key:"4section"};function Be(v,t,D,r,n,i){return s(),u("div",G,[e("div",M,[w,e("form",{onSubmit:t[34]||(t[34]=B(()=>{},["prevent"])),novalidate:""},[y(c,{name:"mode-fade",mode:"out-in"},{default:h(()=>[l(e("section",R,[e("div",null,[I,l(e("input",{onBlur:t[0]||(t[0]=(...o)=>r.v$.formData.lname.$touch&&r.v$.formData.lname.$touch(...o)),"onUpdate:modelValue":t[1]||(t[1]=o=>n.formData.lname=o),type:"text",id:"lname",name:"lname"},null,544),[[d,n.formData.lname]]),(s(!0),u(f,null,p(r.v$.formData.lname.$errors,o=>(s(),u("p",{key:o.$uid},a(n.msgRequired),1))),128))]),e("div",null,[L,l(e("input",{onBlur:t[2]||(t[2]=(...o)=>r.v$.formData.fname.$touch&&r.v$.formData.fname.$touch(...o)),"onUpdate:modelValue":t[3]||(t[3]=o=>n.formData.fname=o),type:"text",id:"fname",name:"fname"},null,544),[[d,n.formData.fname]]),(s(!0),u(f,null,p(r.v$.formData.fname.$errors,o=>(s(),u("p",{key:o.$uid},a(n.msgRequired),1))),128))]),e("div",null,[F,l(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>n.formData.patronymic=o),type:"text",id:"patronymic",name:"patronymic"},null,512),[[d,n.formData.patronymic]])]),e("div",null,[O,l(e("input",{onBlur:t[5]||(t[5]=(...o)=>r.v$.formData.dateBirth.$touch&&r.v$.formData.dateBirth.$touch(...o)),"onUpdate:modelValue":t[6]||(t[6]=o=>n.formData.dateBirth=o),type:"date",id:"dateBirth",name:"dateBirth"},null,544),[[d,n.formData.dateBirth]]),(s(!0),u(f,null,p(r.v$.formData.dateBirth.$errors,o=>(s(),u("p",{key:o.$uid},a(n.msgRequired),1))),128))]),e("div",null,[A,l(e("input",{onBlur:t[7]||(t[7]=(...o)=>r.v$.formData.phone.$touch&&r.v$.formData.phone.$touch(...o)),"onUpdate:modelValue":t[8]||(t[8]=o=>n.formData.phone=o),type:"tel",name:"tel",pattern:"^7[0-9]{10}$"},null,544),[[d,n.formData.phone]]),(s(!0),u(f,null,p(r.v$.formData.phone.$errors,o=>(s(),u("p",{key:o.$uid},a(o.$message),1))),128))]),e("div",null,[P,e("div",null,[l(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>n.formData.gender=o),type:"radio",id:"male",name:"gender",value:"male"},null,512),[[x,n.formData.gender]]),z,E,l(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>n.formData.gender=o),type:"radio",id:"female",name:"gender",value:"female"},null,512),[[x,n.formData.gender]]),j])]),e("div",null,[K,l(e("select",{onBlur:t[11]||(t[11]=(...o)=>r.v$.formData.clientGroup.$touch&&r.v$.formData.clientGroup.$touch(...o)),"onUpdate:modelValue":t[12]||(t[12]=o=>n.formData.clientGroup=o),name:"clientGroup",id:"clientGroup",multiple:"",size:"3"},W,544),[[g,n.formData.clientGroup]]),(s(!0),u(f,null,p(r.v$.formData.clientGroup.$errors,o=>(s(),u("p",{key:o.$uid},a(n.msgRequired),1))),128))]),e("div",null,[X,l(e("select",{"onUpdate:modelValue":t[13]||(t[13]=o=>n.formData.doctor=o),name:"doctor",id:"doctor"},ee,512),[[g,n.formData.doctor]])]),e("div",null,[l(e("input",{"onUpdate:modelValue":t[14]||(t[14]=o=>n.formData.sms=o),type:"checkbox",id:"sms",name:"sms"},null,512),[[S,n.formData.sms]]),oe]),e("div",null,[e("p",null,"\u0428\u0430\u0433 "+a(n.step)+" \u0438\u0437 3",1),e("button",{onClick:t[15]||(t[15]=(...o)=>i.nextStep&&i.nextStep(...o)),disabled:r.v$.formData.fname.$invalid||r.v$.formData.lname.$invalid||r.v$.formData.dateBirth.$invalid||r.v$.formData.phone.$invalid||r.v$.formData.clientGroup.$invalid},"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433",8,te)])],512),[[b,n.step===1]])]),_:1}),y(c,{name:"mode-fade",mode:"out-in"},{default:h(()=>[l(e("section",ne,[re,e("div",null,[le,l(e("input",{"onUpdate:modelValue":t[16]||(t[16]=o=>n.formData.postCode=o),type:"text",id:"postCode",name:"postCode"},null,512),[[d,n.formData.postCode]])]),e("div",null,[ie,l(e("input",{"onUpdate:modelValue":t[17]||(t[17]=o=>n.formData.country=o),type:"text",id:"country",name:"country"},null,512),[[d,n.formData.country]])]),e("div",null,[se,l(e("input",{"onUpdate:modelValue":t[18]||(t[18]=o=>n.formData.region=o),type:"text",id:"region",name:"region"},null,512),[[d,n.formData.region]])]),e("div",null,[ue,l(e("input",{onBlur:t[19]||(t[19]=(...o)=>r.v$.formData.city.$touch&&r.v$.formData.city.$touch(...o)),"onUpdate:modelValue":t[20]||(t[20]=o=>n.formData.city=o),type:"text",id:"city",name:"city"},null,544),[[d,n.formData.city]]),(s(!0),u(f,null,p(r.v$.formData.city.$errors,o=>(s(),u("p",{key:o.$uid},a(n.msgRequired),1))),128))]),e("div",null,[de,l(e("input",{"onUpdate:modelValue":t[21]||(t[21]=o=>n.formData.street=o),type:"text",id:"street",name:"street"},null,512),[[d,n.formData.street]])]),e("div",null,[ae,l(e("input",{"onUpdate:modelValue":t[22]||(t[22]=o=>n.formData.houseNum=o),type:"text",id:"houseNum",name:"houseNum"},null,512),[[d,n.formData.houseNum]])]),e("div",null,[e("p",null,"\u0428\u0430\u0433 "+a(n.step)+" \u0438\u0437 3",1),e("button",{onClick:t[23]||(t[23]=(...o)=>i.prevStep&&i.prevStep(...o))},"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0448\u0430\u0433"),e("button",{onClick:t[24]||(t[24]=(...o)=>i.nextStep&&i.nextStep(...o)),disabled:r.v$.formData.city.$invalid},"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433",8,me)])],512),[[b,n.step===2]])]),_:1}),y(c,{name:"mode-fade",mode:"out-in"},{default:h(()=>[l(e("section",fe,[pe,e("div",null,[ve,l(e("select",{onBlur:t[25]||(t[25]=(...o)=>r.v$.formData.docType.$touch&&r.v$.formData.docType.$touch(...o)),"onUpdate:modelValue":t[26]||(t[26]=o=>n.formData.docType=o),name:"docType",id:"docType"},he,544),[[g,n.formData.docType]]),(s(!0),u(f,null,p(r.v$.formData.docType.$errors,o=>(s(),u("p",{key:o.$uid},a(n.msgRequired),1))),128))]),e("div",null,[be,l(e("input",{"onUpdate:modelValue":t[27]||(t[27]=o=>n.formData.docSeries=o),id:"docSeries",name:"docSeries",type:"text"},null,512),[[d,n.formData.docSeries]])]),e("div",null,[_e,l(e("input",{"onUpdate:modelValue":t[28]||(t[28]=o=>n.formData.docNum=o),id:"docNum",name:"docNum",type:"text"},null,512),[[d,n.formData.docNum]])]),e("div",null,[ge,l(e("input",{"onUpdate:modelValue":t[29]||(t[29]=o=>n.formData.docIssued=o),id:"docIssued",name:"docIssued",type:"text"},null,512),[[d,n.formData.docIssued]])]),e("div",null,[ke,l(e("input",{onBlur:t[30]||(t[30]=(...o)=>r.v$.formData.issueDate.$touch&&r.v$.formData.issueDate.$touch(...o)),"onUpdate:modelValue":t[31]||(t[31]=o=>n.formData.issueDate=o),type:"date",id:"issueDate",name:"issueDate"},null,544),[[d,n.formData.issueDate]]),(s(!0),u(f,null,p(r.v$.formData.issueDate.$errors,o=>(s(),u("p",{key:o.$uid},a(n.msgRequired),1))),128))]),e("div",null,[e("p",null,"\u0428\u0430\u0433 "+a(n.step)+" \u0438\u0437 3",1),e("button",{onClick:t[32]||(t[32]=(...o)=>i.prevStep&&i.prevStep(...o))},"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0448\u0430\u0433"),e("button",{onClick:t[33]||(t[33]=(...o)=>i.regClient&&i.regClient(...o)),type:"submit",disabled:r.v$.formData.docType.$invalid||r.v$.formData.issueDate.$invalid},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430",8,xe)])],512),[[b,n.step===3]])]),_:1}),y(c,{name:"mode-fade",mode:"out-in"},{default:h(()=>[l(e("section",Ve,[e("h2",null,"\u041A\u043B\u0438\u0435\u043D\u0442 "+a(n.formData.lname)+" "+a(n.formData.fname)+" \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D",1)],512),[[b,n.step===4]])]),_:1})],32)])])}var Se=N(q,[["render",Be]]);U(Se).mount("#app");
