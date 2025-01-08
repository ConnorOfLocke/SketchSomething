import { Outlet } from "react-router";
import ContentBox from "../components/ContentBox";

function RootLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default RootLayout;
