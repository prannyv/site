"use strict";
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 7631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6781);





function SEO({ title, description, keywords }) {
    const { theme } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.theme);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const path = router.pathname;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                httpEquiv: "X-UA-Compatible",
                content: "IE=edge"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "index, follow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "title",
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "image",
                property: "og:image",
                content: "/favicons/og-image.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "author",
                content: "Andrew Qiao"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: "/favicons/og-image.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "shortcut icon",
                href: "/favicons/favicon.ico",
                type: "image/x-icon"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicons/favicon.ico",
                type: "image/x-icon"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: `www.andrewqiao.com${path}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicons/favicon-32x32.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicons/favicon-16x16.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "manifest",
                href: "/favicons/manifest.json"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "msapplication-TileColor",
                content: theme === "dark" ? _constants_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D.black : _constants_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D.beige
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "theme-color",
                content: theme === "dark" ? _constants_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D.black : _constants_colors__WEBPACK_IMPORTED_MODULE_4__/* .COLORS */ .D.beige
            })
        ]
    });
}


/***/ }),

/***/ 2474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function Button({ type, route, link, onClick, text = "text-black dark:text-purple2", font = "font-medium", bg = "bg-beige dark:bg-black", padding = "px-6 py-4", border = "rounded-full border border-purple5 dark:border-purple3", hover, classes, children }) {
    const buttonClasses = `transition-300 md:hover:-translate-y-1 relative inline-block text-center ${text} ${font} ${bg} ${padding} ${border} ${hover} ${classes}`;
    switch(type){
        case "route":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: route || "",
                className: buttonClasses,
                children: children
            });
        case "link":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: link || "",
                target: "_blank",
                rel: "noreferrer noopener",
                className: buttonClasses,
                children: children
            });
        case "button":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: onClick,
                className: buttonClasses,
                children: children
            });
        case "submit":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                onClick: onClick,
                className: buttonClasses,
                children: children
            });
        default:
            return null;
    }
}


/***/ }),

/***/ 3671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GradientBorder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function GradientBorder({ borderRadius, borderColor, classes, children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `transition-300 h-full overflow-hidden p-0.25 ${borderRadius} ${borderColor} ${classes}`,
        children: children
    });
}


/***/ }),

/***/ 3301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ PROJECTS)
});

;// CONCATENATED MODULE: ./public/img/mockups/miso-1.png
/* harmony default export */ const miso_1 = ({"src":"/_next/static/media/miso-1.1759f22f.png","height":1054,"width":2054,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAf0lEQVR42mMAAY+oIH/zILdey3CfGqcgv7L4xKTypLQ0cwYYMEny6shtKvsfX5LxP7+i+H92ds7/yJiYVrDkkslLhBomtG2cuXTe/8Uzpv3v7mh5GRET+zMhKWkmWMHMuXOde3v6a2qq66ZXVFVPiklOl7azt5cAKpBlYGBgAADYkjBFuwwL/AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/img/mockups/miso-2.png
/* harmony default export */ const miso_2 = ({"src":"/_next/static/media/miso-2.3efa8d3a.png","height":1326,"width":1924,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAx0lEQVR42mNgUFOJZmBgOMJgbbKdwdF0L4OP8frc7GwuBhgorqlu37Vv//9te/f9X7554//m/t5/DAwMmhKWDPxGPnz8DOtWr215/vbl/3MPrv1pnND71y0p6Y9PZsYHq6To36rBrpsZ6qrr6qcvnPO/ZlL7941btvx5//Hj3zPXr/y7fPvm/7kLFh5kAAK+vqpWRQYGBvGtW7dePb5xw//9K5b/f/n61f+FCxceZUAGFZWVMyd2d1+ePmHCkfnz519My8iYAgC2gF3YoKxZMQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./public/img/mockups/miso-3.png
/* harmony default export */ const miso_3 = ({"src":"/_next/static/media/miso-3.f40adad9.png","height":1294,"width":2098,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAkElEQVR42mMAAQNpQ0n3gIDrfsFBu2xtnEvbe9uYGdCBg4fzG2cP1//W1s4fp02dxA0Ws3JkZFiwZIlIdk5enpO70y8HF4f/DIxS9xgYGMAmRGakMDL0TZzk2NrZub+qpvZzbGLi/5mzZv3bsGnjg8jURD8UK3bs2iNe195Svn7Tpvubt21rYmBgYGFgYGAAAGS4Ma83g2tyAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/sightful-1.png
/* harmony default export */ const sightful_1 = ({"src":"/_next/static/media/sightful-1.12b90ae9.png","height":1336,"width":1496,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAvUlEQVR42mMAgZsJc5MOblo35+CtjaYMSGD7ycWMYMbCtjMnz+w5/P/uxY055xkYePf2Tk9Yd3KROVzl1M0n9+/esuf/0bVTw9aln0g/tvr4/we3Dh2DK9i65tbJY3de/H/+8WGM+ZTj8UvWH/h/avmcfXAFBy683HHp0f3/955f8N0x93ji4ZMP/19+/uwwXMH/l/O5X5y6LQF22KHHhQeuPf9/68W1kwzYwPMXVyW/vH3s++j2AyMGBgYGAFreZMxgZm4oAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/img/mockups/sightful-2.png
/* harmony default export */ const sightful_2 = ({"src":"/_next/static/media/sightful-2.14ebe61a.png","height":1160,"width":1784,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmElEQVR42mO4HbOKlQEI9uhParrVtevTmYN7Hhw4O+9uRr2NNAMM3GawlFw1ZfOZnXse/L96+tz/h7tn/e90ZVBkgIGl828Wnz1w5P+9Rw++vX/78d+Hh/d/9je3KDDAwKM373O/fPry/8+Pb/9B4PPXr/9bOtoRJrx9+SLqy5cvr58+e3753bt3Nx4+eHCprrpaioGBgQEAaz5XU8f4LfIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/sightful-3.png
/* harmony default export */ const sightful_3 = ({"src":"/_next/static/media/sightful-3.3fad163e.png","height":1290,"width":1388,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA30lEQVR42nXBv0oDMQAH4F8u8XI5sZ4eagWtFVodRBxcnDq5uwrOvoDv4iNIJyedBV1FXUTQxdJC/xd6bXLppaFpX6DfR6oPj1e7hf2SDeysn7Tf3i9ftqLT40qN+0HuwnyweI/enZXCCm8LfE/MffR8Ex8Wy9djC/z8fj0xI1sjZ3fgmgzp50Af3Z7r4nYObtGkYshWnGeDRheqxzEsbLp8opAKA2unkCqzjJNQcD+GPtgAlXqNUbruCw4vI/CccyzJVl//RGSmgfxXvXq13jAnICzvUVqWWnUIlgsBYA4jVVnj8jvzAAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/img/mockups/ivey-1.png
/* harmony default export */ const ivey_1 = ({"src":"/_next/static/media/ivey-1.6dcc32f8.png","height":1138,"width":1710,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/Af///wD7APUBcnlZB1JMcFv5+vkm/v7/BAQDBPKuq7SHAbK3tQD9/P0cERAQsw4ODCAICAgQDAwMAPr6+u6EhIoeAXyBgwCEf30D0tPV5RcWFQwMCwsECgsKB/z7/NwMJSkuAZSWlhQKCgoqHRsbW/j4+F4QEBAIEhISAAIDA+ZpcXUiAZOVlRgDBAQz5eXmH/z7+y709fX/8fHx3wYGBtGep6S5KUlExO4/WU4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/ivey-2.png
/* harmony default export */ const ivey_2 = ({"src":"/_next/static/media/ivey-2.6dcc32f8.png","height":1138,"width":1710,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/Af///wD7APUBcnlZB1JMcFv5+vkm/v7/BAQDBPKuq7SHAbK3tQD9/P0cERAQsw4ODCAICAgQDAwMAPr6+u6EhIoeAXyBgwCEf30D0tPV5RcWFQwMCwsECgsKB/z7/NwMJSkuAZSWlhQKCgoqHRsbW/j4+F4QEBAIEhISAAIDA+ZpcXUiAZOVlRgDBAQz5eXmH/z7+y709fX/8fHx3wYGBtGep6S5KUlExO4/WU4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/ivey-3.png
/* harmony default export */ const ivey_3 = ({"src":"/_next/static/media/ivey-3.5eee3119.png","height":1104,"width":1666,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAApklEQVR42mMAgTkLZ4sdOHZg48HjB3Zs2b1528ETBw/u3L9zAVCKGaxgy9ZNytt2bPl/+dKF/7du3fh/5+6t/1euXnrE4JHIClbw5s1b/ts3b3z5+O7Dn7ev337/DwHXgVIsDIuXrxCaNmNm0r59+//v27///7btO/4fP378/7Hjxy+Ddc9ftFh96oyZ4QmpGREpGdlJ+UXFeYmp6TUKBkb6DAwMDABcElnqCHPfdAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/ivey-4.png
/* harmony default export */ const ivey_4 = ({"src":"/_next/static/media/ivey-4.5eee3119.png","height":1104,"width":1666,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAApklEQVR42mMAgTkLZ4sdOHZg48HjB3Zs2b1528ETBw/u3L9zAVCKGaxgy9ZNytt2bPl/+dKF/7du3fh/5+6t/1euXnrE4JHIClbw5s1b/ts3b3z5+O7Dn7ev337/DwHXgVIsDIuXrxCaNmNm0r59+//v27///7btO/4fP378/7Hjxy+Ddc9ftFh96oyZ4QmpGREpGdlJ+UXFeYmp6TUKBkb6DAwMDABcElnqCHPfdAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/ivey-5.png
/* harmony default export */ const ivey_5 = ({"src":"/_next/static/media/ivey-5.8f2935d9.png","height":1182,"width":1984,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnUlEQVR42mMAge17t3sdOnFo8vpt65p3HdzVs33vtkQgZrh29yojWMGlK5cmXb566f/d+3f+P33+9P/dB3dPADHD////mcAKXr161fnm9Zv/v3/9/vwfCP78/rMViEEKWMAKdu/e3bJz587/QPr/3r17/69dt+52WXWtDBAzgIGtq4dMREx8TEhktH9ccqp7ama259QZMzWnzpjJAAA2C12k0i2mRgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/ivey-6.png
/* harmony default export */ const ivey_6 = ({"src":"/_next/static/media/ivey-6.8f2935d9.png","height":1182,"width":1984,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnUlEQVR42mMAge17t3sdOnFo8vpt65p3HdzVs33vtkQgZrh29yojWMGlK5cmXb566f/d+3f+P33+9P/dB3dPADHD////mcAKXr161fnm9Zv/v3/9/vwfCP78/rMViEEKWMAKdu/e3bJz587/QPr/3r17/69dt+52WXWtDBAzgIGtq4dMREx8TEhktH9ccqp7ama259QZMzWnzpjJAAA2C12k0i2mRgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/pantry-1.png
/* harmony default export */ const pantry_1 = ({"src":"/_next/static/media/pantry-1.a18b853d.png","height":1212,"width":1986,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAo0lEQVR42mMAgbnrNjhvOHC0cvGGLdmbDx4tWbF1pxcQMxw4f40RrGD9qsULD29d9n/n1sX/d2xe9H/lyvk7gJjh7NFNzGAFm1avmHFs16b/+/au/7x10+r/q1evWAbEDPt3bWMFK2hsbJ48c/aM//NmTvk/fdbc/x29k89PnNglAsQMYNDU0qKQl18UVVRR49Pc1Oja0FjvMWXGTJUpM2YyAADXgVMUQYPSeAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/pantry-2.png
/* harmony default export */ const pantry_2 = ({"src":"/_next/static/media/pantry-2.a18b853d.png","height":1212,"width":1986,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAo0lEQVR42mMAgbnrNjhvOHC0cvGGLdmbDx4tWbF1pxcQMxw4f40RrGD9qsULD29d9n/n1sX/d2xe9H/lyvk7gJjh7NFNzGAFm1avmHFs16b/+/au/7x10+r/q1evWAbEDPt3bWMFK2hsbJ48c/aM//NmTvk/fdbc/x29k89PnNglAsQMYNDU0qKQl18UVVRR49Pc1Oja0FjvMWXGTJUpM2YyAADXgVMUQYPSeAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/pantry-3.png
/* harmony default export */ const pantry_3 = ({"src":"/_next/static/media/pantry-3.ca39b209.png","height":1130,"width":1748,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAg0lEQVR42mM4dek6EwMQ7D922u3MlVsLtu09YMqADC7fecAKok9evNJ09d7T/5duP/l04tItGZDY0XNXmRjSKwpYQJzcmrK0kJzY/50zpj89fOYOF0hs4pwFjAyW/nbMII5TiJu5pofxKwYLhp0gfmpVDSMDEgBz7px9zFLT1CqELAEAj5EyF4EC1YMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/pantry-4.png
/* harmony default export */ const pantry_4 = ({"src":"/_next/static/media/pantry-4.ca39b209.png","height":1130,"width":1748,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAg0lEQVR42mM4dek6EwMQ7D922u3MlVsLtu09YMqADC7fecAKok9evNJ09d7T/5duP/l04tItGZDY0XNXmRjSKwpYQJzcmrK0kJzY/50zpj89fOYOF0hs4pwFjAyW/nbMII5TiJu5pofxKwYLhp0gfmpVDSMDEgBz7px9zFLT1CqELAEAj5EyF4EC1YMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/pantry-5.png
/* harmony default export */ const pantry_5 = ({"src":"/_next/static/media/pantry-5.2fffc49d.png","height":1254,"width":2190,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/Abe7wgQgHSQFrbetFj48O1Hq7u36EQ8RCAMCAdQdHR66AYeUkjUnJyivAP7+B9bc1xQ2LzMA6e3sANjd2rMQExNOATNUPjz0AvrDYT5TAHhsdfq+xL78ucO6Col5iKEAMABgATtOQTn1/ffGBAADAB8SHQA+NzsA6+7sAOjo6cZEP0RcAYaIiRz39/eXAwIDABISEvPl5uf+HhwcsA8PD9bo6+n5295GmMFvjacAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/pantry-6.png
/* harmony default export */ const pantry_6 = ({"src":"/_next/static/media/pantry-6.2fffc49d.png","height":1254,"width":2190,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/Abe7wgQgHSQFrbetFj48O1Hq7u36EQ8RCAMCAdQdHR66AYeUkjUnJyivAP7+B9bc1xQ2LzMA6e3sANjd2rMQExNOATNUPjz0AvrDYT5TAHhsdfq+xL78ucO6Col5iKEAMABgATtOQTn1/ffGBAADAB8SHQA+NzsA6+7sAOjo6cZEP0RcAYaIiRz39/eXAwIDABISEvPl5uf+HhwcsA8PD9bo6+n5295GmMFvjacAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/poke1.png
/* harmony default export */ const poke1 = ({"src":"/_next/static/media/poke1.bea7a67d.png","height":1256,"width":2042,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AQAbABqRi4dw1tv3AlNECf/Z7fb+rOLiARny89ryKxScAQAAADGSr4rOKx4qABgJ4QDi+AEAzQn5AP/6+M1ALj40ATYAACw1sGTPFRwlBFUODwDN2uj+GQoFAtrz58FON0FAAXhxdC75Fv3F/A4KAigHC/zn7/H+CPwC/vf1/toYGyVgAa+6uQjuzOsbDO/+/d4KCPwJ/vn/BRoc9QsO+P7w7NkAj8xNEq6xznQAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/poke2.png
/* harmony default export */ const poke2 = ({"src":"/_next/static/media/poke2.501fc339.png","height":762,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmElEQVR42mMAAqaQmOiG1Lz0yXGJcc3pSSmlQDE+kISeni4jiGbpbit/snTOpP/rNsz5v3Blz3+gmCpIQktLhQmsoCPf69bGvpz/qxdU/2nvDvoFFJMASbh7uIEVMIX6ex/LS4v/nxof9yc+JulbV19vxJr1G4UYYGDG0rUCvbMWGi5du8Fw3+FDqvMXLtacNnOWMAMDAwMAZ0A2ZyykI5cAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/poke3.png
/* harmony default export */ const poke3 = ({"src":"/_next/static/media/poke3.a4c3e79e.png","height":1152,"width":1758,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoUlEQVR42mOAgZRgeebozElZsXkza8IKZlWEZk0pT85pEWMo6+th/PnvK2NJRil7/ITul3ETe/5n9Pf8z57Q/T+8utKQARkYl8Zenj0v8b9ncdxPt9z4b1FF2doMcxcs4Fi0dJlhe2dXVERcxPeIRP//zkEu/y2c3f/7RMRoMMxbtIhn/qLFHtNnzaqcPGXapK7u/g1NjS3T6uobQnPTM9kAGYJDoO7uuqoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/mockups/poke4.png
/* harmony default export */ const poke4 = ({"src":"/_next/static/media/poke4.c17cedc4.png","height":1094,"width":1750,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AWOfwTE/IAChEAT1/v/y6gT2AxHwctgVTB0GAvA5Bu0BAYanuz04KRjCDwkBABEC+wDx+wH5MZHFIACZD+iEoxACAX643zotGgTFHwjv+jEfCwXn7/fsHRcrFnSLngBTBKgAAXSnzTMO+dzMCPXfAB0SBgDr7vcA8PMLgx4ZD7/2+f3JAZUAAAPkaWg2BBQeSfX5AAoREArcGRgN9Pr7/t4CAgDPXixC6uFxMBwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./constants/projects.ts






















const PROJECTS = [
    {
        id: "miso",
        title: "Miso",
        description: "Miso is a language model that is trained on 23000 tweets, messages, and captions to identify whether chat messages are gender discriminatory or toxic. ",
        summary: [
            "Miso is a large language model that is trained on 23000 tweets, messages, and captions to identify whether chat messages are gender discriminatory or toxic.",
            "Won Best Hack to Promote Women in STEM at UoftHacks X",
            "The API developed with Python utilizes Cohere's Natural Language Processing to create an AI model. A variety of research datasets have been consolidated to train the model on the Cohere platform.",
            "The backend utilizes a REST API deployed with FastAPI and Uvicorn and can be fetched by chat bots on Discord, Teams, Slack, or any other web based chat service",
            "Our Discord Bot demo is created in Node.js using the Discord.js library and the Web Demo utilizes ReactJS and Typescript to display the LLM in a web format.",
            "To create an intentional and intuitive combination of UI & UX, product mockups were crafted using Figma.",
            "Explore the web app, or check out the GitHub repository and Figma designs through the links below."
        ],
        projectType: "Web App & API",
        techStack: [
            "React.js",
            "Node.js",
            "Python",
            "Cohere",
            "FastAPI",
            "Uvicorn",
            "Typescript",
            "Figma"
        ],
        developedFor: "UofTHacks X",
        roles: [
            "Developer",
            "Designer"
        ],
        links: [
            {
                label: "Explore Miso",
                url: "https://miso-frontend-only.netlify.app"
            },
            {
                label: "GitHub Repository",
                url: "https://github.com/stanleyylin/Miso"
            },
            {
                label: "Figma Designs",
                url: "https://www.figma.com/"
            }
        ],
        mockups: [
            miso_1,
            miso_2,
            miso_3
        ]
    },
    {
        id: "sightful",
        title: "Sightful",
        description: "A Chrome extension designed to simplify the Youtube experience by flagging all innapropriate or triggering content.",
        summary: [
            "A Chrome extension designed to simplify the Youtube experience by flagging all innapropriate or triggering content.",
            "This extension provides a user friendly experience through its sleek front end developed with React.js and Typescript. Additionally, backend processes including fetching the current tab's link, converting the video to text, and generating timestamps for all words spoken are done using the Google Cloud CLI and their Machine Learning Speech to Text API.",
            "After setting up desired flags, users are able to browse Youtube safely with our rating system that appears next to reccomended Youtube videos. While custom flags can be created, users can opt to simply flag inappropriate content that we are continuously updating and moderating.",
            "To create an intentional and intuitive combination of UI & UX, product mockups were crafted using Figma.",
            "Explore the web app, or check out the GitHub repository and Figma designs through the links below."
        ],
        developedFor: "Hack the 6ix",
        projectType: "Web App & Extension",
        techStack: [
            "React.js",
            "Typescript",
            "Node.js",
            "Express.js",
            "Google Cloud CLI",
            "Google Speech-to-Text API",
            "Figma"
        ],
        roles: [
            "Developer",
            "Designer"
        ],
        links: [
            {
                label: "Explore the App",
                url: "https://"
            },
            {
                label: "GitHub Repository",
                url: "https://github.com/prannyv/sightful"
            },
            {
                label: "Figma Designs",
                url: "https://www.figma.com/file/n7DMyWSWLjG22aFPk4TJ2A/sightful?type=design&node-id=0%3A1&mode=design&t=6OsCu8AXxQh0QezR-1"
            }
        ],
        mockups: [
            sightful_1,
            sightful_2,
            sightful_3
        ]
    },
    {
        id: "ivey",
        title: "Ivey Sustainability",
        description: "A webpage created for the sustainability branch of Ivey to display events and board members.",
        summary: [
            "A webpage created for the sustainability branch of Ivey to display events and board members.",
            "Created as a part of the projects team at Western Developers Society, we look for clients across campus who need websites and do our best to fullfil their needs.",
            "Our team used Figma and Trello to design the original mockup and manage tasks, and we used Github to maintain adequate version control throughout the project.",
            "The actual webpage is created in React.js with Tailwind and Typescript used to simplify styling and functionality.",
            //Consider adding NUMBER OF PAGE VIEWS ?! when it gets added
            "The website will soon be added to the official Ivey site and be linked below."
        ],
        developedFor: "Ivey Business School",
        projectType: "Mobile App",
        techStack: [
            "React.js",
            "Tailwind",
            "Typescript",
            "Figma"
        ],
        roles: [
            "Lead Developer",
            "Designer"
        ],
        links: [
            {
                label: "Explore The Site",
                url: "https://"
            },
            {
                label: "GitHub Repository",
                url: "https://github.com/chandlerkx/ivey-sus"
            },
            {
                label: "Figma Designs",
                url: "https://www.figma.com/file/DHzI4BfPD16dqoY40Z28yz/Ivey-MSc-Sustainability?type=design&node-id=0%3A1&mode=design&t=toSQmBDMZLp4ljgN-1"
            }
        ],
        mockups: [
            ivey_1,
            ivey_2,
            ivey_3,
            ivey_4,
            ivey_5,
            ivey_6
        ]
    },
    {
        id: "pantry",
        title: "Pantry Pal",
        description: "Recipe assistant that generates recipes given input and saves all required ingredients in your virtual pantry.",
        techStack: [
            "React.js",
            "Node.js",
            "OpenAI API",
            "Flask",
            "MongoDB",
            "Figma"
        ],
        developedFor: "Ignition Hacks",
        projectType: "Web App",
        summary: [
            "Recipe assistant that generates recipes given input and saves all required ingredients in your virtual pantry.",
            "Recipes and ingredients are generated from input by connecting the OpenAI API to our React frontend using Python and Flask and saved in the app's grocery list.",
            "The user can find the nearest grocery store that has all their items in stock and for the cheapest price using the Google Maps API and our custom item database",
            "Items left over from recipes are saved in your virtual pantry, stored in our MongoDB database.",
            "The website's tech stack includes React.js, Next.js, and Tailwind CSS for its frontend, as well as Firebase for its backend. Additionally, Figma was used to create an intuitive and user-friendly UI."
        ],
        roles: [
            "Lead Developer",
            "UI/UX Designer"
        ],
        links: [
            {
                label: "Explore the Site",
                url: "https://"
            },
            {
                label: "GitHub Repository",
                url: "https://github.com/prannyv/pump"
            }
        ],
        mockups: [
            pantry_1,
            pantry_2,
            pantry_3,
            pantry_4,
            pantry_5,
            pantry_6
        ]
    },
    {
        id: "poke",
        title: "Pokemon Clone",
        description: "A Pokemon game that pulls elements from various generations to create an original experience complete with random encounters, wild pokemon, abilities, leveling & experience, and gym battles.",
        summary: [
            "A Pokemon game that pulls elements from various generations to create an original experience complete with random encounters, wild pokemon, abilities, leveling & experience, and gym battles.",
            "Begin the game by selecting a starter Pokemon and travel through the various areas to battle trainers and wild Pokemon to level up.",
            "The game also includes gym leaders to mark your progress as well as the Elite 4 at the end to complete the game!",
            "Made in Java for my CS Fundamentals final, I used the project to grasp Object Oriented Programming while working with the Javax Swing graphics systems.",
            "All maps, sprites, animations, and dialogue is original with game development principles to immerse the player into the world.",
            "Check out the Github to take a closer look at the project including other demos."
        ],
        developedFor: "CS Fundamentals Class",
        projectType: "Java App",
        techStack: [
            "Java",
            "Javax Swing"
        ],
        roles: [
            "Developer"
        ],
        links: [
            {
                label: "Github",
                url: "https://github.com/prannyv/Pokemon-12-ISU"
            },
            {
                label: "Try the Demo",
                url: "https://"
            }
        ],
        mockups: [
            poke1,
            poke2,
            poke3,
            poke4
        ]
    }
];


/***/ })

};
;