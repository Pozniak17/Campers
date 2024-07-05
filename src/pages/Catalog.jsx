/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import CardList from "../components/Cards/CardList/CardList";
import axios from "axios";
import FilterList from "../components/Filters/FilterList/FilterList";
import { Layout } from "../components/Layout/Layout.module";

axios.defaults.baseURL = "https://6602f96b9d7276a75554be5d.mockapi.io";

export default function Catalog() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/advert", {
        params: {
          limit: 4,
          page: page,
        },
      });
      console.log(response.data);
      setData(response.data);
    }
    fetchData();
  }, [page]);

  const handleClick = () => {
    return setPage(page + 1);
  };

  return (
    <Layout>
      <FilterList />
      <CardList items={data} click={handleClick} />
    </Layout>
  );
}
