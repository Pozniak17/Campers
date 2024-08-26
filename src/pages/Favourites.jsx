import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourites } from "../redux/favouritesSlice";
import Card from "../components/Cards/Card/Card";

export default function Favourites() {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleToggleFavorite = (campersData) => {
    dispatch(removeFromFavourites(campersData._id));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Favourites campers</h1>
      {favourites.length > 0 ? (
        favourites.map((item) => (
          <Card
            key={item._id}
            campersData={item}
            onToggleFavorite={handleToggleFavorite}
          />
        ))
      ) : (
        <h2>No favourites campers</h2>
      )}
    </div>
  );
}
