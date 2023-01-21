(()=>{"use strict";var e,t={serverUrl:"https://nomoreparties.co/v1/plus-cohort-17",headers:{authorization:"f024cd52-7e5f-4d9c-952d-ed65a4f031f6","Content-Type":"application/json"}};function n(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat((e.status,e.ok)))}var r,o=document.querySelector(".body"),l=document.querySelector(".page"),a=null==l?void 0:l.querySelector(".elements"),c=null==l?void 0:l.querySelector(".profile"),u=null==l?void 0:l.querySelector(".profile__avatar"),i=null==l?void 0:l.querySelector("#buttonEditProfile"),s=null==l?void 0:l.querySelector(".profile__name"),d=null==l?void 0:l.querySelector(".profile__person"),v=null==l?void 0:l.querySelector("#button-edit"),f=null==l?void 0:l.querySelector("#button-card"),p=null==l?void 0:l.querySelector("#popup-profile"),m=null==l?void 0:l.querySelector("#profile-form"),h=null==l?void 0:l.querySelector("#profile-name"),y=null==l?void 0:l.querySelector("#profile-person"),_=document.forms.newCardInfo,S=null==l?void 0:l.querySelector("#popup-card"),b=null==l?void 0:l.querySelector("#card-form"),q=null==l?void 0:l.querySelector("#card-name"),C=null==l?void 0:l.querySelector("#img-url"),g=null==l?void 0:l.querySelector("#buttonCreateCard"),E=null==l?void 0:l.querySelector("#popup-image"),L=null==E?void 0:E.querySelector(".popup__image"),k=null==E?void 0:E.querySelector(".popup__image-name"),x=null==l?void 0:l.querySelector("#buttonAddAvatar"),A=null==l?void 0:l.querySelector("#avatar-url"),w=null==l?void 0:l.querySelector("#popup-avatar"),U=null==l?void 0:l.querySelector(".profile__button-edit-avatar"),T=null==l?void 0:l.querySelector("#avatar-form"),j=null==l?void 0:l.querySelectorAll(".popup__button-close"),O=null==l||null===(e=l.querySelector(".card-template"))||void 0===e?void 0:e.content;function P(e){"Escape"===e.key&&I(l.querySelector(".popup_opened"))}function B(e){e.target.classList.contains("popup")&&I(l.querySelector(".popup_opened"))}function D(e){e.classList.add("popup_opened"),o.addEventListener("mousedown",B),o.addEventListener("keydown",P)}function I(e){e.classList.remove("popup_opened"),o.removeEventListener("mousedown",B),o.removeEventListener("keydown",P)}function M(e,r){var o=O.cloneNode(!0),l=o.querySelector(".element__img"),a=o.querySelector(".element__name"),c=o.querySelector(".element__like-count");l.src=e.link,l.alt=e.name,a.textContent=e.name,c.textContent=e.likes.length;var u=o.querySelector(".element__button-heart");function i(){u.classList.toggle("element__button-heart_active")}0!==e.likes.length?e.likes.forEach((function(e){e._id.includes(r._id)?u.classList.add("element__button-heart_active"):u.classList.remove("element__button-heart_active")})):u.classList.remove("element__button-heart_active"),u.addEventListener("click",(function(r){var o;r.target.classList.contains("element__button-heart_active")?(o=e._id,fetch("".concat(t.serverUrl,"/cards/likes/").concat(o),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))).then((function(e){c.textContent=e.likes.length,i()})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(t.serverUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return n(e)}))}(e._id).then((function(e){c.textContent=e.likes.length,i()})).catch((function(e){console.log(e)}))}));var s=o.querySelector(".element__button-trash"),d=s.closest(".element");return e.owner._id===r._id&&s.classList.add("element__button-trash_visible"),s.addEventListener("click",(function(){var r;(r=e._id,fetch("".concat(t.serverUrl,"/cards/").concat(r),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))).then((function(){d.remove()})).catch((function(e){console.log(e)}))})),l.addEventListener("click",(function(e){L.src=e.target.src,L.alt=e.target.alt,k.textContent=e.target.alt,D(E)})),o}function N(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([fetch("".concat(t.serverUrl,"/users/me"),{headers:t.headers}).then((function(e){return n(e)})),fetch("".concat(t.serverUrl,"/cards"),{headers:t.headers}).then((function(e){return n(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l,a,c=[],u=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){i=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(i)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],l=r[1];c.id=o._id,s.textContent=o.name,d.textContent=o.about,u.src=o.avatar,l.forEach((function(e){a.append(M(e,o))}))})).catch((function(e){console.log(e)})),m.addEventListener("submit",(function(e){var r,o;e.preventDefault(),i.textContent="Сохранение...",s.textContent=h.value,d.textContent=y.value,(r=h.value,o=y.value,fetch("".concat(t.serverUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return n(e)}))).then((function(e){s.textContent=e.name,d.textContent=e.about,I(p)})).catch((function(e){console.log(e)})).finally((function(){i.textContent="Сохранить"}))})),b.addEventListener("submit",(function(e){var r,o;e.preventDefault(),g.textContent="Создание...",(r=q.value,o=C.value,fetch("".concat(t.serverUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:r,link:o})}).then((function(e){return n(e)}))).then((function(e){a.prepend(M(e,e.owner)),I(S),_.reset()})).catch((function(e){console.log(e)})).finally((function(){g.textContent="Создать"}))})),T.addEventListener("submit",(function(e){var r;e.preventDefault(),x.textContent="Сохранение...",(r=A.value,fetch("".concat(t.serverUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:r})}).then((function(e){return n(e)}))).then((function(e){u.src=e.avatar,I(w)})).catch((function(e){console.log(e)})).finally((function(){x.textContent="Сохранить"}))})),null==v||v.addEventListener("click",(function(){D(p),h.value=s.textContent,userProfileInputy.value=d.textContent})),null==f||f.addEventListener("click",(function(){D(S)})),null==U||U.addEventListener("click",(function(){D(w)})),j.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){I(t)}))})),r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(r.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);N(n,r,t),e.addEventListener("reset",(function(){setTimeout((function(){N(n,r,t)}),0)})),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),N(n,r,t)}))}))}(e,r)}))})();