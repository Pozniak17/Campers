/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import CardList from "../components/Cards/CardList/CardList";
import axios from "axios";
import FilterList from "../components/Filters/FilterList/FilterList";
import { Layout } from "../components/Layout/Layout.module";

axios.defaults.baseURL = "https://6602f96b9d7276a75554be5d.mockapi.io";

export default function Catalog() {
  const [data, setData] = useState([]);
  const [page] = useState(1);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/advert", {
        params: {
          limit,
          page,
        },
      });
      console.log(response.data);
      setData(response.data);
    }
    fetchData();
  }, [page, limit]);

  const handleClick = () => {
    setLimit((prevState) => prevState + 4);
  };

  return (
    <Layout>
      <FilterList />
      <CardList items={data} click={handleClick} />
    </Layout>
  );
}
