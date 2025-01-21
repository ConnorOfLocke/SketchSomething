import { createBrowserRouter } from "react-router-dom";
import SessionPage from "./pages/SessionPage";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const SiteRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "session", element: <SessionPage /> },
    ],
  },
]);

export default SiteRouter;
