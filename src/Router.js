import { createBrowserRouter } from "react-router-dom";
import SessionPage from "./pages/SessionPage";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

const SiteRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "session", element: <SessionPage /> },
    ],
  },
]);

export default SiteRouter;
