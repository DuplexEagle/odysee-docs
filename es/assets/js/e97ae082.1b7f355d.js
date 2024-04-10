"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[5497],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>m});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?t.createElement(g,i(i({ref:a},d),{},{components:n})):t.createElement(g,i({ref:a},d))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9237:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,description:"\xbfC\xf3mo personalizar la carga de archivos en Odysee?",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"},keywords:["odysee","personalizar cargas","configuraci\xf3n de video","c\xf3mo usar una miniatura en odysee","usar etiquetas en odysee","c\xf3mo cargar una miniatura","c\xf3mo configuro etiquetas en odysee","c\xf3mo configuro un t\xedtulo en odysee"],tags:["Odysee","Contenido"]},i="Configuraci\xf3n y personalizaci\xf3n",s={unversionedId:"category-uploading/category-fileuploads/settings",id:"category-uploading/category-fileuploads/settings",title:"Configuraci\xf3n y personalizaci\xf3n",description:"\xbfC\xf3mo personalizar la carga de archivos en Odysee?",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/category-uploading/category-fileuploads/settings.mdx",sourceDirName:"category-uploading/category-fileuploads",slug:"/category-uploading/category-fileuploads/settings",permalink:"/es/category-uploading/category-fileuploads/settings",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/es/docusaurus-plugin-content-docs/current/category-uploading/category-fileuploads/settings.mdx",tags:[{label:"Odysee",permalink:"/es/tags/odysee"},{label:"Contenido",permalink:"/es/tags/contenido"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\xbfC\xf3mo personalizar la carga de archivos en Odysee?",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"},keywords:["odysee","personalizar cargas","configuraci\xf3n de video","c\xf3mo usar una miniatura en odysee","usar etiquetas en odysee","c\xf3mo cargar una miniatura","c\xf3mo configuro etiquetas en odysee","c\xf3mo configuro un t\xedtulo en odysee"],tags:["Odysee","Contenido"]},sidebar:"helphub",previous:{title:"Carga y selecci\xf3n de archivos",permalink:"/es/category-uploading/category-fileuploads/fileselection"},next:{title:"Codificaci\xf3n de v\xeddeos",permalink:"/es/category-uploading/category-fileuploads/encoding"}},l={},c=[{value:"T\xedtulo, URL y descripci\xf3n",id:"t\xedtulo-url-y-descripci\xf3n",level:2},{value:"Miniaturas",id:"miniaturas",level:2},{value:"Visibilidad",id:"visibilidad",level:2},{value:"Etiquetas",id:"etiquetas",level:2},{value:"Controles de etiquetas",id:"controles-de-etiquetas",level:2},{value:"Desactivar reacciones en videos y comentarios",id:"desactivar-reacciones-en-videos-y-comentarios",level:3},{value:"Opciones adicionales",id:"opciones-adicionales",level:2},{value:"Dep\xf3sito de Cr\xe9dito",id:"dep\xf3sito-de-cr\xe9dito",level:2},{value:"Selecci\xf3n del canal",id:"selecci\xf3n-del-canal",level:2}],d={toc:c};function u(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuraci\xf3n-y-personalizaci\xf3n"},"Configuraci\xf3n y personalizaci\xf3n"),(0,o.kt)("h2",{id:"t\xedtulo-url-y-descripci\xf3n"},"T\xedtulo, URL y descripci\xf3n"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/420f1bff2a6ee1cb16f74c64b8514724.webp",alt:null})),(0,o.kt)("p",null,"Despu\xe9s de seleccionar su archivo, el primer campo requerido es ",(0,o.kt)("strong",{parentName:"p"},"T\xedtulo"),". Recomendamos t\xedtulos que informen con precisi\xf3n a los usuarios sobre el contenido, pero que sean interesantes y efectivos para atraer a los usuarios a hacer clic."),(0,o.kt)("p",null,"Lo siguiente es la ",(0,o.kt)("strong",{parentName:"p"},"URL")," del archivo. Esto es aparte del t\xedtulo. El t\xedtulo es lo que se muestra en la carga en s\xed, esto es simplemente lo que aparece en la URL del video."),(0,o.kt)("p",null,"Por ejemplo, nuestro resumen de funciones de febrero en el canal de Odysee tiene la URL ",(0,o.kt)("em",{parentName:"p"},"resumen-de-funciones-en-odysee-febrero"),' que aparece en la URL, pero el t\xedtulo real de la publicaci\xf3n que se muestra a los usuarios es "A\xf1o nuevo, y nosotros tambi\xe9n: resumen de funciones de Odysee".'),(0,o.kt)("p",null,"Despu\xe9s de la URL, solicitamos una ",(0,o.kt)("strong",{parentName:"p"},"Descripci\xf3n"),". Las palabras clave de spam en la descripci\xf3n no tienen ning\xfan efecto en la b\xfasqueda, por lo que recomendamos simplemente usar este campo para explicar su video con la cantidad de palabras que sea necesaria."),(0,o.kt)("h2",{id:"miniaturas"},"Miniaturas"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/73515830730ea3df5bff6c19c183bb0d.web",alt:null})),(0,o.kt)("p",null,"Despu\xe9s de la descripci\xf3n, se le pedir\xe1 que agregue una ",(0,o.kt)("strong",{parentName:"p"},"Miniatura"),"."),(0,o.kt)("p",null,"Para miniaturas, recomendamos 1280x720 p\xedxeles. Puede seleccionar un archivo de su computadora o pegar un enlace de la imagen. Al cargar videos, puede seleccionar una imagen en miniatura de su video usando nuestra herramienta de carga de miniaturas."),(0,o.kt)("h2",{id:"visibilidad"},"Visibilidad"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/e5bcbde24b2d87621f2524551f73b0fc.webp",alt:null})),(0,o.kt)("p",null,"A continuaci\xf3n, puede configurar la visibilidad de su contenido."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"P\xfablico")," significa que cualquiera puede encontrar y ver tu carga."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Oculto")," significa que cualquier persona puede ver su carga si tiene el enlace."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Programado")," significa que su contenido est\xe1 actualmente oculto, pero se har\xe1 p\xfablico en la fecha y hora establecidas."),(0,o.kt)("h2",{id:"etiquetas"},"Etiquetas"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/3fa47647221192470f0bb3a330ca0b82.webp",alt:null})),(0,o.kt)("p",null,"A continuaci\xf3n, se le pedir\xe1 que agregue ",(0,o.kt)("strong",{parentName:"p"},"Etiquetas"),"."),(0,o.kt)("p",null,"Las etiquetas mejoran la visibilidad del contenido. Recomendamos pesta\xf1as m\xe1s simples relacionadas con el g\xe9nero de su contenido. Por ejemplo: Arte, Juegos, Comedia, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Si su carga contiene contenido pornogr\xe1fico (NSFW), debe etiquetarlo con "Mature".')),(0,o.kt)("p",null,"En este momento, cada video (y canal) solo puede tener hasta 5 etiquetas."),(0,o.kt)("h2",{id:"controles-de-etiquetas"},"Controles de etiquetas"),(0,o.kt)("h3",{id:"desactivar-reacciones-en-videos-y-comentarios"},"Desactivar reacciones en videos y comentarios"),(0,o.kt)("p",null,"Los creadores y propietarios de canales pueden desactivar las reacciones (fire y slime) desde el formulario de publicaci\xf3n en las opciones de ",(0,o.kt)("strong",{parentName:"p"},"Controles de etiquetas")," (Control Tags). Puede desactivar las reacciones para el ",(0,o.kt)("strong",{parentName:"p"},"contenido"),", los ",(0,o.kt)("strong",{parentName:"p"},"comentarios")," o la ",(0,o.kt)("strong",{parentName:"p"},"publicaci\xf3n en general"),"."),(0,o.kt)("p",null,"Esta funcionalidad es opcional y no est\xe1 habilitada de forma predeterminada en el contenido. Los propietarios de canales deben habilitar los controles de etiquetas desde el formulario de publicaci\xf3n o la edici\xf3n de contenido."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/ece84e53074ecd58297f8808b36d1612.webp",alt:null})),(0,o.kt)("h2",{id:"opciones-adicionales"},"Opciones adicionales"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/c2b056041c5b37d9e2a913a7b1b82c2b.webp",alt:null})),(0,o.kt)("p",null,"En esta pesta\xf1a, tiene algunas opciones."),(0,o.kt)("p",null,"El primero es ",(0,o.kt)("strong",{parentName:"p"},"Fecha de lanzamiento"),". No puede configurar videos para fechas futuras desde esta opci\xf3n, pero puede configurarlos para fechas pasadas o programar la publicaci\xf3n desde la secci\xf3n de visibilidad en el formulario."),(0,o.kt)("p",null,"Esto es \xfatil cuando se cargan videos m\xe1s antiguos. Puede configurarlos con la fecha correcta y se mostrar\xe1n en el orden cronol\xf3gico correcto en su canal."),(0,o.kt)("p",null,"La siguiente opci\xf3n es ",(0,o.kt)("strong",{parentName:"p"},"Idioma"),". Esto por defecto es el idioma seleccionado."),(0,o.kt)("p",null,"La tercera opci\xf3n es ",(0,o.kt)("strong",{parentName:"p"},"Licencia"),". Esto es para especificar la licencia de copyright."),(0,o.kt)("p",null,'El valor predeterminado es "Ninguno". Si no se selecciona ninguna licencia, el archivo tendr\xe1 derechos de autor de forma predeterminada. Otras licencias son:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Las licencias de ",(0,o.kt)("strong",{parentName:"li"},"dominio p\xfablico")," permiten la reutilizaci\xf3n sin restricciones"),(0,o.kt)("li",{parentName:"ul"},"Las licencias ",(0,o.kt)("strong",{parentName:"li"},"Creative Commons")," permiten la reutilizaci\xf3n con atribuci\xf3n al creador original"),(0,o.kt)("li",{parentName:"ul"},"Tambi\xe9n puede configurar la licencia simplemente como ",(0,o.kt)("strong",{parentName:"li"},"Con derechos de autor"))),(0,o.kt)("p",null,"El siguiente es ",(0,o.kt)("strong",{parentName:"p"},"Precio"),". Esta ser\xeda la cantidad que los espectadores tienen que pagar para ver el contenido."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/a2540fc80df1465b56562b8c5ab884c0.webp",alt:null})),(0,o.kt)("p",null,"Puede establecer esta cantidad en LBC o USD. En cualquier caso, los espectadores pagar\xedan en LBC. Si el precio se establece en LBC, esa ser\xeda la cantidad de LBC pagada. Si el precio se establece en USD, los espectadores pagar\xedan el equivalente en LBC."),(0,o.kt)("h2",{id:"dep\xf3sito-de-cr\xe9dito"},"Dep\xf3sito de Cr\xe9dito"),(0,o.kt)("p",null,"La \xfaltima configuraci\xf3n en Opciones adicionales es ",(0,o.kt)("strong",{parentName:"p"},"Dep\xf3sito"),"."),(0,o.kt)("p",null,"El valor predeterminado es 0,1 LBC. Si su archivo es el monto m\xe1s alto apostado de cualquier carga con la URL seleccionada, aparecer\xe1 primero al buscar esa URL."),(0,o.kt)("p",null,'Por ejemplo, si dos archivos de Odysee tienen la URL "gato", el archivo con la apuesta LBC m\xe1s alta aparecer\xe1 primero en los resultados de b\xfasqueda y tendr\xe1 un enlace desde odysee.com/cat.'),(0,o.kt)("p",null,"Todo esto se relaciona con el aspecto blockchain de Odysee. Tenemos una secci\xf3n detallada que analiza los entresijos de este sistema ",(0,o.kt)("a",{parentName:"p",href:"/es/category-blockchain/category-staking/naming"},"aqu\xed"),"."),(0,o.kt)("p",null,"Es importante tener en cuenta que una vez que deposita LBC, no desaparece para siempre. Todav\xeda estar\xe1 en su billetera y bajo su control, pero estar\xe1 vinculado al canal en el que est\xe1 depositando hasta que se reduzca el monto del dep\xf3sito o se elimine el canal. Para obtener m\xe1s informaci\xf3n al respecto, consulte nuestra secci\xf3n sobre la billetera y las transacciones ",(0,o.kt)("a",{parentName:"p",href:"/es/category-wallet/"},"aqu\xed"),"."),(0,o.kt)("h2",{id:"selecci\xf3n-del-canal"},"Selecci\xf3n del canal"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/f5c7413c4798f6faffb1602e239db1ec.webp",alt:null})),(0,o.kt)("p",null,"La \xfaltima opci\xf3n es tu ",(0,o.kt)("strong",{parentName:"p"},"Selecci\xf3n de canales"),". Si tiene varios canales, aqu\xed es donde seleccionar\xe1 a qu\xe9 canal ir\xe1 la carga."),(0,o.kt)("p",null,"Si todas las configuraciones parecen correctas, haga clic en ",(0,o.kt)("strong",{parentName:"p"},"Subir")," y ",(0,o.kt)("strong",{parentName:"p"},"Confirmar"),"."),(0,o.kt)("p",null,"Es posible que su archivo tarde unos minutos en terminar de cargarse y cargarse para confirmarse, pero este es el final del proceso de carga."),(0,o.kt)("admonition",{title:"Nota",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Si subiste un video o pieza de contenido y te has equivocado de canal, puedes editar la publicaci\xf3n y cambiar el video de canal desde la pesta\xf1a de selecci\xf3n de canal.")))}u.isMDXComponent=!0}}]);