import { BrowserRouter, Route, Routes } from "react-router";
import PromptsPage from "./pages/Prompts";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="prompts" element={<PromptsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
