import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import SiteRouter from "./Router";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={SiteRouter} />
    </Provider>
  );
}

export default App;
