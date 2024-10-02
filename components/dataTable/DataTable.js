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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var x_data_grid_1 = require("@mui/x-data-grid");
var react_router_dom_1 = require("react-router-dom");
require("./dataTable.scss");
var DataTable = function (_a) {
    var columns = _a.columns, rows = _a.rows, slug = _a.slug;
    var handleDelete = function (id) {
        console.log(id);
    };
    var actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: function (params) {
            return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "action" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: "/".concat(slug, "/").concat(params.row.id) }, { children: (0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/view.svg").default, alt: "view" }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "delete", onClick: function () { return handleDelete(params.row.id); } }, { children: (0, jsx_runtime_1.jsx)("img", { src: require("../../assets/images/icons/delete.svg").default, alt: "delete" }) }))] })));
        },
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "data-table" }, { children: (0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, { className: "data-grid", rows: rows, columns: __spreadArray(__spreadArray([], columns, true), [actionColumn], false), initialState: {
                pagination: {
                    paginationModel: {
                        pageSize: 10,
                    },
                },
            }, slots: { toolbar: x_data_grid_1.GridToolbar }, slotProps: {
                toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                },
            }, pageSizeOptions: [5], checkboxSelection: true, disableRowSelectionOnClick: true, disableColumnFilter: true, disableDensitySelector: true, disableColumnSelector: true }) })));
};
exports.default = DataTable;
