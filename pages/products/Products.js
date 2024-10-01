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
var DataTable_1 = __importDefault(require("../../components/dataTable/DataTable"));
var Add_1 = __importDefault(require("../../components/add/Add"));
// import { products } from "../../data";
var columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: function (params) {
            return (0, jsx_runtime_1.jsx)("img", { src: params.row.img || "./noavatar.png", alt: "" });
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 150,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 200,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 150,
        type: "boolean",
    },
];
var Products = function () {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)([]), products = _b[0], setProducts = _b[1];
    var toggleModal = function () {
        setOpen(function (currentState) { return !currentState; });
    };
    (0, react_1.useEffect)(function () {
        setProducts([]);
        axios_1.default
            .get("".concat(react_dotenv_1.default.REACT_API_URL, "/products"))
            .then(function (response) {
            setProducts(response.data);
        })
            .catch(function (error) {
            console.log(error);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "products" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "info" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Products" }), (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn-icon", onClick: toggleModal }, { children: (0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/plus.png"), alt: "add" }) }))] })), (0, jsx_runtime_1.jsx)(DataTable_1.default, { slug: "products", columns: columns, rows: products }), open && (0, jsx_runtime_1.jsx)(Add_1.default, { slug: "product", columns: columns, onClose: toggleModal })] })));
};
exports.default = Products;
