import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./campersSlice";

axios.defaults.baseURL = "https://6602f96b9d7276a75554be5d.mockapi.io";

export const fetchCampers = () => async (dispatch) => {
  try {
    // індикатор завантаження
    dispatch(fetchingInProgress());
    //   HTTP-запит
    const response = await axios.get("/advert", {
      params: {
        limit: 4,
        page: 1,
      },
    });
    console.log(response.data);
    //   Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
