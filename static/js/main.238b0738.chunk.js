(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,s,t){},39:function(e,s,t){},40:function(e,s,t){},41:function(e,s,t){},46:function(e,s,t){},47:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){},57:function(e,s,t){},58:function(e,s,t){},59:function(e,s,t){},60:function(e,s,t){"use strict";t.r(s);var i=t(1),c=t(2),a=t.n(c),r=t(16),n=t.n(r),o=(t(38),t(5)),l=t(3),d=(t(39),t(26)),j=t(10),h=t(11),m=t(0),p=(t(40),["btn--primary","btn--outline"]),b=["btn--medium","btn--large","btn--mobile","btn--wide"],g=["primary","blue","red","green"],u=function(e){var s=e.children,t=e.type,c=e.onClick,a=e.buttonStyle,r=e.buttonSize,n=(e.buttonColor,p.includes(a)?a:p[0]),o=b.includes(r)?a:b[0],l=g.includes(r)?a:null;return Object(i.jsx)("button",{className:"btn ".concat(n," ").concat(o," ").concat(l),onClick:c,type:t,children:s})};t(41);var x=function(){var e=Object(c.useState)(!1),s=Object(d.a)(e,2),t=s[0],a=s[1],r=Object(c.useState)(!0),n=Object(d.a)(r,2),l=(n[0],n[1]),j=function(){return a(!1)};return window.addEventListener("resize",(function(){window.innerWidth<=960?l(!1):l(!0)})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m.b.Provider,{value:{color:"#fff"},children:Object(i.jsx)("div",{className:"nav",children:Object(i.jsxs)("div",{className:"nav-container container",children:[Object(i.jsx)(o.b,{to:"/",className:"nav-logo",onClick:j,children:"Tam Nguyen"}),Object(i.jsx)("div",{className:"menu-icon",onClick:function(){return a(!t)},children:t?Object(i.jsx)(h.d,{}):Object(i.jsx)(h.a,{})}),Object(i.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:"/",className:"nav-links",onClick:j,children:"work"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:"/about",className:"nav-links",onClick:j,children:"about"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:"/resume",className:"nav-links",onClick:j,children:"resume"})})]})]})})})})},v=t(17),O=t.p+"static/media/arrow-icon.395127d8.svg";t(46);var f=function(e){var s=e.topLine,t=e.lightText,c=e.lightTextDesc,a=e.headline,r=e.description,n=e.img,l=e.alt,d=e.imgStart,h=e.completed,m=e.link;return Object(i.jsx)(o.b,{to:m,className:"project-links",children:Object(i.jsx)(j.a.div,{className:h?"home__hero-section":"home__hero-section incomplete-section",variants:N,initial:"rest",whileHover:h?"hover":"hoverIncomplete",transition:{type:"tween"},children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===d?"row-reverse":"row"},children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(i.jsx)("div",{className:"top-line",children:s}),Object(i.jsx)("h1",{className:t?"heading":"heading dark",children:a}),Object(i.jsx)("p",{className:c?"home__hero-subtitle":"home__hero-subtitle dark",children:r})]})}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("div",{className:"home__hero-img-wrapper",children:Object(i.jsx)("img",{src:n,alt:l,className:"home__hero-img"})}),Object(i.jsx)(j.a.div,{className:"home__hero-arrow-wrapper",variants:y,children:Object(i.jsx)("img",{src:O})})]})]})})})})},N={hover:{scale:1.025},hoverIncomplete:{opacity:.5}},y={rest:{opacity:0,ease:"easeOut",duration:.2,type:"tween"},hover:{opacity:1,transition:{duration:.4,type:"tween",ease:"easeIn"}}},w=t.p+"static/media/forager-home-small.2f05f534.svg",k=t.p+"static/media/kst-screens.bfbfff11.svg",I=t.p+"static/media/svg-2.098d73be.svg",T={lightBg:!0,lightText:!1,lightTextDesc:!1,completed:!0,link:"/forager",topLine:"CASE STUDY",headline:"Forager: A COVID Grocery Shopper",description:"Prioritizing the safety and comfort of grocery shoppers in a routine but essential activity.",imgStart:"",img:w,alt:"Forager App",teamMembers:["Tam Nguyen","Onyekachi Nwabueze","Lia Slaton","Eric Li"],roles:["Lead UX designer","UX researcher"],timeline:"November-December 2020",tools:["Figma","Miro"],keywords:["User Research","Responsive Design","Iterative Prototyping"],tagline:"Prioritizing the safety and comfort of grocery shoppers in a routine but essential activity",introduction:"Forager puts users first as they shop for groceries, optimizing their grocery trip while limiting their risk and exposure to COVID-19. Reimagining a universal activity to address a rapidly changing world felt like a necessary and exciting challenge, and so I dived into this project so build a better, safer experience.",problem:"Shoppers are feeling rushed and stressed during grocery shopping, juggling their search for items with maintaining their personal and community safety.",solution:"Unify the grocery experience with an integrated list editor and novel in-store navigation that prioritizes speed and efficiency with value for both the customer and the grocery store."},_={lightBg:!0,lightText:!1,lightTextDesc:!1,completed:!1,link:"/",topLine:"UNDER CONSTRUCTION",headline:"KST Passport",description:"Promoting and showcasing community partnerships with local performance art.",imgStart:"",img:k,alt:"KST Passport App",teamMembers:["Tam Nguyen","Reese McArdle"],roles:["Led user research, project definition, and ideation","Designed the UI and interactive prototypes"],timeline:"October-November 2020",tools:["Figma, Invision"],keywords:["Produce Design","Visual Design","Rapid Prototyping"],tagline:"Adapting to a remote, online world with interactive demonstration tools for physical products.",introduction:"Vitro View enables and enriches presentation and demonstration of physical products that would otherwise require in-person contact. I found the challenge of building rewarding, traditionally in-person customer experiences in a remote context intriguing, and so I took on Vitro\u2019s design competition.",problem:"COVID-19 has changed the way in which we connect and interact with each other. Vitro has had to end all in-person product demonstrations, essential parts of its business in offering stylized glass products for luxury cosmetics corporations.",solution:"Digitize the customer experience of inspecting and appraising luxury products. Vitro View is a desktop, website application that enables and enriches presentation and demonstration of physical products that would otherwise require in-person contact. Through the interactive website, clients can pan and rotate products 360 degrees at high fidelity, as well as toggle a variety of lighting options, to simulate the attention to detail and precision necessary for luxury cosmetic corporations."},C={lightBg:!0,lightText:!1,lightTextDesc:!1,completed:!1,link:"/",topLine:"UNDER CONSTRUCTION",headline:"Vitro View",description:"Adapting to a remote, online world with interactive demonstration tools for physical products.",imgStart:"",img:I,alt:"Desktop Monitor",teamMembers:["Tam Nguyen","Reese McArdle"],roles:["Led user research, project definition, and ideation","Designed the UI and interactive prototypes"],timeline:"October-November 2020",tools:["Figma, Invision"],keywords:["Produce Design","Visual Design","Rapid Prototyping"],tagline:"Adapting to a remote, online world with interactive demonstration tools for physical products.",introduction:"Vitro View enables and enriches presentation and demonstration of physical products that would otherwise require in-person contact. I found the challenge of building rewarding, traditionally in-person customer experiences in a remote context intriguing, and so I took on Vitro\u2019s design competition.",problem:"COVID-19 has changed the way in which we connect and interact with each other. Vitro has had to end all in-person product demonstrations, essential parts of its business in offering stylized glass products for luxury cosmetics corporations.",solution:"Digitize the customer experience of inspecting and appraising luxury products. Vitro View is a desktop, website application that enables and enriches presentation and demonstration of physical products that would otherwise require in-person contact. Through the interactive website, clients can pan and rotate products 360 degrees at high fidelity, as well as toggle a variety of lighting options, to simulate the attention to detail and precision necessary for luxury cosmetic corporations."};t(47);var D=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"home",children:[Object(i.jsxs)("div",{className:"intro",children:[Object(i.jsx)("div",{className:"greeting",children:"hello!"}),Object(i.jsxs)("p",{children:["I\u2019m Tam, a ",Object(i.jsx)("span",{className:"highlight",children:"Product Designer."})," I find my passion in building nuanced and user-focused experiences. Currently earning my ",Object(i.jsx)("span",{className:"highlight",children:"Master of Human-Computer Interaction"})," @ ",Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:"highlight",children:"Carnegie Mellon University."})]}),"Come say hi!"]}),Object(i.jsxs)("div",{className:"projects-container",children:[Object(i.jsx)(f,Object(v.a)({},T)),Object(i.jsx)(f,Object(v.a)({},_)),Object(i.jsx)(f,Object(v.a)({},C))]})]})})},S=(t(48),t.p+"static/media/meCasual.68a50749.JPEG");var L=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"about",children:Object(i.jsxs)("div",{className:"about-row",children:[Object(i.jsx)("div",{className:"about-col",children:Object(i.jsx)("div",{className:"about__img-wrapper",children:Object(i.jsx)("img",{src:S})})}),Object(i.jsx)("div",{classname:"about-col",children:Object(i.jsxs)("div",{className:"about__text-wrapper",children:[Object(i.jsx)("div",{className:"about__top-line",children:"hey, thanks for dropping in!"}),Object(i.jsxs)("p",{className:"biography",children:["My name is Tam, and I\u2019m a Product Designer focusing on people in design. Currently I\u2019m completing my Master\u2019s in Human-Computer Interaction at Carnegie Mellon University.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"I have an interdisciplinary background in software development and the digital humanities, which has informed and enriched the way I approach design. By viewing technology as a medium through which to better connect with people, empathy becomes so much more possible.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"In my freetime I enjoy creating illustrations, and I\u2019m perfecting my ponzu beef bowl recipe."]})]})})]})})})},V=(t(49),t.p+"static/media/Tam_Nguyen-Dec2020_Resume.389bdbb3.png");var F=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"resume",children:Object(i.jsx)("div",{className:"resume__img-container",children:Object(i.jsx)("img",{src:V})})})})},M=t(13),P=(t(57),t.p+"static/media/forager-home-in-store.afded610.svg"),U=t.p+"static/media/forager-list.b70729a8.svg",E=t.p+"static/media/forager-map.722b4091.svg",R=t.p+"static/media/forager-affinity.9e2e3e9c.svg",z=t.p+"static/media/forager-cjm.1caca29e.svg",A=t.p+"static/media/forager-cjm-refined.59bcf14b.svg",B=t.p+"static/media/cowboy-hat.a4ae1262.svg",W=t.p+"static/media/calendar.98b9ed38.svg",q=t.p+"static/media/team.762ba5ce.svg",X=t.p+"static/media/tools.31015a0c.svg",H=t.p+"static/media/chat-icon.50d0f20e.svg";t.p;var J=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"forager",children:[Object(i.jsxs)("div",{className:"project-header",children:[Object(i.jsxs)("div",{className:"project-row project-nav",children:[Object(i.jsx)("div",{className:"project-nav-item",children:Object(i.jsx)(M.Link,{to:"forager-problem",spy:!0,smooth:!0,offset:-75,children:"PROBLEM"})}),Object(i.jsx)("div",{className:"project-nav-item",children:Object(i.jsx)(M.Link,{to:"forager-solution",spy:!0,smooth:!0,offset:-75,children:"SOLUTION"})}),Object(i.jsx)("div",{className:"project-nav-item",children:Object(i.jsx)(M.Link,{to:"forager-value",spy:!0,smooth:!0,offset:-75,children:"VALUE"})}),Object(i.jsx)("div",{className:"project-nav-item",children:Object(i.jsx)(M.Link,{to:"forager-process",spy:!0,smooth:!0,offset:-75,children:"PROCESS"})})]}),Object(i.jsxs)("div",{className:"project-row header-title",children:[Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("div",{className:"header-title-txt",children:"Forager"}),Object(i.jsx)("div",{className:"header-title-block"}),Object(i.jsx)("div",{className:"header-body-txt",children:"Forager puts users first as they shop for groceries, optimizing their grocery trip while limiting their risk and exposure to COVID-19. Reimagining a universal activity to address a rapidly changing world felt like a necessary and exciting challenge, and so I dived into this project so build a better, safer experience."})]}),Object(i.jsx)("div",{className:"project-col",children:Object(i.jsx)("div",{className:"header-title-img-container",children:Object(i.jsx)("img",{src:w})})})]})]}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsx)("div",{className:"in-store-img-container",children:Object(i.jsx)("img",{src:P})})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsxs)("div",{className:"project-specs",children:[Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("img",{src:B}),Object(i.jsx)("div",{className:"spec-title",children:"MY ROLES"}),Object(i.jsxs)("div",{className:"spec",children:["Lead UX designer",Object(i.jsx)("br",{}),"UX researcher"]})]}),Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("img",{src:X}),Object(i.jsx)("div",{className:"spec-title",children:"MY TOOLS"}),Object(i.jsxs)("div",{className:"spec",children:["Figma",Object(i.jsx)("br",{}),"Miro"]})]}),Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("img",{src:q}),Object(i.jsx)("div",{className:"spec-title",children:"TEAM"}),Object(i.jsxs)("div",{className:"spec",children:["Tam Nguyen",Object(i.jsx)("br",{}),"Onyekachi Nwabueze",Object(i.jsx)("br",{}),"Lia Slaton",Object(i.jsx)("br",{}),"Eric Li"]})]}),Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("img",{src:W}),Object(i.jsx)("div",{className:"spec-title",children:"TIMELINE"}),Object(i.jsx)("div",{className:"spec",children:"Nov - Dec 2020"})]})]})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsx)("div",{className:"forager-problem",children:Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("div",{className:"problem-title-txt",children:"PROBLEM"}),Object(i.jsx)("div",{className:"problem-title-block"}),Object(i.jsx)("div",{className:"problem-bold-txt",children:"Today\u2019s grocery shoppers feel rushed and stressed as they attempt to navigate through crowded stores to find their items, while maintaining COVID safety measures."}),Object(i.jsx)("div",{className:"problem-txt",children:"The regular grocery trip has turned into a rushed seach for items in the face of the COVID-19 pandemic, as shoppers try to minimize their contact while maximizing their efficiency. Customers are spending too much time indoors, in close quarters with others, wandering aisles as they seek items on their grocery list."})]})})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsx)("div",{className:"forager-solution",children:Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("div",{className:"solution-title-txt",children:"SOLUTION"}),Object(i.jsx)("div",{className:"solution-title-block"}),Object(i.jsx)("div",{className:"solution-bold-txt",children:"Forager builds an expedited route through stores with step-by-step navigation that prioritizes customer safety."}),Object(i.jsx)("div",{className:"solution-txt",children:"Through research, my team discovered that key motivators for grocery shoppers are time and efficiency. As the risk of exposure to COVID grows with longer grocery trips, meaning greater time spent near other people, shoppers have made getting in and out their priority. Forager eases this process by generating and walking users through the most time-efficient path through the store, accounting for every item they need."})]})})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsxs)("div",{className:"forager-imgs",children:[Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("div",{className:"list-img-container",children:Object(i.jsx)("img",{src:U})}),Object(i.jsx)("div",{className:"img-caption",children:"An in-app grocery list editor lets users aggregate their items"})]}),Object(i.jsxs)("div",{className:"project-col img-col",children:[Object(i.jsx)("div",{className:"map-img-container",children:Object(i.jsx)("img",{src:E})}),Object(i.jsx)("div",{className:"img-caption",children:"Step-by-step navigation directs users to their desired items"})]})]})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsx)("div",{className:"forager-value",children:Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("div",{className:"value-title-txt",children:"VALUE"}),Object(i.jsx)("div",{className:"value-title-block"}),Object(i.jsx)("div",{className:"value-bold-txt",children:"For businesses, Forager delivers a wealth of value."}),Object(i.jsxs)("div",{className:"value-body",children:[Object(i.jsx)("div",{className:"value-large-txt",children:"Offer insights into supply, stock, and demand"}),Object(i.jsx)("div",{className:"value-txt",children:"With Forager\u2019s integrated grocery list editor, as shoppers build their lists, partner businesses can address supply and stock issues by seeing what items have the most demand."}),Object(i.jsx)("div",{className:"value-large-txt",children:"Build business' reputation for safety"}),Object(i.jsx)("div",{className:"value-txt",children:"Forager protects customers, and employees. Customers are less likely to require assistance in finding items, reducing contacts, so workforces are protected, all while building partner businesses\u2019 reputation as the safest place to shop."}),Object(i.jsx)("div",{className:"value-large-txt",children:"Leverage existing resources"}),Object(i.jsx)("div",{className:"value-txt",children:"This app is low cost to all sizes of groceries, as it doesn\u2019t require any retrofitting of stores or expensive sensors. All Forager needs is a mobile phone and the stores\u2019 maps of items and inventory."})]})]})})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsxs)("div",{className:"forager-process",children:[Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("div",{className:"process-title-txt",children:"PROCESS"}),Object(i.jsx)("div",{className:"process-title-block"}),Object(i.jsx)("div",{className:"process-bold-txt",children:"From research studying the problem space to a refined and interactive high-fidelity prototype."}),Object(i.jsx)("div",{className:"process-txt",children:"To build a better understanding of our problem space, my team conducted pop-up interviews with our participants via Zoom, asking them to guide us through their workflow as they shopped for groceries. We wanted to hear about real thoughts, emotions, and experiences, from real people."})]}),Object(i.jsx)("div",{className:"project-col",children:Object(i.jsxs)("div",{className:"spec-methods",children:[Object(i.jsx)("img",{src:H}),Object(i.jsx)("div",{className:"spec-methods-title",children:"METHODS"}),Object(i.jsx)("div",{children:"Pop-up Research"}),Object(i.jsx)("div",{children:"User Interviews"}),Object(i.jsx)("div",{children:"Customer Journey Maps"}),Object(i.jsx)("div",{children:"Affinity Diagram"}),Object(i.jsx)("div",{children:"Wireframes"})]})})]})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsxs)("div",{className:"forager-imgs",children:[Object(i.jsx)("div",{className:"project-col",children:Object(i.jsx)("div",{className:"affinity-img-container",children:Object(i.jsx)("img",{src:R})})}),Object(i.jsx)("div",{className:"project-col",children:Object(i.jsx)("div",{className:"img-caption-style-2",children:"These experiences were stratified into clear stages as we made a customer journey map, to find critical points where design might improve shoppers lives."})}),Object(i.jsx)("div",{className:"project-col",children:Object(i.jsx)("div",{className:"cjm-img-container",children:Object(i.jsx)("img",{src:z})})}),Object(i.jsx)("div",{className:"project-col",children:Object(i.jsx)("div",{className:"img-caption-style-2",children:"We translated these interviews into an affinity diagram, seeking to uncover patterns of universal stresses and motivators."})})]})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsx)("div",{className:"forager-process",children:Object(i.jsxs)("div",{className:"project-col",children:[Object(i.jsx)("div",{className:"process-bold-txt",children:"We asked ourselves where design would improve the lives of shoppers, and used that to refine our focus."}),Object(i.jsx)("div",{className:"process-txt",children:"Once we understood the broad strokes and fine details of the grocery shopper experience, we iterated on our customer journey map. We aimed for a more concise representation that exposed the most stressful and meaningful touchpoints."})]})})}),Object(i.jsx)("div",{className:"project-row",children:Object(i.jsxs)("div",{className:"forager-imgs",children:[Object(i.jsx)("div",{className:"project-col",children:Object(i.jsx)("div",{className:"img-caption-style-2",children:"With our refined customer journey map, we noticed that Phase 2, shopping, produced shoppers\u2019 biggest concerns: finding their items and personal safety."})}),Object(i.jsx)("div",{className:"project-col",children:Object(i.jsx)("div",{className:"cjm-refined-img-container",children:Object(i.jsx)("img",{src:A})})})]})})]})})},Y=(t(58),t.p+"static/media/vitroView.22e9ae44.png");var G=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"vitro",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"vitro__top-line",children:"Vitro View"}),Object(i.jsx)("div",{className:"vitro__intro",children:C.introduction})]}),Object(i.jsx)("div",{className:"vitro__img-container",children:Object(i.jsx)("img",{src:Y,className:"vitro__img"})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsxs)("div",{className:"vitro__spec-wrapper",children:[Object(i.jsx)("div",{className:"team-header",children:"Team Members"}),Object(i.jsxs)("p",{className:"team-names",children:[C.teamMembers[0],Object(i.jsx)("br",{}),C.teamMembers[1]]}),Object(i.jsx)("div",{className:"role-header",children:"My Roles"}),Object(i.jsxs)("p",{classname:"roles",children:[C.roles[0],Object(i.jsx)("br",{}),C.roles[1]]}),Object(i.jsx)("div",{className:"timeline-header",children:"Timeline"}),Object(i.jsx)("p",{classname:"timeline",children:C.timeline}),Object(i.jsx)("div",{className:"tools",children:"Tools"}),Object(i.jsxs)("p",{className:"tools",children:[C.tools[0],Object(i.jsx)("br",{}),C.tools[1]]})]})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("div",{className:"vitro__description-wrapper",children:C.introduction})})]})]})})};t(59);var K=function(){return Object(i.jsxs)("div",{className:"footer-container",children:[Object(i.jsxs)("section",{className:"footer-subscription",children:[Object(i.jsx)("p",{className:"footer-subscription-heading",children:"Send me a message!"}),Object(i.jsx)("p",{className:"footer-subscription-text",children:"Currently open to UX / Product Design positions."}),Object(i.jsx)("div",{className:"input-areas",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(i.jsx)(u,{buttonStyle:"btn--outline",children:"Send"})]})})]}),Object(i.jsx)("section",{className:"social-media",children:Object(i.jsxs)("div",{className:"social-media-wrap",children:[Object(i.jsx)("small",{className:"website-rights",children:"Tam Nguyen \xa9 2020"}),Object(i.jsxs)("div",{className:"social-icons",children:[Object(i.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram",children:Object(i.jsx)(h.b,{})}),Object(i.jsx)(o.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter",children:Object(i.jsx)(h.e,{})}),Object(i.jsx)(o.b,{className:"social-icon-link",to:"https://www.linkedin.com/in/tamkn/",target:"_blank","aria-label":"LinkedIn",children:Object(i.jsx)(h.c,{})})]})]})})]})};var Z=function(){return Object(i.jsxs)(o.a,{children:[Object(i.jsx)(x,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",component:D}),Object(i.jsx)(l.a,{path:"/about",component:L}),Object(i.jsx)(l.a,{path:"/resume",component:F}),Object(i.jsx)(l.a,{path:"/forager",component:J}),Object(i.jsx)(l.a,{path:"/vitro",component:G})]}),Object(i.jsx)(K,{})]})},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(s){var t=s.getCLS,i=s.getFID,c=s.getFCP,a=s.getLCP,r=s.getTTFB;t(e),i(e),c(e),a(e),r(e)}))};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(Z,{})}),document.getElementById("root")),Q()}},[[60,1,2]]]);
//# sourceMappingURL=main.238b0738.chunk.js.map