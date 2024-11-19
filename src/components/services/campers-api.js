import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = async (limit, page) => {
  const response = await axios.get("/campers", {
    params: {
      limit,
      page,
    },
  });

  return response.data.items;
};

export const fetchCamperById = async (id) => {
  const response = await axios.get(`/advert/${id}`);
  return response.data;
};
