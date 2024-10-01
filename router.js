"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Home_1 = __importDefault(require("./pages/home/Home"));
var react_router_dom_1 = require("react-router-dom");
var Users_1 = __importDefault(require("./pages/users/Users"));
var Products_1 = __importDefault(require("./pages/products/Products"));
var Login_1 = __importDefault(require("./pages/login/Login"));
var User_1 = __importDefault(require("./pages/user/User"));
var Product_1 = __importDefault(require("./pages/product/Product"));
var Layout_1 = __importDefault(require("./components/layout/Layout"));
exports.router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}),
        children: [
            {
                path: "/",
                element: (0, jsx_runtime_1.jsx)(Home_1.default, {}),
            },
            {
                path: "/users",
                element: (0, jsx_runtime_1.jsx)(Users_1.default, {}),
            },
            {
                path: "/products",
                element: (0, jsx_runtime_1.jsx)(Products_1.default, {}),
            },
            {
                path: "/users/:id",
                element: (0, jsx_runtime_1.jsx)(User_1.default, {}),
            },
            {
                path: "/products/:id",
                element: (0, jsx_runtime_1.jsx)(Product_1.default, {}),
            },
        ],
    },
    {
        path: "/login",
        element: (0, jsx_runtime_1.jsx)(Login_1.default, {}),
    },
]);
