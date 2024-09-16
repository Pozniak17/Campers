import { FaStar } from "react-icons/fa";

export const Stars = (quantity) => {
  if (quantity === 1) {
    return <FaStar />;
  } else if (quantity === 2) {
    return (
      <div style={{ color: " #FFC531", width: "16", height: "16" }}>
        <FaStar />
        <FaStar />
      </div>
    );
  } else if (quantity === 3) {
    return (
      <div style={{ color: " #FFC531", width: "16", height: "16" }}>
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    );
  } else if (quantity === 4) {
    return (
      <div style={{ color: " #FFC531", width: "16", height: "16" }}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    );
  } else if (quantity === 5) {
    return (
      <div style={{ color: " #FFC531", width: "16", height: "16" }}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    );
  }
};
