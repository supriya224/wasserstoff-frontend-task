import React from "react";
import MainLayout from "../layouts/MainLayout";

interface EventlayoutProps {
  children: React.ReactNode;
}

const Eventlayout: React.FC<EventlayoutProps> = (props) => {
  return (
    <MainLayout>
      {props.children}
    </MainLayout>
  );
};

export default Eventlayout;
