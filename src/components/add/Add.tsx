import { FC } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { Input } from "../input/Input";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  onClose: () => void;
};

const Add: FC<Props> = ({ slug, columns, onClose }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };
  return (
    <div className="add">
      <div className="modal">
        <button className="btn-icon btn-icon--close" onClick={() => onClose()}>
          <img src={require("../../assets/images/icons/plus.png")} alt="add" />
        </button>
        <div>
          <h3>Add new {slug}</h3>
          <form onSubmit={handleSubmit}>
            {columns
              .filter((item) => item.field !== "id" && item.field !== "img")
              .map((column) => (
                <div className="item">
                  <Input
                    headerName={column.headerName}
                    type={column.type}
                    field={column.field}
                  />
                </div>
              ))}
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
