(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=document.querySelector(".popup_type_add-form").querySelector(".popup__form"),n=document.querySelector(".popup_type_edit-profile").querySelector(".popup__form"),r=document.querySelector(".popup_type_change-avatar").querySelector(".popup__form"),o=n.querySelector(".popup__input_content_name"),i=n.querySelector(".popup__input_content_job"),u=document.querySelector(".profile__add-button"),s=document.querySelector(".profile__edit-button"),l=document.querySelector(".profile__photo-wrap");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r,o,i,u,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._selector=n,this._handleCardClick=r,this._handleDeleteClick=o,this._handleDeleteLike=i,this._handleAddLike=u,this._isOwn=s,this._isLikedByUser=l,this._element=this._getTemplate(),this._galleryPhoto=this._element.querySelector(".gallery__photo"),this._galleryTitle=this._element.querySelector(".gallery__title"),this._likeButton=this._element.querySelector(".gallery__like"),this._likeCount=this._element.querySelector(".gallery__count"),this._deleteButton=this._element.querySelector(".gallery__delete")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".gallery__item").cloneNode(!0)}},{key:"_checkCardIsOwn",value:function(){this._isOwn&&this._deleteButton.classList.add("gallery__delete_active")}},{key:"_checkIsLikedByUser",value:function(){this._isLikedByUser&&this._likeButton.classList.add("gallery__like_active")}},{key:"_changeLikeCount",value:function(e){this._likeCount.textContent=e}},{key:"deleteLike",value:function(e){this._likeButton.classList.remove("gallery__like_active"),this._changeLikeCount(e)}},{key:"addLike",value:function(e){this._likeButton.classList.add("gallery__like_active"),this._changeLikeCount(e)}},{key:"_setEventListenerLike",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("gallery__like_active")?e._handleDeleteLike(e._id,e):e._handleAddLike(e._id,e)}))}},{key:"_setEventListenerDelete",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._id,e)}))}},{key:"_setEventListenerOpenFullImage",value:function(){var e=this;this._galleryPhoto.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._setEventListenerLike(),this._setEventListenerDelete(),this._setEventListenerOpenFullImage(),this._checkCardIsOwn(),this._checkIsLikedByUser(),this._galleryPhoto.src=this._link,this._galleryPhoto.alt=this._name,this._galleryTitle.textContent=this._name,this._likeCount.textContent=this._likes.length,this._element}},{key:"deleteCard",value:function(){this._element.remove()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"activateButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this.activateButton()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"addNewItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){return n._renderer(e,t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close(this._popup)}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close(this._popup)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("mousedown",this._handleOverlayClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this._handleOverlayClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._photoFull=t._popup.querySelector(".popup__photo"),t._titleFullPhoto=t._popup.querySelector(".popup__figcaption"),t}return t=u,(n=[{key:"open",value:function(e,t){m(S(u.prototype),"open",this).call(this),this._photoFull.src=t,this._photoFull.alt=e,this._titleFullPhoto.textContent=e}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function B(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e,t){var n,r=e.handlerSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handlerSubmitForm=r,n._popupForm=n._popup.querySelector(".popup__form"),n._popupInputs=n._popupForm.querySelectorAll(".popup__input"),n._saveButton=n._popup.querySelector(".popup__save"),n._initialText=n._saveButton.value,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._popupInputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;C(I(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handlerSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){C(I(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderSaving",value:function(e,t){this._saveButton.value=e?t:this._initialText}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function U(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function u(e,t){var n,r=e.handlerSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handlerSubmitForm=r,n._popupForm=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"open",value:function(e,t){F(D(u.prototype),"open",this).call(this),this._id=e,this._card=t}},{key:"setEventListeners",value:function(){var e=this;F(D(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handlerSubmitForm(e._id,e._card)}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=t.userNameSelector,this._userJobSelector=t.userJobSelector,this._userPhotoSelector=t.userPhotoSelector,this._userNameElement=document.querySelector(this._userNameSelector),this._userJobElement=document.querySelector(this._userJobSelector),this._userPhotoElement=document.querySelector(this._userPhotoSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{"user-name":this._userNameElement.textContent,"user-job":this._userJobElement.textContent}}},{key:"setUserInfo",value:function(e){this._userNameElement.textContent=e.name,this._userJobElement.textContent=e.about,this._userPhotoElement.src=e.avatar}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._host=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getJsonOrError",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfoFromServer",value:function(){return fetch("".concat(this._host,"/users/me"),{headers:this._headers}).then(this._getJsonOrError)}},{key:"setUserInfoToServer",value:function(e){return fetch("".concat(this._host,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getJsonOrError)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._host,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getJsonOrError)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._host,"/cards"),{headers:this._headers}).then(this._getJsonOrError)}},{key:"setCard",value:function(e){return fetch("".concat(this._host,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getJsonOrError)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._host,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getJsonOrError)}},{key:"setLike",value:function(e){return fetch("".concat(this._host,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._getJsonOrError)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._host,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getJsonOrError)}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-47",headers:{authorization:"fb096cda-3fa8-438f-8ed5-03045e014a70","Content-Type":"application/json"}}),M=new A({userNameSelector:".profile__title",userJobSelector:".profile__subtitle",userPhotoSelector:".profile__avatar"}),G=new p(e,n),K=new p(e,t),Q=new p(e,r),W=new O(".popup_type_opened-photo"),X=new _({renderer:function(e,t){X.addItem(te(e,t===e.owner._id,e.likes.find((function(e){return e._id===t}))))}},".gallery__list"),Y=new N({handlerSubmitForm:function(e,t){z.deleteCard(e).then((function(){t.deleteCard()})).then((function(){Y.close()})).catch((function(e){console.log(e)}))}},".popup_type_deleting-photo"),Z=new q({handlerSubmitForm:function(e){Z.renderSaving(!0,"Сохранение..."),z.setCard(e).then((function(e){X.addNewItem(te(e,!0,!1))})).then((function(){Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderSaving(!1,"")}))}},".popup_type_add-form"),$=new q({handlerSubmitForm:function(e){$.renderSaving(!0,"Сохранение..."),z.setUserInfoToServer({name:e["user-name"],about:e["user-job"]}).then((function(e){M.setUserInfo(e)})).then((function(){$.close()})).catch((function(e){console.log(e)})).finally((function(){$.renderSaving(!1,"")}))}},".popup_type_edit-profile"),ee=new q({handlerSubmitForm:function(e){ee.renderSaving(!0,"Сохранение..."),z.changeAvatar(e["avatar-link"]).then((function(e){M.setUserInfo(e)})).then((function(){ee.close()})).catch((function(e){console.log(e)})).finally((function(){ee.renderSaving(!1,"")}))}},".popup_type_change-avatar"),te=function(e,t,n){return new c(e,"#gallery-item-template",ne,re,oe,ie,t,n).generateCard()};function ne(e,t){W.open(e,t)}function re(e,t){Y.open(e,t)}function oe(e,t){z.deleteLike(e).then((function(e){t.deleteLike(e.likes.length)})).catch((function(e){console.log(e)}))}function ie(e,t){z.setLike(e).then((function(e){t.addLike(e.likes.length)})).catch((function(e){console.log(e)}))}K.enableValidation(),G.enableValidation(),Q.enableValidation(),u.addEventListener("click",(function(){K.disableButton(),K.resetValidation(),Z.open()})),s.addEventListener("click",(function(){G.resetValidation(),G.activateButton(),$.open();var e=M.getUserInfo();o.value=e["user-name"],i.value=e["user-job"]})),l.addEventListener("click",(function(){Q.disableButton(),Q.resetValidation(),ee.open()})),W.setEventListeners(),Z.setEventListeners(),$.setEventListeners(),Y.setEventListeners(),ee.setEventListeners(),Promise.all([z.getUserInfoFromServer(),z.getInitialCards()]).then((function(e){M.setUserInfo(e[0]),X.renderItems(e[1],e[0]._id)})).catch((function(e){console.log(e)}))})();