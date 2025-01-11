import { Outlet } from "react-router";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
