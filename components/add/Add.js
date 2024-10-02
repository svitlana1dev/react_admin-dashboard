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
var Input_1 = require("../input/Input");
require("./add.scss");
var Add = function (_a) {
    var slug = _a.slug, columns = _a.columns, onClose = _a.onClose;
    var handleSubmit = function (e) {
        e.preventDefault();
        onClose();
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "add" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "modal" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "btn-icon btn-icon--close", onClick: function () { return onClose(); } }, { children: (0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/plus.png"), alt: "add" }) })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h3", { children: ["Add new ", slug] }), (0, jsx_runtime_1.jsxs)("form", __assign({ onSubmit: handleSubmit }, { children: [columns
                                    .filter(function (item) { return item.field !== "id" && item.field !== "img"; })
                                    .map(function (column) { return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "item" }, { children: (0, jsx_runtime_1.jsx)(Input_1.Input, { headerName: column.headerName, type: column.type, field: column.field }) }))); }), (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn" }, { children: "Send" }))] }))] })] })) })));
};
exports.default = Add;
