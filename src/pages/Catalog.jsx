import { useEffect, useState } from "react";
import CardList from "../components/CardList/CardList.tsx";
import FilterList from "../components/Filters/FilterList/FilterList";
import { Layout } from "../components/Layout/Layout.styled";
import { fetchCampers } from "../components/services/campers-api";
import { RotatingTriangles } from "react-loader-spinner";

export default function Catalog() {
  const [data, setData] = useState([]);
  const [page] = useState(1);
  const [limit, setLimit] = useState(4);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
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
      {loading ? (
        <div className="loader-container">
          <RotatingTriangles
            visible={true}
            height="80"
            width="180"
            color="#4fa94d"
            ariaLabel="rotating-triangles-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
          />
        </div>
      ) : (
        <>
          <FilterList />

          {data.length > 0 && <CardList items={data} click={handleClick} />}
        </>
      )}
      {error && (
        <h2>Whoops, something went wrong! Please try reloading this page!</h2>
      )}
    </Layout>
  );
}
