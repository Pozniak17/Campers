import { useEffect, useState } from "react";
import CardList from "../components/Cards/CardList/CardList";
import axios from "axios";
import FilterList from "../components/Filters/FilterList/FilterList";
import { Layout } from "../components/Layout/Layout.module";

export default function Catalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://6602f96b9d7276a75554be5d.mockapi.io/advert"
      );
      console.log(response.data);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <FilterList />
      <CardList items={data} />
    </Layout>
  );
}
