/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContact= () =>{\n    \n    // const contact = document.createElement('div')\n    // contact.classList.add('contact')\n\n    const content = document.querySelector(\"#content\");\n    let pageContent = document.createElement(\"div\");\n    pageContent.setAttribute(\"id\", \"page-content\")\n  \n    const phoneNumber = document.createElement('p')\n    phoneNumber.textContent = '📞 123 456 789'\n  \n    const address = document.createElement('p')\n    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA'\n  \n    const restaurantLocation = document.createElement('img')\n    restaurantLocation.src = 'https://goo.gl/maps/kWGHidZTYqVZJvAd8'\n    restaurantLocation.alt = 'Mozzafiato restaurant location'\n  \n    pageContent.appendChild(phoneNumber)\n    pageContent.appendChild(address)\n    pageContent.appendChild(restaurantLocation)\n  \n    content.appendChild(pageContent)\n  }\n  \n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://resturant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n \n\n//load page\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//page for the menu\n\n\nconst createMenuPage = () =>{\n    const content = document.querySelector(\"#content\");\n    let pageContent = document.createElement(\"div\");\n    pageContent.setAttribute(\"id\", \"page-content\")\n\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Our menu\";\n    pageContent.appendChild(heading);\n\n   const menuList = document.createElement(\"div\");\n    const menuItem1 = document.createElement(\"h1\");\n    menuItem1.textContent = \"Jollof and fried chicken\";\n    const menuItem1desc = document.createElement(\"p\");\n    menuItem1desc.textContent=\"grilled and braised turkey, coated in our signature pepper sauce, served with our famous smoky jollof rice\";\n    const menuImg1 = document.createElement(\"img\");\n    menuImg1.src =\"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/42788e49474248dba75fdfd47114024a/BFV43575_PartyRiceAroundAfrica-FB-V2.jpg?resize=1200:*\"\n    menuImg1.height = 300;\n    menuList.appendChild(menuItem1);\n    menuList.appendChild(menuItem1desc);\n    menuList.appendChild(menuImg1);\n\n\n    const menuItem2 = document.createElement(\"h1\");\n    menuItem2.textContent = \"Ofada Rice Bowl\";\n    const menuItem2desc = document.createElement(\"p\");\n    menuItem2desc.textContent=\"traditional assorted meat ofada sauce served with ofada rice, plantain pieces and boiled egg\";\n    const menuImg2 = document.createElement(\"img\");\n    menuImg2.src =\"https://www.bananaislandrestaurants.com/wp-content/uploads/2019/12/ofada-rice-ayamase-stew-1-1051x788.jpg\";\n    menuImg2.height = 300;\n    menuList.appendChild(menuItem2);\n    menuList.appendChild(menuItem2desc);\n    menuList.appendChild(menuImg2);\n\n\n    const menuItem3 = document.createElement(\"h1\");\n    menuItem3.textContent = \"Àbùlà and Assorted Meat\";\n    const menuItem3desc = document.createElement(\"p\");\n    menuItem3desc.textContent=\"àmàlà served with three traditional sauces:gbegìrì, ewédú ati omi obe\";\n    const menuImg3 = document.createElement(\"img\");\n    menuImg3.src =\"https://www.bananaislandrestaurants.com/wp-content/uploads/2019/12/ofada-rice-ayamase-stew-1-1051x788.jpg\";\n    menuImg3.height = 300;\n    menuList.appendChild(menuItem3);\n    menuList.appendChild(menuItem3desc);\n    menuList.appendChild(menuImg3);\n\n\n    const menuItem4 = document.createElement(\"h1\");\n    menuItem4.textContent = \"Ofada Rice Bowl\";\n    const menuItem4desc = document.createElement(\"p\");\n    menuItem4desc.textContent=\"traditional assorted meat ofada sauce served with ofada rice, plantain pieces and boiled egg\";\n    const menuImg4 = document.createElement(\"img\");\n    menuImg4.src =\"https://9jafoods.com/wp-content/uploads/2021/06/How-to-Make-Lump-Free-and-Fluffy-Amala-Recipe.jpg\";\n    menuImg4.height = 300;\n    menuList.appendChild(menuItem4);\n    menuList.appendChild(menuItem4desc);\n    menuList.appendChild(menuImg4);\n\n    pageContent.appendChild(menuList);\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://resturant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _resturant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resturant */ \"./src/resturant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n\nfunction initialLoad(){\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_resturant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://resturant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/resturant.js":
/*!**************************!*\
  !*** ./src/resturant.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n//resturant.js\nconst createRestaurantHomePage = () => {\n   \n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.setAttribute(\"id\", \"page-content\")\n\n    //Create and append image element\n    const image = document.createElement('img');\n    image.src = \"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800\";\n    image.height = 300;\n    pageContent.appendChild(image);\n\n    //Create and append headline element\n    const headline = document.createElement('h1');\n    headline.textContent = 'Welcome to our resturant';\n    pageContent.appendChild(headline);\n\n\n    //Create and append copy element\n    const copy = document.createElement('p');\n    copy.textContent = \"We serve the best food in town. Why dont you head on over to our resturant and show us some love while we make your stomachs happier than ever\"\n    pageContent.appendChild(copy);\n \n    content.append(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n\n//# sourceURL=webpack://resturant-page/./src/resturant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _resturant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resturant */ \"./src/resturant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst createTabs = () => {\n    const content = document.querySelector(\"#content\");\n\n    // Create the container for the tabs\n    const tabsContainer = document.createElement(\"div\");\n    tabsContainer.classList.add(\"nav-bar\");\n    \n    // Create the three divs for the tabs\n    const home = document.createElement(\"div\");\n    const menu = document.createElement(\"div\");\n    const contact = document.createElement(\"div\");\n\n    // Set ids for the divs\n    home.setAttribute(\"id\",\"home-btn\");\n    menu.setAttribute(\"id\",\"menu-btn\");\n    contact.setAttribute(\"id\",\"contact-btn\");\n\n    // Set classes for the divs\n    home.classList.add(\"nav-item\");\n    menu.classList.add(\"nav-item\");\n    contact.classList.add(\"nav-item\");\n\n    // Set text content for the tabs\n    home.textContent = \"Home\";\n    menu.textContent = \"Menu\";\n    contact.textContent = \"Contact\";\n\n    // Append the divs to the tabs container\n    tabsContainer.appendChild(home);\n    tabsContainer.appendChild(menu);\n    tabsContainer.appendChild(contact);\n\n    // Append the tabs container to content\n    content.appendChild(tabsContainer);\n   \n    home.addEventListener('click',() => {\n        const pageCont = document.querySelector('#page-content')\n        clearContent(pageCont);\n        (0,_resturant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    });\n\n    menu.addEventListener('click',() => {\n        const pageCont = document.querySelector('#page-content')\n        clearContent(pageCont);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n        \n    });\n\n    contact.addEventListener('click',() => {\n        const pageCont = document.querySelector('#page-content')\n        clearContent(pageCont);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n       \n});\n}\n\nfunction clearContent(pageContainer) {\n    if (pageContainer){    \n        pageContainer.remove()\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n\n//# sourceURL=webpack://resturant-page/./src/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;