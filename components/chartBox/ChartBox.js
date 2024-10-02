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
var recharts_1 = require("recharts");
require("./chartBox.scss");
var ChartBox = function (_a) {
    var color = _a.color, icon = _a.icon, title = _a.title, dataKey = _a.dataKey, number = _a.number, percentage = _a.percentage, chartData = _a.chartData;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "chart-box" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "box-info" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "title" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: icon, alt: "" }), (0, jsx_runtime_1.jsx)("span", { children: title })] })), (0, jsx_runtime_1.jsx)("h1", { children: number }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: "/", style: { color: color } }, { children: "View all" }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "chart-info" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "chart" }, { children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, __assign({ width: "99%", height: "100%" }, { children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, __assign({ data: chartData }, { children: [(0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { contentStyle: { background: "transparent", border: "none" }, labelStyle: { display: "none" }, position: { x: 10, y: 70 } }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: dataKey, stroke: color, strokeWidth: 2, dot: false })] })) })) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "texts" }, { children: [(0, jsx_runtime_1.jsxs)("span", __assign({ className: "percentage", style: { color: percentage < 0 ? "tomato" : "limegreen" } }, { children: [percentage, "%"] })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "duration" }, { children: "this month" }))] }))] }))] })));
};
exports.default = ChartBox;
