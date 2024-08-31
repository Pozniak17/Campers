/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import CardList from "../components/Cards/CardList/CardList";
import FilterList from "../components/Filters/FilterList/FilterList";
import { Layout } from "../components/Layout/Layout.module";

import { RotatingTriangles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../redux/selectors";
import { fetchCampers } from "../redux/operations";

// import EquipmentFilter from "../components/Filters/EquipmentFilter/EquipmentFilter";

export default function Catalog() {
  const dispatch = useDispatch();

  // отримуємо частини стану
  const { items, isLoading, error } = useSelector(getCampers);

  // викликаємо операцію
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const visibleItems = useSelector((state) => state.filters.visibleItems);

  console.log(visibleItems);

  const [equipment, setEquipment] = useState({
    airConditioner: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  });

  // const [page] = useState(1);
  const [limit, setLimit] = useState(4);

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

  // Рендерим розмітку в залежності від значень у стані
  return (
    <Layout>
      {isLoading ? (
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

          {items.length > 0 && <CardList click={handleClick} />}
        </>
      )}
      {error && (
        <h2>Whoops, something went wrong! Please try reloading this page!</h2>
      )}
    </Layout>
  );
}
