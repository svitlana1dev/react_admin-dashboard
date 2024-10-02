"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Input = function (_a) {
    var headerName = _a.headerName, type = _a.type, field = _a.field;
    var _b = (0, react_1.useState)(""), value = _b[0], setValue = _b[1];
    var handleOnChange = function (e) {
        setValue(e.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", { children: headerName || "" }), (0, jsx_runtime_1.jsx)("input", { type: type || "text", value: value, placeholder: field, onChange: handleOnChange })] }));
};
exports.Input = Input;
