import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food></Food>
      <Category />
      <Footer />
    </div>
  );
}

export default App;
