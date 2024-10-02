import { useState, useEffect } from "react";
import axios from "axios";
import Single from "../../components/single/Single";

const Product = () => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios
      .get("/products/1")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="product">
      <Single {...product} />
    </div>
  );
};

export default Product;
