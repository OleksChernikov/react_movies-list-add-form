(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(7),n=i.n(a),c=(i(14),i(6)),r=i(2),s=(i(15),i(1)),l=(i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},d=i(8),b=i.n(d);var j=function(e){var t=e.erorimgUrl,i=e.erorimdbUrl,a=e.name,n=e.value,c=e.label,o=void 0===c?a:c,m=e.placeholder,d=void 0===m?"Enter ".concat(o):m,j=e.required,u=void 0!==j&&j,h=e.onChange,g=void 0===h?function(){}:h,O=Object(s.useState)((function(){return"".concat(a,"-").concat(Math.random().toFixed(16).slice(2))})),p=Object(r.a)(O,1)[0],v=Object(s.useState)(!1),f=Object(r.a)(v,2),w=f[0],x=f[1],M=w&&u&&(!n||""===n.trim())||!t&&"imgUrl"===a&&w&&u||!i&&"imdbUrl"===a&&w&&u;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:p,children:o}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:p,"data-cy":"movie-".concat(a),className:b()("input",{"is-danger":M}),placeholder:d,value:n,onChange:function(e){return g(e.target.value)},onBlur:function(){return x(!0)}})}),M&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(o," is required")})]})},u=function(e){var t=e.onAdd,i=Object(s.useState)(""),a=Object(r.a)(i,2),n=a[0],c=a[1],o=Object(s.useState)(""),m=Object(r.a)(o,2),d=m[0],b=m[1],u=Object(s.useState)(""),h=Object(r.a)(u,2),g=h[0],O=h[1],p=Object(s.useState)(""),v=Object(r.a)(p,2),f=v[0],w=v[1],x=Object(s.useState)(""),M=Object(r.a)(x,2),U=M[0],N=M[1],y=Object(s.useState)(0),I=Object(r.a)(y,1)[0],T=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,B=Object(s.useState)(!1),_=Object(r.a)(B,2),S=_[0],k=_[1],z=Object(s.useState)(!1),A=Object(r.a)(z,2),D=A[0],C=A[1],V=""===n.trim()||!g||!f||!U||!S||!D,Y=function(e,t){T.test(e)&&"imgUrl"===t&&k(!0),T.test(e)&&"imdbUrl"===t&&C(!0)},F=function(e){(e.preventDefault(),V&&S&&D)||(t({title:n,description:d,imgUrl:g,imdbUrl:f,imdbId:U}),c(""),b(""),O(""),w(""),N(""))};return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:F,children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(j,{erorimgUrl:S,erorimdbUrl:D,name:"title",label:"Title",value:n,onChange:function(e){return c(e)},required:!0}),Object(l.jsx)(j,{erorimgUrl:S,erorimdbUrl:D,name:"description",label:"Description",value:d,onChange:function(e){return b(e)}}),Object(l.jsx)(j,{erorimgUrl:S,erorimdbUrl:D,name:"imgUrl",label:"Image URL",value:g,onChange:function(e){O(e),Y(e,"imgUrl")},required:!0}),Object(l.jsx)(j,{erorimgUrl:S,erorimdbUrl:D,name:"imdbUrl",label:"Imdb URL",value:f,onChange:function(e){w(e),Y(e,"imdbUrl")},required:!0}),Object(l.jsx)(j,{erorimgUrl:S,erorimdbUrl:D,name:"imdbId",label:"Imdb ID",value:U,onChange:function(e){return N(e)},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:V,onClick:function(){return F},children:"Add"})})})]},I)},h=i(9),g=function(){var e=Object(s.useState)(Object(c.a)(h)),t=Object(r.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(m,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(u,{onAdd:function(e){a([].concat(Object(c.a)(i),[e]))}})})]})};n.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.ba21c537.chunk.js.map