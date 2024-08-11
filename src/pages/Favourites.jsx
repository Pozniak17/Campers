// Favourites.jsx
import { useCallback, useEffect, useState } from "react";
import Card from "../components/Cards/Card/Card";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleToggleFavorite = useCallback((campersData) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((fav) => fav._id !== campersData._id)
    );
  });

  useEffect(() => {
    // Завантажити список "улюблених" з localStorage
    const savedFavourites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavourites(savedFavourites);
  }, [handleToggleFavorite]);

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
