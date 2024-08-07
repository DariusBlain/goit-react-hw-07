import axios from "axios";
import { fetchData, setErrorStatus, setLoadingStatus } from "./contactsSlice";

axios.defaults.baseURL = "https://66b31db37fba54a5b7eb7749.mockapi.io/";

export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const response = await axios.get("contacts");
    dispatch(fetchData(response.data));
  } catch (error) {
    dispatch(setErrorStatus(error));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const response = await axios.delete(`contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setErrorStatus(error));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};
