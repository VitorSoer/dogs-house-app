import React from "react";

import Header from "../../component/header/header";
import Features from "../../component/features/features";
import Story from "../../component/story/story";
import Gallery from "../../component/gallery/gallery";
import Info from "../../component/infocards/info";

function Home() {
  return (
    <div>
      <Header />
      <Features />
      <Info />
      <Story />
      <Gallery />
    </div>
  );
}

export default Home;
