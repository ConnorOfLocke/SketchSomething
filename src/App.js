import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import SiteRouter from "./Router";
import DarkModeWrapper from "./components/DarkModeController";

function App() {
  return (
    <Provider store={store}>
      <DarkModeWrapper>
        <RouterProvider router={SiteRouter} />
      </DarkModeWrapper>
    </Provider>
  );
}

export default App;
