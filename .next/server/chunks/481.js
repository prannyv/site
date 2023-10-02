"use strict";
exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 1303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Description)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2474);


function Description({ project }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "mb-12 2xs:mb-16 lg:mb-20 2xl:mb-24",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-9 2xs:gap-12 lg:mb-16 lg:grid-cols-[1fr_2fr] 2xl:mb-24 2xl:grid-cols-[2fr_5fr]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-5 2xs:gap-6 xl:gap-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-base lg:text-base mb-0.5 font-[550] 2xs:mb-1 sm:mb-2 sm:text-lg lg:mb-1 2xl:mb-2 2xl:text-lg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "gradient-text dark-main-gradient dark:light-main-gradient",
                                                    children: "Developed For"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-base lg:text-base text-black dark:text-beige sm:text-lg 2xl:text-lg",
                                                children: project.developedFor
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-base lg:text-base mb-0.5 font-[550] 2xs:mb-1 sm:mb-2 sm:text-lg lg:mb-1 2xl:mb-2 2xl:text-lg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "gradient-text dark-main-gradient dark:light-main-gradient",
                                                    children: "Tech Stack"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-base lg:text-base text-black dark:text-beige sm:text-lg 2xl:text-lg",
                                                children: project.techStack.join(", ")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-base lg:text-base mb-0.5 font-[550] 2xs:mb-1 sm:mb-2 sm:text-lg lg:mb-1 2xl:mb-2 2xl:text-lg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "gradient-text dark-main-gradient dark:light-main-gradient",
                                                    children: "Roles"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-base lg:text-base text-black dark:text-beige sm:text-lg 2xl:text-lg",
                                                children: project.roles.join(", ")
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col gap-5 lg:hidden",
                                children: project.links.map((link, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        type: "link",
                                        link: link.url,
                                        classes: "w-full sm:w-auto",
                                        children: link.label
                                    }, `button-${i}`))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col gap-4 2xs:gap-5 sm:gap-7 lg:gap-5 2xl:gap-7",
                        children: project.summary.map((text, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `text-base text-black dark:text-beige sm:text-lg ${i === 0 ? "font-medium 2xl:text-xl" : "lg:text-base 2xl:text-lg"}`,
                                children: text
                            }, `summary-${i}`))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden flex-row flex-wrap gap-9 lg:flex",
                children: project.links.map((link, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        type: "link",
                        link: link.url,
                        text: "md:text-lg text-black dark:text-purple2",
                        padding: "px-6 py-4 md:px-7 md:py-4",
                        children: link.label
                    }, `button-${i}`))
            })
        ]
    });
}


/***/ }),

/***/ 6154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_GradientBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3671);




function Hero({ project }) {
    const { theme } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.theme);
    const darkMockup = project.mockups[0];
    const lightMockup = project.mockups.length === 6 ? project.mockups[1] : project.mockups[0];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "mb-8 lg:mb-12 2xl:mb-16",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mb-5 lg:mb-7 2xl:mb-9",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "gradient-text dark-main-gradient dark:light-main-gradient text-4xl font-semibold 2xs:text-6xl md:text-8xl lg:text-9xl 2xl:text-10xl",
                    children: project.title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_GradientBorder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                borderColor: "dark-main-gradient dark:light-main-gradient",
                borderRadius: "rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl",
                classes: "group",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "light-project-gradient dark:dark-project-gradient relative h-[360px] overflow-hidden rounded-xl 3xs:h-[420px] 3xs:rounded-2xl 2xs:h-[480px] 2xs:rounded-3xl xs:h-[580x] xl:h-[620px] 2xl:rounded-4xl 3xl:h-[640px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `transition-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:group-hover:scale-[1.02] 
            ${project.id === "miso" && "w-[130%] max-w-[900px]"}
            ${project.id === "sightful" && "w-[150%] max-w-[1240px]"}
            ${project.id === "ivey" ? "w-[85%] max-w-[375px]" : ""}
            ${project.id === "pantry" && "w-[120%] max-w-[1200px]"}
            `,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: theme === "light" ? lightMockup : darkMockup,
                            alt: `${project.title} mockup`
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 7811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Mockups)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_GradientBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3671);




function Mockups({ project }) {
    const { theme } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.theme);
    const mockups = project.mockups.length === 6 ? [
        {
            dark: project.mockups[2],
            light: project.mockups[3]
        },
        {
            dark: project.mockups[4],
            light: project.mockups[5]
        }
    ] : [
        {
            dark: project.mockups[1],
            light: project.mockups[1]
        },
        {
            dark: project.mockups[2],
            light: project.mockups[2]
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "mb-20 grid gap-9 lg:mb-36 lg:grid-cols-2",
        children: mockups.map((mockup, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_GradientBorder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                borderColor: "dark-main-gradient dark:light-main-gradient",
                borderRadius: "rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl",
                classes: "block group",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "light-project-gradient dark:dark-project-gradient relative aspect-[8/7] overflow-hidden rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: theme === "light" ? mockup.light : mockup.dark,
                        alt: project.title,
                        className: `transition-300 absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 xl:group-hover:scale-[1.02] 
                ${i === 0 && project.id === "miso" ? "top-[52%] w-[90%] " : ""}
                ${i === 1 && project.id === "miso" ? "w-[120%] " : ""}
                ${i === 0 && project.id === "sightful" ? "w-[120%] " : ""}
                ${i === 1 && project.id === "sightful" ? "left-[48%] w-[105%] " : ""}
                ${i === 0 && project.id === "ivey" ? "w-[80%] " : ""}
                ${i === 1 && project.id === "ivey" ? "w-[100%] " : ""}
                ${i === 0 && project.id === "pantry" ? "w-[120%] " : ""}
                ${i === 1 && project.id === "pantry" ? "w-[110%] " : ""}
              `
                    })
                })
            }, `mockup-${i}`))
    });
}


/***/ })

};
;