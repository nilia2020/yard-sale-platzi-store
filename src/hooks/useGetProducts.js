import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios(API);
      setProducts(
        response.data.filter((item) => {
          return item.id < 200;
        })
      );
    }
    fetchdata();
  }, [API]);
  return products;
};

export default useGetProducts;
