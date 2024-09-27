import { FC, useState } from "react";

type Props = {
  headerName?: string;
  type?: string;
  field: string;
};

export const Input: FC<Props> = ({ headerName, type, field }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <label>{headerName || ""}</label>
      <input
        type={type || "text"}
        value={value}
        placeholder={field}
        onChange={handleOnChange}
      />
    </>
  );
};
