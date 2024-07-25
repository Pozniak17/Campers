import axios from "axios";

axios.defaults.baseURL = "https://6602f96b9d7276a75554be5d.mockapi.io";

export const fetchCampers = async (limit, page) => {
  const response = await axios.get("/advert", {
    params: {
      limit,
      page,
    },
  });

  return response.data;
};

export const fetchCamperById = async (id) => {
  const response = await axios.get(`/advert/${id}`);
  return response.data;
};
