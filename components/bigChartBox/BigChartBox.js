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
require("./bigChartBox.scss");
var data = [
    {
        name: "Sun",
        books: 4000,
        clothes: 2400,
        electronic: 2400,
    },
    {
        name: "Mon",
        books: 3000,
        clothes: 1398,
        electronic: 2210,
    },
    {
        name: "Tue",
        books: 2000,
        clothes: 9800,
        electronic: 2290,
    },
    {
        name: "Wed",
        books: 2780,
        clothes: 3908,
        electronic: 2000,
    },
    {
        name: "Thu",
        books: 1890,
        clothes: 4800,
        electronic: 2181,
    },
    {
        name: "Fri",
        books: 2390,
        clothes: 3800,
        electronic: 2500,
    },
    {
        name: "Sat",
        books: 3490,
        clothes: 4300,
        electronic: 2100,
    },
];
var BigChartBox = function () {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "big-chart-box" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Revenue Analytics" }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "chart" }, { children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, __assign({ width: "99%", height: "100%" }, { children: (0, jsx_runtime_1.jsxs)(recharts_1.AreaChart, __assign({ data: data, margin: {
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        } }, { children: [(0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "name" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, {}), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {}), (0, jsx_runtime_1.jsx)(recharts_1.Area, { type: "monotone", dataKey: "electronic", stackId: "1", stroke: "#8884d8", fill: "#8884d8" }), (0, jsx_runtime_1.jsx)(recharts_1.Area, { type: "monotone", dataKey: "clothes", stackId: "1", stroke: "#82ca9d", fill: "#82ca9d" }), (0, jsx_runtime_1.jsx)(recharts_1.Area, { type: "monotone", dataKey: "books", stackId: "1", stroke: "#ffc658", fill: "#ffc658" })] })) })) }))] })));
};
exports.default = BigChartBox;
