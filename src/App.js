import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PromptsPage from "./pages/Prompts";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import { PromptSettingsAction } from "./components/PromptSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, action: PromptSettingsAction },
      { path: "prompts", element: <PromptsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
