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
var BarChartBox_1 = __importDefault(require("../../components/barChartBox/BarChartBox"));
var BigChartBox_1 = __importDefault(require("../../components/bigChartBox/BigChartBox"));
var ChartBox_1 = __importDefault(require("../../components/chartBox/ChartBox"));
var PieChartBox_1 = __importDefault(require("../../components/pieCartBox/PieChartBox"));
var TopBox_1 = __importDefault(require("../../components/topBox/TopBox"));
var data_1 = require("../../data");
require("./home.scss");
var Home = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "home" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "box box1" }, { children: (0, jsx_runtime_1.jsx)(TopBox_1.default, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "box box2" }, { children: (0, jsx_runtime_1.jsx)(ChartBox_1.default, __assign({}, data_1.chartBoxUser)) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "box box3" }, { children: (0, jsx_runtime_1.jsx)(ChartBox_1.default, __assign({}, data_1.chartBoxProduct)) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "box box4" }, { children: (0, jsx_runtime_1.jsx)(PieChartBox_1.default, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "box box5" }, { children: (0, jsx_runtime_1.jsx)(ChartBox_1.default, __assign({}, data_1.chartBoxConversion)) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "box box6" }, { children: (0, jsx_runtime_1.jsx)(ChartBox_1.default, __assign({}, data_1.chartBoxRevenue)) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "box box7" }, { children: (0, jsx_runtime_1.jsx)(BigChartBox_1.default, {}) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "box box8" }, { children: (0, jsx_runtime_1.jsx)(BarChartBox_1.default, __assign({}, data_1.barChartBoxVisit)) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "box box9" }, { children: (0, jsx_runtime_1.jsx)(BarChartBox_1.default, __assign({}, data_1.barChartBoxRevenue)) }))] })));
};
exports.default = Home;
