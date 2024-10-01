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
var Single_1 = __importDefault(require("../../components/single/Single"));
var Product = function () {
    var _a = (0, react_1.useState)(null), product = _a[0], setProduct = _a[1];
    (0, react_1.useEffect)(function () {
        axios_1.default
            .get("".concat(react_dotenv_1.default.REACT_API_URL, "/products/1"))
            .then(function (response) {
            setProduct(response.data);
        })
            .catch(function (error) {
            console.log(error);
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "product" }, { children: (0, jsx_runtime_1.jsx)(Single_1.default, __assign({}, product)) })));
};
exports.default = Product;
