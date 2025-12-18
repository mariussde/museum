import Nav from "../Nav";
import Landing from "./Landing";
import Locations from "./Locations";
import Biography from "./Biography";
import Explore from "./Explore";
import News from "./News";
import Shop from "./Shop";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <Nav />
      <Landing />
      <Biography />
      <Footer />
    </>
  );
}
