import { RouterProvider } from "react-router-dom";
import axios from "axios";
import { router } from "./router";
import "./styles/global.scss";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  return <RouterProvider router={router} />;
}

export default App;
