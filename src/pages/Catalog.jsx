/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import CardList from "../components/Cards/CardList/CardList";
import FilterList from "../components/Filters/FilterList/FilterList";
import { Layout } from "../components/Layout/Layout.module";
import { fetchCampers } from "../components/services/campers-api";

export default function Catalog() {
  const [data, setData] = useState([]);
  const [page] = useState(1);
  const [limit, setLimit] = useState(4);
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const campersData = await fetchCampers(limit, page);
        setData(campersData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [limit, page]);

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
