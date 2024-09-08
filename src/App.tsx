import { RouterProvider } from "react-router-dom";
import useRefresh from "./hooks/useRefresh";
import { rootRoutes } from "./routes/routes";

export default function App() {
  useRefresh();
  return <RouterProvider router={rootRoutes} />;
}
