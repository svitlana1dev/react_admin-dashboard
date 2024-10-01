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
var recharts_1 = require("recharts");
require("./pieChartBox.scss");
var data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
];
var PieChartBox = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "pie-chart-box" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Leads by Source" }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "chart" }, { children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, __assign({ width: "99%", height: 300 }, { children: (0, jsx_runtime_1.jsxs)(recharts_1.PieChart, { children: [(0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { contentStyle: { background: "#fff", borderRadius: "5px" } }), (0, jsx_runtime_1.jsx)(recharts_1.Pie, __assign({ data: data, innerRadius: "70%", outerRadius: "90%", paddingAngle: 5, dataKey: "value" }, { children: data.map(function (item) { return ((0, jsx_runtime_1.jsx)(recharts_1.Cell, { fill: item.color }, item.name)); }) }))] }) })) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "options" }, { children: data.map(function (item) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "option" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "title" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "dot", style: { backgroundColor: item.color } }), (0, jsx_runtime_1.jsx)("span", { children: item.name })] })), (0, jsx_runtime_1.jsx)("span", { children: item.value })] }), item.name)); }) }))] })));
};
exports.default = PieChartBox;
