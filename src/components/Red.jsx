import { data, imgLinks } from "../sample_data";
import "./Red.css";

import Navbar from "./Navbar";
import Header from "./Header";
import Gallery from "./Gallery";
import Footer from "./Footer";

function Red() {
  const redData = data.filter((img) => img.isRed);
  return (
    <div id="redBody">
      <Navbar />
      <Header />
      <main id="main" className="redMain">
        <Gallery title={"Red"} data={redData} />
      </main>
      <Footer />
    </div>
  );
}

export default Red;
