"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = __importDefault(require("../navbar/Navbar"));
var Menu_1 = __importDefault(require("../menu/Menu"));
var react_query_1 = require("@tanstack/react-query");
var react_query_2 = require("@tanstack/react-query");
var queryClient = new react_query_2.QueryClient();
var Layout = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "main" }, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "menu-container" }, { children: (0, jsx_runtime_1.jsx)(Menu_1.default, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "content-container" }, { children: (0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, __assign({ client: queryClient }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })) }))] }))] })));
};
exports.default = Layout;
