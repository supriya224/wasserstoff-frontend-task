import React from "react";
import MainLayout from "../layouts/MainLayout";
import ImageSlider from "./ImageSlider";
import Leftside from "./leftside";

interface CollectionlayoutProps {
  children: React.ReactNode;
}

const Collectionlayout: React.FC<CollectionlayoutProps> = (props) => {
  return (
    <MainLayout>
      {props.children}
    </MainLayout>
  );
};

export default Collectionlayout;
