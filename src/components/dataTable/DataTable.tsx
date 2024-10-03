import { FC } from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./dataTable.scss";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  onDelete: (id: number) => void;
};

const DataTable: FC<Props> = ({ columns, rows, slug, onDelete }) => {
  const handleDelete = (id: number) => {
    onDelete(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          {/* <Link to={`/${slug}/${params.row.id}`}>
            <img
              src={require("../../assets/images/icons/view.svg").default}
              alt="view"
            />
          </Link> */}
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img
              src={require("../../assets/images/icons/delete.svg").default}
              alt="delete"
            />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="data-table">
      <DataGrid
        className="data-grid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
