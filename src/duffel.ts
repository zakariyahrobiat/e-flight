// import { Duffel } from '@duffel/api'

// export const duffel = new Duffel({
//   token: "b89fc6a02d323cddd0f4cff",
// })
// REACT_APP_DUFFEL_API_KEY=  "b89fc6a02d323cddd0f4cff"
import axios from "axios";

const duffelApi = axios.create({
  baseURL: "https://api.duffel.com", // Duffel's API base URL
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_DUFFEL_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export default duffelApi;

