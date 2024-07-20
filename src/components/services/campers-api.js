import axios from "axios";

axios.defaults.baseURL = "https://6602f96b9d7276a75554be5d.mockapi.io";

export const fetchCampers = async () => {
  const response = await axios.get("/advert", {
    params: {
      limit: 4,
      page: 1,
    },
  });

  console.log("API Response:", response.data);

  return response.data;
};
