import { useState } from "react";
import { data, imgLinks } from "../sample_data";
import "./Home.css";

import Navbar from "./Navbar";
import Header from "./Header";
import Cards from "./Cards";
import Gallery from "./Gallery";
import Footer from "./Footer";

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Navbar />
      <Header />
      <main id="main">
        <Cards />
        <Gallery title={"Gallery"} data={data} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
