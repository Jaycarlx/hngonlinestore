import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/Exploremenu/ExploreMenu";
import CtaMenu from "../../Components/CtaMenu/CtaMenu";
import FoodList from "../../Components/FoodList/FoodList";
import ExploreMenuRow from "../../Components/ExploreMenuRow/ExploreMenuRow";
import DownloadMobile from "../../Components/DowloadMobile/DownloadMobile";
import Delivery from "../../Components/Delivery/Delivery";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu />
      <CtaMenu />
      <FoodList category={category} setCategory={setCategory} />
      <ExploreMenuRow title={"ALL PRODUCTS"} />
      <Delivery />
      <DownloadMobile />
      <Footer />
    </div>
  );
};

export default Home;
