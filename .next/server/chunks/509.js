exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 6781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ COLORS)
/* harmony export */ });
const COLORS = {
    black: "#44624a",
    beige: "#F7F7F1",
    purple1: "rgba(221,225,251,0.7)",
    purple2: "#DDE1FB",
    purple3: "#B4BEFF",
    purple4: "rgba(77,84,132,0.7)",
    purple5: "#4D5484",
    yellow: "#E3B429",
    blue: "#68ADFF",
    red: "#73655d",
    green1: "#89C66D",
    green2: "#8BA888",
    transparent: "transparent",
    temp: "2D2F53"
};


/***/ }),

/***/ 1466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./store/slices/themeSlice.ts

const saveTheme = (theme)=>{
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};
const themeSlice = (0,toolkit_.createSlice)({
    name: "theme",
    initialState: {
        theme: "dark"
    },
    reducers: {
        toggleTheme: (state)=>{
            const newTheme = state.theme === "dark" ? "light" : "dark";
            state.theme = newTheme;
            saveTheme(newTheme);
            console.log(newTheme);
        },
        setTheme: (state, action)=>{
            const newTheme = action.payload;
            state.theme = newTheme;
            saveTheme(newTheme);
        }
    }
});
const { toggleTheme, setTheme } = themeSlice.actions;
/* harmony default export */ const slices_themeSlice = (themeSlice.reducer);

;// CONCATENATED MODULE: ./store/slices/mobileMenuOpenSlice.ts

const mobileMenuOpenSlice = (0,toolkit_.createSlice)({
    name: "mobileMenuOpen",
    initialState: {
        mobileMenuOpen: false
    },
    reducers: {
        toggleMobileMenu: (state)=>{
            state.mobileMenuOpen = !state.mobileMenuOpen;
        },
        openMobileMenu: (state)=>{
            state.mobileMenuOpen = true;
        },
        closeMobileMenu: (state)=>{
            state.mobileMenuOpen = false;
        }
    }
});
const { toggleMobileMenu, openMobileMenu, closeMobileMenu } = mobileMenuOpenSlice.actions;
/* harmony default export */ const slices_mobileMenuOpenSlice = (mobileMenuOpenSlice.reducer);

;// CONCATENATED MODULE: ./store/store.ts



const store = (0,toolkit_.configureStore)({
    reducer: {
        theme: slices_themeSlice,
        mobileMenuOpen: slices_mobileMenuOpenSlice
    }
});

;// CONCATENATED MODULE: ./components/redux/ReduxProvider.tsx





function ReduxProvider({ children }) {
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime.jsx(ThemeInitialState, {
            children: children
        })
    });
}
function ThemeInitialState({ children }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        const theme = window.localStorage.getItem("theme");
        if (theme) {
            dispatch(setTheme(theme));
        }
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./constants/routes.ts
const ROUTES = [
    {
        link: "/#",
        text: "Home"
    },
    {
        link: "/#projects",
        text: "Projects"
    },
    {
        link: "/#experience",
        text: "Experience"
    },
    {
        link: "/#about",
        text: "About"
    },
    {
        link: "/resume.pdf",
        text: "Resume"
    }
];

;// CONCATENATED MODULE: ./components/navigation/DesktopMenu.tsx



function DesktopMenu() {
    const linkClasses = "transition-300 text-sm font-[450] text-black hover:text-purple5 dark:text-black dark:hover:text-beige 2xl:text-md";
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: "hidden gap-10 xl:flex 2xl:gap-12",
        children: ROUTES.map((route, i)=>route.text === "Resume" ? /*#__PURE__*/ jsx_runtime.jsx("a", {
                href: route.link,
                target: "_blank",
                rel: "noreferrer noopener",
                className: linkClasses,
                children: route.text
            }, `route-${i}`) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: route.link,
                className: linkClasses,
                children: route.text
            }, `route-${i}`))
    });
}

;// CONCATENATED MODULE: ./components/navigation/MobileMenuToggle.tsx



