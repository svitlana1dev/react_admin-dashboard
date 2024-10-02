import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
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

const Products = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const toggleModal = () => {
    setOpen((currentState) => !currentState);
  };

  useEffect(() => {
    setProducts([]);
    axios
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button className="btn-icon" onClick={toggleModal}>
          <img src={require("../../assets/images/icons/plus.png")} alt="add" />
        </button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} onClose={toggleModal} />}
    </div>
  );
};

export default Products;
