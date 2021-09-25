(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./components/pages/app/app.tsx":
/*!**************************************!*\
  !*** ./components/pages/app/app.tsx ***!
  \**************************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading/loading */ "./components/pages/loading/loading.tsx");
/* harmony import */ var _resume_resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume/resume */ "./components/pages/resume/resume.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\samya\\Codes\\web\\samyadh.github.io\\apps\\web\\src\\components\\pages\\app\\app.tsx";






const Me = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() | me-me */ "me-me").then(__webpack_require__.bind(null, /*! ./../me/me */ "./components/pages/me/me.tsx")));
const Projects = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => __webpack_require__.e(/*! import() | projects-projects */ "projects-projects").then(__webpack_require__.bind(null, /*! ./../projects/projects */ "./components/pages/projects/projects.tsx")));
function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
          fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_loading_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 31
          }, this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Me, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/me",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
          fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_loading_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 31
          }, this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Me, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/projects",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
          fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_loading_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 31
          }, this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Projects, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/resume",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
          fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_loading_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 31
          }, this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_resume_resume__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/pages/loading/loading.tsx":
/*!**********************************************!*\
  !*** ./components/pages/loading/loading.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\samya\\Codes\\web\\samyadh.github.io\\apps\\web\\src\\components\\pages\\loading\\loading.tsx";

/* eslint-disable-next-line */



function Loading(props) {
  const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      if (count === 100) setCount(count + 1);
    }, 100);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "flex h-screen justify-center items-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "counter-state",
      children: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/pages/resume/resume.tsx":
/*!********************************************!*\
  !*** ./components/pages/resume/resume.tsx ***!
  \********************************************/
/*! exports provided: Resume, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resume", function() { return Resume; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_role_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/role-details */ "./models/role-details.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\samya\\Codes\\web\\samyadh.github.io\\apps\\web\\src\\components\\pages\\resume\\resume.tsx";



