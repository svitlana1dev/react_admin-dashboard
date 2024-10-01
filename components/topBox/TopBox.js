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
var react_1 = require("react");
var react_dotenv_1 = __importDefault(require("react-dotenv"));
var axios_1 = __importDefault(require("axios"));
require("./topBox.scss");
var TopBox = function () {
    var _a = (0, react_1.useState)([]), topDealUsers = _a[0], setTopDealUsers = _a[1];
    (0, react_1.useEffect)(function () {
        axios_1.default
            .get("".concat(react_dotenv_1.default.REACT_API_URL, "/users"))
            .then(function (response) {
            setTopDealUsers(response.data.filter(function (data) { return +data.amount > 3; }));
        })
            .catch(function (error) {
            console.log(error);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "top-box" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Top Deals" }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "list" }, { children: topDealUsers.map(function (user) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "list-item" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "user" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: user.img, alt: "user" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "user-texts" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "username" }, { children: user.firstname + " " + user.lastname })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "email" }, { children: user.email }))] }))] })), (0, jsx_runtime_1.jsxs)("span", __assign({ className: "amount" }, { children: ["$", user.amount] }))] }), user.id)); }) }))] })));
};
exports.default = TopBox;
