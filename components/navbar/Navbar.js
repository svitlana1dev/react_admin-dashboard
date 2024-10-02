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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./navbar.scss");
var Navbar = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "navbar" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "logo" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "./logo.png", alt: "logo" }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "icons" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/search.svg").default, alt: "search", className: "icon" }), (0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/app.svg").default, alt: "app", className: "icon" }), (0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/expand.svg").default, alt: "expand", className: "icon" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "notification" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/notifications.svg").default, alt: "notifications" }), (0, jsx_runtime_1.jsx)("span", { children: "1" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "user" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "./user.png", alt: "user photo" }), (0, jsx_runtime_1.jsx)("span", { children: "Hubbard Eula" })] })), (0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/settings.svg").default, alt: "settings", className: "icon" })] }))] })));
};
exports.default = Navbar;
