import { useState, useEffect } from "react";
import env from "react-dotenv";
import axios from "axios";
import Single from "../../components/single/Single";

const Product = () => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`${env.REACT_API_URL}:${env.API_PORT}/products/1`)
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
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
