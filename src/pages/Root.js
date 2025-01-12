import {} from "./Root.module.css";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <main>
      <img src="/WIPStamp.png" alt="Work in Progress Stamp" />
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
