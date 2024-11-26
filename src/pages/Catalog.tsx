import { useEffect, useState } from "react";

// import FilterList from "../components/Filters/FilterList/FilterList.jsx";
import { Layout } from "../components/Layout/Layout.styled.js";
import { fetchCampers } from "../components/services/campers-api.js";
import { RotatingTriangles } from "react-loader-spinner";
import { CardList } from "../components/CardList/CardList.jsx";
import FilterList from "../components/Filters/FilterList/FilterList.jsx";

export interface Data {
  id: string;
  gallery: [{ thumb: string; original: string }];
  description: string;
  name: string;
  price: number;
  rating: number;
  reviews: [{}];
  location: string;
}

export const Catalog = () => {
  const [data, setData] = useState<Data[]>([]);

  const [page] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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
            ariaLabel="rotating-triangles-loading"
            wrapperStyle={{ color: "#4fa94d" }}
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
};
