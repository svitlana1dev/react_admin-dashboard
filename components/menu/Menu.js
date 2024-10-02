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
var react_router_dom_1 = require("react-router-dom");
var data_1 = require("../../data");
require("./menu.scss");
var Menu = function () {
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "menu" }, { children: data_1.menu.map(function (item) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "item" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "title" }, { children: item.title })), item.listItems.map(function (listItem) { return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, __assign({ to: listItem.url, className: "list-item" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: listItem.icon, alt: "" }), (0, jsx_runtime_1.jsx)("span", __assign({ className: "list-item_title" }, { children: listItem.title }))] }), listItem.id)); })] }), item.id)); }) })));
};
exports.default = Menu;