function MobileMenuToggle() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { mobileMenuOpen } = (0,external_react_redux_.useSelector)((state)=>state.mobileMenuOpen);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        type: "button",
        onClick: ()=>dispatch(toggleMobileMenu()),
        className: "flex cursor-pointer flex-col gap-1.25 xl:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `transition-300 h-1.25 w-5 rounded-full bg-black dark:bg-purple2 3xs:h-1.5 3xs:w-6 ${mobileMenuOpen ? "translate-x-1/2" : "translate-x-0"}`
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "transition-300 h-1.25 w-8 rounded-full bg-black dark:bg-purple2 3xs:h-1.5 3xs:w-9"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `transition-300 h-1.25 w-5 rounded-full bg-black dark:bg-purple2 3xs:h-1.5 3xs:w-6 ${mobileMenuOpen ? "translate-x-0" : "translate-x-1/2"}`
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/navigation/MobileMenu.tsx





function MobileMenu() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { mobileMenuOpen } = (0,external_react_redux_.useSelector)((state)=>state.mobileMenuOpen);
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: `transition-300 absolute top-[calc(100%+24px)] flex w-full flex-col gap-5 rounded-2xl border border-purple2 border-opacity-20 bg-purple2 bg-opacity-20 py-6 text-center backdrop-blur-md dark:border-purple5 dark:border-opacity-20 dark:bg-purple5 dark:bg-opacity-5 3xs:gap-6 3xs:rounded-3xl xl:hidden ${mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`,
        children: ROUTES.map((route, i)=>route.text === "Resume" ? /*#__PURE__*/ jsx_runtime.jsx("a", {
                href: route.link,
                target: "_blank",
                rel: "noreferrer",
                onClick: ()=>dispatch(closeMobileMenu()),
                className: mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "gradient-text dark-main-gradient dark:light-main-gradient font-medium",
                    children: route.text
                })
            }, `route-${i}`) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: route.link,
                onClick: ()=>dispatch(closeMobileMenu()),
                className: mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "gradient-text dark-main-gradient dark:light-main-gradient font-medium",
                    children: route.text
                })
            }, `route-${i}`))
    });
}

;// CONCATENATED MODULE: ./components/navigation/Header.tsx




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "fixed inset-x-96 justify-center bg-green2 bottom-30 z-50 flex flex-col px-50",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "transition-300 flex items-center justify-center rounded-full bg-green2 px-50 py-3 backdrop-blur 3xs:px-3 3xs:py-4 xs:px-5 xl:-mx-6 xl:px-10",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-6 3xs:gap-9 xl:gap-9",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(DesktopMenu, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(MobileMenuToggle, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MobileMenu, {})
        ]
    });
}

// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
// EXTERNAL MODULE: ./constants/colors.ts
var colors = __webpack_require__(6781);
;// CONCATENATED MODULE: ./components/navigation/Footer.tsx




function Footer() {
    const { theme } = (0,external_react_redux_.useSelector)((state)=>state.theme);
    const SOCIALS = [
        {
            id: "linkedin",
            url: "https://www.linkedin.com/in/pranavarma/",
            icon: /*#__PURE__*/ jsx_runtime.jsx(external_react_feather_.Linkedin, {
                size: 24,
                color: theme === "light" ? colors/* COLORS */.D.purple5 : colors/* COLORS */.D.purple2,
                className: "transition-300"
            })
        },
        {
            id: "github",
            url: "https://github.com/prannyv",
            icon: /*#__PURE__*/ jsx_runtime.jsx(external_react_feather_.GitHub, {
                size: 24,
                color: theme === "light" ? colors/* COLORS */.D.purple5 : colors/* COLORS */.D.purple2,
                className: "transition-300"
            })
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "mx-container mb-16",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "dark-main-gradient dark:light-main-gradient mb-6 h-0.25 w-full xs:mb-8"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center justify-between gap-4 2xs:flex-row 2xs:gap-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center 2xs:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "mb-2 text-xl font-[550] xs:text-2xl",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "dark-main-gradient dark:light-main-gradient gradient-text",
                                    children: "Pranav Varma"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "mailto:pranavvarma603@gmail.com",
                                className: "text-sm text-black dark:text-purple2 xs:text-md",
                                children: "pranavvarma603@gmail.com"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex gap-4",
                        children: SOCIALS.map((social)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: social.url,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "transition-300 lg:hover:-translate-y-0.5",
                                children: social.icon
                            }, social.id))
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.tsx






function App({ Component, pageProps }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ReduxProvider, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: `pt-28 xs:pt-36 lg:pt-40 xl:pt-44 ${router.pathname === "/" && "2xl:pt-48"}`,
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        className: "dark m-0 scroll-smooth p-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                className: "transition-300 relative bg-beige dark:bg-black",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;