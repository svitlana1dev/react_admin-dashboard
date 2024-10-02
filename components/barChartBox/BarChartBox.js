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
require("./barChartBox.scss");
var BarChartBox = function (_a) {
    var title = _a.title, color = _a.color, dataKey = _a.dataKey, chartData = _a.chartData;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "barChartBox" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: title }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "chart" }, { children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, __assign({ width: "99%", height: 150 }, { children: (0, jsx_runtime_1.jsxs)(recharts_1.BarChart, __assign({ data: chartData }, { children: [(0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { contentStyle: { background: "#2a3447", borderRadius: "5px" }, labelStyle: { display: "none" }, cursor: { fill: "none" } }), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: dataKey, fill: color })] })) })) }))] })));
};
exports.default = BarChartBox;
