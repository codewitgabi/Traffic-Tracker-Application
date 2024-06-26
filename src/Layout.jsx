import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ScrollButton from "./Components/ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>

      <ScrollButton />
    </section>
  );
};

export default Layout;
