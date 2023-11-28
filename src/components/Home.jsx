import { useState } from "react";
import { data, imgLinks } from "../sample_data";
import "./Home.css";

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <body>
      <button onClick={increment}>Counter: {count}</button>
      <br /> <br />
      <img src={data[0].url} alt="blue picture" />
    </body>
  );
}

export default Home;
