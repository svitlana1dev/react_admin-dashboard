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
require("./single.scss");
var Single = function (_a) {
    var img = _a.img, verified = _a.verified, info = _a.info, chart = _a.chart, activities = _a.activities;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "single" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "view" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "content" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "top-info ".concat(verified ? "top-info--verified" : "") }, { children: img && (0, jsx_runtime_1.jsx)("img", { src: img, alt: "image" }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "details" }, { children: Object.entries(info).map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "item" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "item-title" }, { children: item[0] })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "item-value" }, { children: item[1] }))] }), item[0] + index)); }) }))] })), (0, jsx_runtime_1.jsx)("hr", {}), chart && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "chart" }, { children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, __assign({ width: "100%", height: "100%" }, { children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, __assign({ width: 500, height: 300, data: chart.data, margin: {
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                } }, { children: [(0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "name" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, {}), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {}), (0, jsx_runtime_1.jsx)(recharts_1.Legend, {}), chart.dataKeys.map(function (dataKey) { return ((0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: dataKey.name, stroke: dataKey.color })); })] })) })) })))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "activities" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Latest Activities" }), activities && ((0, jsx_runtime_1.jsx)("ul", { children: activities.map(function (activity, index) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: activity.text }), (0, jsx_runtime_1.jsx)("time", { children: activity.time })] }) }, activity.text + index)); }) }))] }))] })));
};
exports.default = Single;