function Resume() {
  const [skills, setSkills] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_models_role_details__WEBPACK_IMPORTED_MODULE_1__["roleDetails"][0].skills);
  const [role, setRole] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_models_role_details__WEBPACK_IMPORTED_MODULE_1__["roleDetails"][0]);

  function addSkill(e) {
    setSkills(skills => [...skills, e.target.value]);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "print:hidden w-[1180px] m-auto text-xs p-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: "text-xs font-semibold",
        children: "Export Settings"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "py-1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            className: "text-xs font-semibold",
            children: "Role"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("select", {
            className: "text-xs border border-black cursor-pointer",
            onChange: e => {
              const role = _models_role_details__WEBPACK_IMPORTED_MODULE_1__["roleDetails"].find(role => role.title === e.target.value);

              if (role) {
                setRole(role);
                setSkills(role.skills);
              }
            },
            children: _models_role_details__WEBPACK_IMPORTED_MODULE_1__["roleDetails"].map((role, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("option", {
                className: "text-xs",
                value: role.title,
                children: role.title
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "py-1 ml-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            className: "text-xs font-semibold",
            children: "Skills"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            className: "text-xs border border-black cursor-pointer px-2 w-60",
            onBlur: addSkill
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "ml-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            type: "button",
            onClick: () => {
              window.print();
            },
            className: "text-xs font-semibold uppercase py-0 px-1 border border-black mt-5",
            children: "Export"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "w-[1180px] h-[1668px] m-auto box-border border-2 p-12 flex flex-col relative overflow-hidden",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "absolute z-10 -rotate-3 top-0 left-1/2 w-[1800px]",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
          children: skills.map((skill, key) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              className: "text-9xl font-black text-gray-100",
              children: skill
            }, key, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "z-10",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex justify-between items-end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
              className: "text-3xl font-black inline-block",
              children: "Samyadh Jain"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
              className: "text-sm font-bold mr-1",
              children: _models_role_details__WEBPACK_IMPORTED_MODULE_1__["roleDetails"][role.index].tagLine
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
              className: "mb-1",
              children: skills.map((skill, key) => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                  className: "inline-block mr-1 mt-1 text-xs px-2 py-[2px] bg-gray-800 text-white rounded",
                  children: skill
                }, key, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "text-xs bg-gray-200 mr-1 inline-block px-2 py-1 rounded",
              href: "tel:+919739221385",
              target: "_blank",
              rel: "noreferrer",
              children: "+91 9739221385"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "text-xs bg-gray-200 mr-1 inline-block px-2 py-1 rounded",
              href: "mailTo:samyadh.jain@gmail.com",
              target: "_blank",
              rel: "noreferrer",
              children: "samyadh.jain@gmail.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              className: "text-xs bg-gray-200 mr-1 inline-block px-2 py-1 rounded",
              href: "https://samyadh.github.io",
              target: "_blank",
              rel: "noreferrer",
              children: "https://samyadh.github.io"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "h-[2px] bg-black mb-2 mt-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "intro",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            children: _models_role_details__WEBPACK_IMPORTED_MODULE_1__["roleDetails"][role.index].intro
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            className: "font-bold mt-1 border-b-2 border-black inline-block",
            children: "Work Experience"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            className: "border-l-2 border-black pl-4 ml-2",
            children: _models_role_details__WEBPACK_IMPORTED_MODULE_1__["workExperience"].map((work, index) => {
              var _work$hidden, _work$projectDetails;

              return work.hidden === undefined || !((_work$hidden = work.hidden) !== null && _work$hidden !== void 0 && _work$hidden.includes(role.index)) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "relative pt-2 before:border-t-2 before:border-black before:content-center before:absolute before:left-[-28px] before:top-[22px] before:w-[14px]",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                  className: "font-bold text-sm",
                  children: [work.title + ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                    className: "text-sm italic font-normal",
                    children: ["at ", work.company, ", ", work.period]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  children: [work.projectDetails && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                    className: "mb-1",
                    children: (_work$projectDetails = work.projectDetails) === null || _work$projectDetails === void 0 ? void 0 : _work$projectDetails.map((project, index) => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                        className: "relative before:border-t-2 before:rounded before:border-black before:content-center before:absolute before:left-[-6px] before:top-[6px] before:w-[10px] before:h-[10px] before:bg-black border-l-2 border-black pl-4 ml-2",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                          className: "font-bold text-sm",
                          children: [project.title, ",", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                            className: "text-sm italic font-normal",
                            children: project.techUsed
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 158,
                            columnNumber: 37
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 156,
                          columnNumber: 35
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                          className: "text-sm italic",
                          children: [project.description, ",", ' ', project.contributions]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 162,
                          columnNumber: 35
                        }, this)]
                      }, index, true, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 33
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                    className: "text-sm font-bold",
                    children: work.projects
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                    className: "pl-4 mt-1",
                    children: work.contributions.map((task, index) => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                        className: "text-sm list-disc",
                        children: task
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 178,
                        columnNumber: 29
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 21
                }, this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 19
              }, this) : '';
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            className: "font-bold mt-2 border-b-2 border-black pb-1",
            children: "Education"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            children: _models_role_details__WEBPACK_IMPORTED_MODULE_1__["eductation"].map((course, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "relative inline-block w-1/2 pt-2 before:bg-black before:content-center before:absolute before:left-[12px] before:top-[-8px] before:h-[14px] before:w-[2px]",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                  className: "text-sm font-bold",
                  children: [course.title, ",", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                    className: "text-sm italic font-normal",
                    children: ["Aggregate ", course.percentage]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                  className: "text-sm",
                  children: [course.university, ", ", course.period]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 21
                }, this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 19
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this), [0, 1, 2].includes(role.index) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
            className: "font-bold mt-2 border-b-2 border-black inline-block",
            children: "Achivements"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            className: "border-l-2 border-black pl-4 ml-2",
            children: _models_role_details__WEBPACK_IMPORTED_MODULE_1__["achivements"].map((goal, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                className: "relative pt-1 before:border-t-2 before:border-black before:content-center before:absolute before:left-[-28px] before:top-[16px] before:w-[14px]",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                  className: "text-sm",
                  children: goal
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 23
                }, this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 21
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_pages_app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/app/app */ "./components/pages/app/app.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\samya\\Codes\\web\\samyadh.github.io\\apps\\web\\src\\main.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_pages_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ "./models/role-details.tsx":
/*!*********************************!*\
  !*** ./models/role-details.tsx ***!
  \*********************************/
/*! exports provided: roleDetails, workExperience, eductation, achivements, getExperience */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleDetails", function() { return roleDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workExperience", function() { return workExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eductation", function() { return eductation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "achivements", function() { return achivements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExperience", function() { return getExperience; });
const roleDetails = [{
  index: 0,
  title: 'Lead UI Developer',
  tagLine: 'Lead UI Developer with ' + getExperience() + ' experience',
  skills: ['JavaScript', 'Angular', 'React', 'NodeJS', 'SCSS', 'HTML', 'PHP', 'Python'],
  intro: 'Frontend developer with experience in building the pixel-perfect, beautiful, and robust user interface for products which is used by millions of people around the world every day.'
}, {
  index: 1,
  title: 'Team Lead',
  tagLine: 'Team Lead with ' + getExperience() + ' experience',
  skills: ['Agile', 'Scrum', 'NodeJS', 'JavaScript', 'Angular', 'React', 'PHP', 'Python', 'CI/CD', 'UI/UX Design'],
  intro: 'Vast experience in managing a team with up to 15 team members. By believing in “Be the change you wish to see in the world.” – MKG, I always strive to lead as an example, this approach has helped me to build and nurture teams to perform with great efficiency'
}, {
  index: 2,
  title: 'Full-Stack Developer',
  tagLine: 'Full-Stack Developer with ' + getExperience() + ' experience',
  skills: ['NodeJS', 'JavaScript', 'Angular', 'React', 'Python', 'PHP', 'CI/CD', 'REST/GRAPHQL', 'SQL/No SQL', 'UI/UX Design'],
  intro: 'Stitching kickass functionalities together and create world-class products is my passion. I love the logic and structure of coding, always look to write elegant and efficient code no matter which programming language it is.'
}, {
  index: 3,
  title: 'Technical Project Manager',
  tagLine: 'Technical Project Manager with ' + getExperience() + ' experience',
  skills: ['Agile', 'Scrum', 'Lean', 'PMI ACP', 'Resource Management', 'Risk Management', 'Delivery Management'],
  intro: 'Professional focused on working with multi-functional teams and increase customer satisfaction through the process. Proven experience in shipping world-class products on time.'
}, {
  index: 4,
  title: 'Tech Consultant',
  tagLine: 'Tech Consultant with ' + getExperience() + ' experience',
  skills: ['Project Management', 'Product Management', 'UI/UX Design', 'Node', 'Python', 'PHP', 'React', 'Angular', 'JavaScript', 'Agile', 'DevOps'],
  intro: 'People who know me say I am "Jack of all trades". However, I feel I know only enough to find, analyze and comprehend things that I do not know. I enjoy taking complex problems and find simple but beautiful solutions for them. Proven experience in guiding tech products to perform to their best.'
}];
const workExperience = [{
  title: 'Lead UI Developer',
  company: 'Reckonsys Tech Labs Pvt Ltd',
  period: ' Mar 2017 - Present',
  contributions: ['Oversee team responsible for design, development & deployment of SaaS platforms.', 'Design UI architecture to develop optimized frontend code.', 'Collaborate with client to design UX and develop intriguing  UI interfaces.', 'Motivate, encourage the team to deliver lean and robust applications on time.', 'Deliver applications to clients under a given time frame and help them to gain more familiarity with the system.'],
  projects: 'TransportSimple, Vndly, Kredily, IT People',
  projectDetails: [{
    title: 'Lenovo LanSchool',
    company: 'Lenovo Software',
    role: 'Individual Contributor',
    techUsed: 'Angular 12, Nx, Nightwatch, NodeJS, Jenkins',
    description: 'LanSchool is a Classroom Management & Guidance Web Platform. Some of the features are Communication and Screen Sharing, Limit web, Blank screen, Thumbnail monitoring, Messaging, Etc',
    contributions: 'I am involved in building microservices and reusable components, libraries for the platform using TDD. Also, work with UX designers to optimize user interactions. In addition to them, I work on various POCs for the platform and constantly mentoring juniors.'
  }, {
    title: 'Lenovo Vantage',
    company: 'Lenovo Software',
    role: 'Lead UI Developer',
    techUsed: 'Angular 11, NodeJS, UWP, Shell',
    description: 'Lenovo Vantage is a UWP application that helps users to manage their device settings, improve performance, and enhance their PC - no matter how you use it.',
    contributions: 'I was in charge of creating some of the beautiful and snappy user interfaces, also build the NodeJS library which interacted with the machine (Shell) to retrieve and update settings. Create / Integrate services that interacted with various service providers which are used in computers. Suggest and create POCs, also manage a team of 5 developers.'
  }]
}, {
  title: 'Senior Software Engineer',
  company: 'HyHop Mobility Technologies Pvt Ltd',
  period: 'Aug 2016 - Feb 2017',
  contributions: ['Manage design, development & deployment of HyHop Cabs App, Websites.', 'Lead a multi-discipline & multi-cultural team of 10 members.', 'Design system architecture, develop backend APIs and web systems to support transactions from various clients.', 'Write code for multiple Android apps, websites used by customers, operations.', 'Integrate secure payment gateway and other 3rd party APIs.'],
  projects: 'HyHop User App, HyHop Diver App, HyHop Operations Website, HyHop Public Website, Wedelicious'
}, {
  title: 'Software Engineer',
  company: 'Ness Technologies Pvt Ltd',
  period: 'Jan 2015 – Jul 2016',
  contributions: ['Create & implement methods to increase the efficiency and productivity of the consumer marketing email delivery team.', 'Collaborate with offshore designers and develop the best UI architecture for various well-known content delivery websites.', 'Design and develop one-off transactional pages across e-commerce portals and perform A/B testing results.', 'Follow the newest trends and technologies across the world and provide solutions to problems in existing system.'],
  projects: 'Readers Digest website/CMS, Taste of Home website/CMS, Family Handyman website/CMS, Newsletter, Saleforce'
}, {
  title: 'PHP Developer',
  company: 'Rossitek Software Solutions Pvt Ltd',
  period: 'Jan 2014 - Dec 2014',
  contributions: ['Interact with clients across the world to understand requirements and develop web and app systems.', 'Create responsive websites for various clients.', 'Discuss and develop REST APIs for Android, IOS apps to consume.'],
  projects: 'FDSee, Sivance, Soon Seng Huat, Ficep Approved, APESB, Book Kingdom, Mavego'
}, {
  hidden: [0, 1, 2],
  title: 'Tech Consultant',
  company: 'Freelance',
  period: 'Oct 2012 - Aug 2015',
  contributions: ['Brand development, design & code websites for numerous clients all over the world.', 'Create responsive websites for various clients.', 'Discuss and develop REST APIs for Android, IOS apps to consume.'],
  projects: 'Fantasy Us, Yepshow, Being in christ, MK Fairmont'
}];
const eductation = [{
  title: "Master's in Computer Application",
  university: 'Visvesvaraya Technological University',
  college: 'Malnad College of Engineering, Hassan',
  period: 'Sep 2011 – Apr 2014',
  percentage: '76%'
}, {
  title: "Bachelor's in Computer Application",
  university: 'Karnatak University',
  college: 'Global College of BBA & BCA, Hubli',
  period: 'Aug 2008 – May 2011',
  percentage: '64%'
}];
const achivements = ['Have visited all 4 corners of the country on a motorcycle.', 'Teach under-privileged kids computer basics every year.', 'Financially Aid education of 2 kids every year.', 'Represent District, School, College in various sports, competition and won prices.', 'Appreciation certificates while working as a software developer.'];
function getExperience() {
  const startDate = '2014-01-01';
  const diff = Math.floor(new Date().getTime() - new Date(startDate).getTime());
  const day = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);
  return years + '.' + months / 10 + ' years';
}

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\samya\Codes\web\samyadh.github.io\apps\web\src\main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map