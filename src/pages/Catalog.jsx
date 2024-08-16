/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import CardList from "../components/Cards/CardList/CardList";
import FilterList from "../components/Filters/FilterList/FilterList";
import { Layout } from "../components/Layout/Layout.module";
import { fetchCampers } from "../components/services/campers-api";
import { RotatingTriangles } from "react-loader-spinner";
import { useSelector } from "react-redux";
// import EquipmentFilter from "../components/Filters/EquipmentFilter/EquipmentFilter";

export default function Catalog() {
  const campers = useSelector((state) => state.campers);
  console.log(campers);
  // const [data, setData] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [equipment, setEquipment] = useState({
    airConditioner: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  });

  const [page] = useState(1);
  const [limit, setLimit] = useState(4);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setError(false);
  //       setIsLoading(true);
  //       const campersData = await fetchCampers(limit, page);
  //       setData(campersData);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, [limit, page]);

  const handleClick = () => {
    setLimit((prevState) => prevState + 4);
  };

  // функція фільтру за обладжнанням
  // const handleEquipmentChange = (newEquipment) => {
  //   setEquipment(newEquipment);
  // };

  // const visibleItems = campers.filter((item) =>
  //   item.location.toLowerCase().includes(locationFilter.toLowerCase())
  // );

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
          <FilterList
            equipment={equipment}
            // onEquipmentChange={handleEquipmentChange}
          />

          {campers.length > 0 && (
            <CardList
              // items={visibleItems}
              click={handleClick}
              filterData={locationFilter}
            />
          )}
        </>
      )}
      {error && (
        <h2>Whoops, something went wrong! Please try reloading this page!</h2>
      )}
    </Layout>
  );
}
